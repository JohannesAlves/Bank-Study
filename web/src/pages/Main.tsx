import { maskCPF } from "../utils/maskCPF";
import { useState } from "react";
import { TitlesMain } from "../components/molecules/TitlesMain";
import { ButtonAndInput } from "../components/molecules/ButtonAndInput";

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
                    <ButtonAndInput btnText="VAMOS LÁ!" handleOnChange={handleChangeMask} value={value} />
                </div>
            </div>
        </>
    );
}

export default Main;
