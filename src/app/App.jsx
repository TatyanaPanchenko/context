import "./App.css";
import Home from "../Pages/Home/Home";
import ListPosts from "../Pages/ListPosts/ListPosts";
import AddTask from "../Pages/AddTask/AddTask";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListPosts />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
