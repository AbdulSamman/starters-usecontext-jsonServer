import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageFlashcards = () => {
  const { flashcards, handleToggleFlashcard } = useContext(AppContext);

  return (
    <div className="pageFlashcards">
      <p>We are currently learning these {flashcards.length} flashcards:</p>

      <div className="flashcards">
        {flashcards.map((flashcard: any) => {
          return (
            <div className="flashcard" key={flashcard.id}>
              <div
                className="front"
                onClick={() => handleToggleFlashcard(flashcard)}
              >
                {flashcard.front}
              </div>
              {flashcard.isOpen && <div className="back">{flashcard.back}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
