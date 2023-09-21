import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookInfoType } from './types';

function App() {
  const [index, setIndex] = useState(0);
  const [wishList, setWishList] = useState<BookInfoType[]>([]);
  const [readList, setReadList] = useState<BookInfoType[]>([]);
  const [readedList, setReadedList] = useState<BookInfoType[]>([]);
  const [currentList, setCurrentList] = useState<BookInfoType[]>([]);

  function handleClick() {
    if (index + 1 < data.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handleAddWish() {
    const selectedItem = data[index];
    setWishList((prevWishList) => [...prevWishList, selectedItem]);
  }
  function handleAddRead() {
    const selectedItem = data[index];
    setReadList((prevWishList) => [...prevWishList, selectedItem]);
  }
  function handleAddReaded() {
    const selectedItem = data[index];
    setReadedList((prevWishList) => [...prevWishList, selectedItem]);
  }
  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[index] } showDetails />
        <div className="selector-buttons">
          <button onClick={ handleAddWish }>Adicionar à lista de desejos</button>
          <button onClick={ handleAddRead }>Adicionar à lista de leitura</button>
          <button onClick={ handleAddReaded }>Adicionar à lista de lidos</button>
          <button onClick={ handleClick }>Próximo livro</button>
        </div>
      </div>

      <div className="list-buttons">
        {/* <button
          onClick={ () => setCurrentList(wishList) }
        >
          Exibir lista de desejos

        </button>
        <button
          onClick={ () => setCurrentList(readList) }
        >
          Exibir lista de leitura

        </button>
        <button
          onClick={ () => setCurrentList(readedList) }
        >
          Exibir lista de lidos

        </button> */}
        <button>
          Exibir lista de desejos
        </button>
        <button>
          Exibir lista de leitura
        </button>
        <button>
          Exibir lista de lidos
        </button>
      </div>
      <h1>Lista de ...</h1>
      <BookList books={ wishList } />
    </div>
  );
}

export default App;
