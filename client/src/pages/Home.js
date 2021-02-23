import React from "react";
import Header from "../components/Header";
import API from "../utils/API";

function Home() {
  function loadPosts() {
    API.getBooks()
      .then((res) => {
        console.log("books", res.data);
      })
      .catch((err) => console.log(err));
  }

  loadPosts();
  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;
