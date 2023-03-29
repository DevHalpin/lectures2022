import { useEffect, useState } from "react";
import "./App.css";
import BookCard from "./components/BookCard";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([
    {
      volumeInfo: { title: "Test Book", description: "This book is awesome", imageLinks: {
        smallThumbnail: ""
      } },

      id: "dfgjkhdfgshjku",
      
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=dinosaur`)
      .then((res) => {
        
        setBooks((prev) => [...prev, ...res.data.items]);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((res) => setBooks(res.data.items));
  };

  return (
    <div>
      <h1>Welcome to the Book Search!</h1>
      <h2>Search:</h2>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={(event) => onSubmit(event)}>Submit</button>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.smallThumbnail}
        />
      ))}
    </div>
  );
}

export default App;
