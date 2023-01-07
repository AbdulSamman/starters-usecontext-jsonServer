import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IBook } from "../interfaces";

export const PageBooks = () => {
  const { books } = useContext(AppContext);

  return (
    <div className="pageBooks">
      <p>We have these {books.length} books:</p>
      {books.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="books">
          {books.map((book: IBook) => {
            return (
              <div className="book" key={book.id}>
                <img
                  src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
                />
                <div className="info">
                  <div className="title">{book.title}</div>
                  <div className="description">{book.description}</div>
                  <div className="language">{book.language}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
