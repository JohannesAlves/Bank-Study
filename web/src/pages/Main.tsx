import MainOrganism from "../components/organisms/MainOrganism/MainOrganism";

function Main() {
    return (
        <>
            <div className="bg-orange-500 w-screen h-screen fixed font-mono">
                <main className="bg-zinc-800  bg-opacity-60 h-2/4  w-2/4 mx-auto mt-36 flex justify-center rounded-lg shadow-lg">
                    <div className="mt-10 text-center text-gray-200 drop-shadow-lg">
                        <MainOrganism />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Main;
