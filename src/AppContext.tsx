import { createContext } from "react";
import { IAppContext, IAppProvider } from "./interfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import { IBook, IFlashcard, IRawFlashcard } from "./interfaces";
import * as tools from "./tools";

const booksUrl = "https://edwardtanguay.vercel.app/share/techBooks.json";

const flashcardsUrl = "http://localhost:5556/flashcards";

const mockApiWaitSeconds = 3;

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [flashcards, setFlashcards] = useState<IFlashcard[]>([]);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const rawBooks = (await axios.get(booksUrl)).data;
        const _books: IBook[] = [];
        rawBooks.forEach((rawBook: IBook) => {
          const _book: IBook = {
            ...rawBook,
            language:
              rawBook.language === ""
                ? "English"
                : tools.capitalizeFirstLetter(rawBook.language),
          };
          _books.push(_book);
        });
        setBooks(_books);
      })();
    }, mockApiWaitSeconds * 1000);
  }, []);

  useEffect(() => {
    (async () => {
      const rawFlashcards = (await axios.get(flashcardsUrl)).data;
      const _flashcards: IFlashcard[] = [];
      rawFlashcards.forEach((rawFlashcard: IFlashcard) => {
        const _flashcard: IRawFlashcard = {
          ...rawFlashcard,
          isOpen: false,
        };
        _flashcards.push(_flashcard);
      });
      setFlashcards(_flashcards);
    })();
  }, []);

  const handleToggleFlashcard = (flashcard: IRawFlashcard) => {
    flashcard.isOpen = !flashcard.isOpen;
    setFlashcards([...flashcards]);
  };

  const appTitle = "The Study Group";

  return (
    <AppContext.Provider
      value={{
        appTitle,
        books,
        flashcards,
        handleToggleFlashcard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
