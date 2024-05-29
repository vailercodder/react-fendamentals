import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function Greeting() {
//   return <h2  >hello there, my first component is ALIVE!</h2>;
// }

// function Greeting() {
//   return (
//     <div>
//       <h3>hello man</h3>
//       <ul>
//         <li>
//           <a href="#"> hello</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }
// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p> this is my Message</p>;
// };

// const root = ReactDOM.createRoot(document.getElementById(`root`));

// root.render(<Greeting></Greeting>);

// const firstBook = {
//   author:"vailer",
//   title:"the boy who said `ah`"
//   img:"https://m.media-amazon.com/images/I/5112eIqM9pL._SY445_SX342_.jpg"

// }

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/81MYaU742TL._AC_UL600_SR600,400_.jpg"
//     alt="va"
//   ></img>
// );
// const Title = () => <h2> The End of Everything</h2>;
// const Author = () => {
//   return (
//     <h4 style={{ color: "#619d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
//       {" "}
//       Victor Davis Hanson
//     </h4>
//   );
// };

//----SIMPLE LIST--------------------------------------------------------
const books = [
  {
    author: "vailer",
    title: "wow",
    img: "https://m.media-amazon.com/images/I/913C+MR3S5L._SY466_.jpg",
  },
  {
    author: "motinp",
    title: "wow",
    img: "https://m.media-amazon.com/images/I/913C+MR3S5L._SY466_.jpg",
  },
];

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
Explanation;
