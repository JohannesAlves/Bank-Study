import { Subtitle } from "../components/atoms/subtitle";
import { Title } from "../components/atoms/title";

function Profile() {
    return (
        <>
            <div className="flex flex-row h-full">
                <nav className="w-1/6 h-full bg-slate-200 rounded-lg flex flex-col  font-sans">
                    {/* avatar img */}
                    <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 mt-3 mx-auto">
                        <svg
                            className="absolute -left-1 w-13 h-12 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>

                    <div className="text-center font-bold mt-2">
                        <h4>Johannes Oliveira Alves</h4>
                    </div>

                    <div className="flex flex-col space-y-4 mt-10 text-lg font-light">
                        <button className="hover:bg-orange-500 rounded">Início</button>
                        <button className="hover:bg-orange-500 rounded">Histórico</button>
                        <button className="hover:bg-orange-500 rounded">Depositar</button>
                        <button className="hover:bg-orange-500 rounded">Transferir</button>
                    </div>
                </nav>

                <div className="mx-auto mt-20 text-4xl text-center">
                    <h3 className="text-slate-200">
                        Saldo disponível: <br />
                        R$200,00
                    </h3>

                    <h3></h3>
                </div>
            </div>
        </>
    );
}

export default Profile;
