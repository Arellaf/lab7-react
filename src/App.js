import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";

import DevelopmentTeam from "./Pages/DevelopmentTeam";
import ResearchGroup from "./Pages/ResearchGroup";
import MarketingTeam from "./Pages/MarketingTeam.jsx";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blog" element={<Blog />} />

                <Route path="/team/development" element={<DevelopmentTeam />} />
                <Route path="/team/research" element={<ResearchGroup />} />
                <Route path="/team/marketing" element={<MarketingTeam />} />
            </Routes>

        </>
    );
}

export default App;
