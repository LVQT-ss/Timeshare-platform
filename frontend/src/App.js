import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Main from "./components/Main";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Main />}></Route>
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
