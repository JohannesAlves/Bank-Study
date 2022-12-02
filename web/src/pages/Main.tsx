import woman from "../assets/woman.svg";

function Main() {
    return (
        <>
            <div className="bg-orange-500 w-screen h-screen fixed font-mono">
                <main className="bg-zinc-800 h-2/4  w-2/4 mx-auto mt-36 flex justify-center rounded-lg shadow-xl">
                    <div className="mt-10 text-center text-gray-200 drop-shadow-lg">
                        <h1 className="text-3xl">👋 Olá, futuro parceiro(a) de equipe!</h1>
                        <h2 className="text-3xl mt-5">Me informe o seu CPF</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="123.456.789-10"
                            className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"
                        />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Main;
