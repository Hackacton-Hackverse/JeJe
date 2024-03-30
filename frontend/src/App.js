import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Todo from "./pages/Todo/Todo";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
function App() {
    return (
        <div className="h-[100vh] document-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" about element={<Todo />} />
                    <Route path="/Todo" about element={<Todo />} />
                    <Route path="/SignUp" about element={<SignUp />} />
                    <Route path="/SignIn" about element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
