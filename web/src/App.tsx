import Main from "./pages/Main";

function App() {
    return (
        <div className="bg-gradient-to-br from-orange-500 to-orange-700 w-screen h-screen fixed font-mono">
            <div className="bg-zinc-800  bg-opacity-60 h-2/4  w-2/4 mx-auto mt-36 flex justify-center rounded-lg shadow-lg">
                <Main />
            </div>
        </div>
    );
}

export default App;
