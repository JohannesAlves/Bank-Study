import { maskCPF } from "../../utils/maskCPF";
import { useState } from "react";
import { TitlesMain } from "../../components/molecules/TitlesMain";
import { Button } from "../../components/atoms/Button";

function Main() {
    const [value, setValue] = useState("");

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setValue(maskCPF(value));
    }

    return (
        <>
            <div className="mt-10 text-center text-gray-200 drop-shadow-lg">
                <div className="flex flex-col w-full h-full	items-center">
                    <TitlesMain />

                    <input className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"></input>
                    <Button btnText="VAMOS LÁ!" />
                </div>
            </div>
        </>
    );
}

export default Main;
