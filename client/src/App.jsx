import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Books />} />
                    <Route path='/add' element={<Add />} />
                    <Route path='/update/:id' element={<Update />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
