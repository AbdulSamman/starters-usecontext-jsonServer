export interface IAppProvider {
  children: React.ReactNode;
}
export interface IBook {
  id: number;
  idCode: string;
  title: string;
  description: string;
  language: string;
}
export interface IFlashcard {
  id: number;
  category: string;
  front: string;
  back: string;
}

export interface IRawFlashcard {
  id: number;
  category: string;
  front: string;
  back: string;
  isOpen: boolean;
}
export interface IAppContext {
  appTitle: string;
  books: IBook[];
  flashcards: IFlashcard[];
  handleToggleFlashcard: (arg0: IRawFlashcard) => void;
}
