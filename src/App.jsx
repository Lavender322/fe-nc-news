import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Profile from "./components/Profile";
import SingleArticle from "./components/SingleArticle";
import { AuthProvider } from "./contexts/Auth";

function App() {
  return (
    <AuthProvider>
      <div className="outer-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
