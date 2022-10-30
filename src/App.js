import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Post from "./pages/Post";
import Upload from "./pages/Upload";
import GlobalStyle from "./shared/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="/post" element={<Post />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
