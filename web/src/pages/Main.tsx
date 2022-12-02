import React, { useState } from "react";
import { maskCPF } from "../utils/maskCPF";
import TitlesMain from "../components/molecules/TitlesMain/TitlesMain";
import { ButtonAndInput } from "../components/molecules/ButtonAndInput/ButtonAndInput";

function Main() {
    const [value, setValue] = useState("");

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setValue(maskCPF(value));
    }

    return (
        <>
            <div className="bg-orange-500 w-screen h-screen fixed font-mono">
                <main className="bg-zinc-800  bg-opacity-60 h-2/4  w-2/4 mx-auto mt-36 flex justify-center rounded-lg shadow-lg">
                    <div className="mt-10 text-center text-gray-200 drop-shadow-lg">
                        <div className="flex flex-col w-full h-full	items-center">
                            <TitlesMain />
                            <ButtonAndInput btnText="VAMOS LÁ!" handleOnChange={handleChangeMask} value={value} />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Main;
