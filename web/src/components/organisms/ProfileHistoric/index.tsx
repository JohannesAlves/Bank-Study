import { Link } from "react-router-dom";
import { Deposits } from "./Deposits";
import { Transfers } from "./Transfers";

export function ProfileHistoric() {
    function handleOnClick() {}

    return (
        <>
            <div className="flex justify-center mx-auto mt-32 space-x-3 2xl:space-x-6 flex-wrap">
                <Link to="deposits">
                    <button className="border-2 mt-10 hover:shadow-lg transition-all duration-300	 hover:shadow-orange-500/50 border-orange-500 rounded-2xl px-3 py-2 text-orange-500 cursor-pointer hover:bg-stone-900 hover:text-gray-200 font-bold">
                        DEPÓSITOS
                    </button>
                </Link>

                <Link to="transfers">
                    <button className="border-2 mt-10 hover:shadow-lg transition-all duration-300	 hover:shadow-orange-500/50 border-orange-500 rounded-2xl px-3 py-2 text-orange-500 cursor-pointer hover:bg-stone-900 hover:text-gray-200 font-bold">
                        TRANSFERÊNCIAS
                    </button>
                </Link>
            </div>
        </>
    );
}
