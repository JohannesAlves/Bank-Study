import { Error404 } from "./pages/Error404";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import { Signup } from "./pages/Signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="overflow-auto bg-gradient-to-br from-orange-500 to-orange-700 w-screen h-screen fixed font-mono">
            <div className="bg-zinc-800  h-full lg:h-2/4  w-2/3 lg:w-2/4 mx-auto mt-36  rounded-lg shadow-lg">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/profile/*" element={<Profile />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
