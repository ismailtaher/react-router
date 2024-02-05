import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Home></Home>
      <NewPost></NewPost>
      <PostPage></PostPage>
      <About></About>
      <Missing></Missing>
      <Footer></Footer>
    </div>
  );
}

export default App;
