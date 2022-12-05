import { Link } from "react-router-dom";

export function Error404() {
    return (
        <div className="h-full w-full">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl text-slate-300 mt-32">Nada por aqui... ;(</h1>

                <div>
                    <Link to="/">
                        <button className="border-2 mt-10 hover:shadow-lg transition-all duration-300	 hover:shadow-orange-500/50 border-orange-500 rounded-2xl px-3 py-2 text-orange-500 cursor-pointer hover:bg-stone-900 hover:text-gray-200 font-bold">
                            PÁGINA INICIAL
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
