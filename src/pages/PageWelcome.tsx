import { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";

export const PageWelcome = () => {
  const { books, flashcards } = useContext(AppContext);

  return (
    <>
      <div className="pageWelcome">
        <p>Welcome to this site.</p>
        {books.length === 0 ? (
          <p>Loading....</p>
        ) : (
          <p>
            In our club we are reading{" "}
            <NavLink to="/books">{books.length} books</NavLink> learning{" "}
            <NavLink to="/flashcards">{flashcards.length} flashcards</NavLink>.
          </p>
        )}
      </div>
    </>
  );
};
