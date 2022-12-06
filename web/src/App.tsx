import { Error404 } from "./pages/Error404";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import { Signup } from "./pages/Signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/organisms/ProtectedRoutes/ProtectedRoutes";

function App() {
    return (
        <div className="overflow-auto bg-gradient-to-br from-orange-500 to-orange-700 w-screen h-screen fixed font-mono">
            <div className="bg-zinc-800   h-2/4  w-2/3 lg:w-2/4 mx-auto mt-36  rounded-lg shadow-lg">
                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/profile/*" element={<ProtectedRoute children={<Profile />} />} />
                            <Route path="/signup" element={<Signup />} />

                            <Route path="error404" element={<Error404 />} />
                            <Route path="*" element={<Error404 />} />
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
