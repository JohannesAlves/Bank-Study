import Main from "./pages/Main";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="bg-gradient-to-br from-orange-500 to-orange-700 w-screen h-screen fixed font-mono">
            <div className="bg-zinc-800  h-2/4  w-2/4 mx-auto mt-36  rounded-lg shadow-lg">
                <Profile />
            </div>
        </div>
    );
}

export default App;
