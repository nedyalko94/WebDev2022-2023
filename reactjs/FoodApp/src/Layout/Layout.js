import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout({
  Categories,
  children,
  searchResultHandler,
  setInputValue,
  CategoriesFilter,
  inputValue
}) {
  return (
    <BrowserRouter>
      <Header
        searchResultHandler={searchResultHandler}
        setInputValue={setInputValue}
        Categories={Categories}
        CategoriesFilter={CategoriesFilter}
        inputValue={inputValue}
      />
      {children}
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
