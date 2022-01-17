import { useState, useEffect, useContext } from "react";
import { ImCart, ImHeart, ImUser } from "react-icons/im";
import Image from "../../Features/image/Image";
// import "./home.scss";
import { userDecoding } from "../../utils/userDecoding";
import { Context } from "../../../context/context";

const Cart = () => {
  const { user } = useContext(Context);
  let curetUser;
  if (user) {
    curetUser = userDecoding(user);
  }
  else{
    window.location.pathname="/SignIn"
  }

  console.log(curetUser);
  const [books, setBook] = useState(curetUser.books);
  console.log(books);

  return (
    <div className="home-root">
      <div
        className="home-intro animate__animated animate__zoomIn"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1165982/pexels-photo-1165982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=${800}&w=${800})`,
        }}
      >
        <h1>
          {" "}
          Booknode <br /> A place where imagination has no boundaries ...
        </h1>
      </div>
      <div className="search-background">
        <div className="home-search">
          <div className="search-icons">
            <a href="http://localhost:3000/">
              {curetUser ? (
                <p className="userInfo">{curetUser.firstName}</p>
              ) : (
                ""
              )}
              <ImUser />
            </a>
            <a href="http://localhost:3000/Books">
              {curetUser ? (
                <p className="userInfo">
                  {curetUser.books ? curetUser.wishList.length : 0}
                </p>
              ) : (
                ""
              )}
              <ImHeart />
            </a>
            <a href="http://localhost:3000/Books">
              {curetUser ? (
                <p className="userInfo">
                  {curetUser.books ? curetUser.books.length : 0}
                </p>
              ) : (
                ""
              )}
              <ImCart />
            </a>
          </div>
        </div>
      </div>
      <div className="home-images">
        {books?.map((book, index) => {
          return (
            <Image
              key={book._id}
              nameBook={book.name}
              image={book.pic}
              author={book.author}
              summary={book.summary?.slice(0, 80) + "..."}
              id={book._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
