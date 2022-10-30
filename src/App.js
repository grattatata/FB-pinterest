import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Post from "./pages/Post";
import GlobalStyle from "./shared/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Post />} />
          <Route element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
