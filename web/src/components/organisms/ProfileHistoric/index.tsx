import { Link } from "react-router-dom";
import { Deposits } from "./Deposits";
import { Transfers } from "./Transfers";

export function ProfileHistoric() {
    function handleOnClick() {}

    return (
        <>
            <div className="flex justify-center mx-auto mt-32 space-x-3 2xl:space-x-6 flex-wrap">
                <Link to="deposits">
                    <button className="btn-variant-one mt-10">DEPÓSITOS</button>
                </Link>

                <Link to="transfers">
                    <button className="btn-variant-one mt-10 w-40">TRANSFERÊNCIAS</button>
                </Link>
            </div>
        </>
    );
}
