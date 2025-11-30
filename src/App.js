import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";

import TeamPage from "./Pages/TeamPage.jsx";
import PostPage from "./Pages/PostPage.jsx";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blog" element={<Blog />} />

                <Route path="/team/:id" element={<TeamPage />} />

                <Route path="/post/:id" element={<PostPage />} />
            </Routes>
        </>
    );
}

export default App;
