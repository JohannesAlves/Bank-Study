import { useState } from "react";
import { maskCPF } from "../../../utils/maskCPF";
import { ButtonAndInput } from "../../molecules/ButtonAndInput/ButtonAndInput";
import TitlesMain from "../../molecules/TitlesMain/TitlesMain";

function MainOrganism() {
    const [value, setValue] = useState("");

    function handleChangeMask(event: React.FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;

        setValue(maskCPF(value));
    }

    return (
        <div className="flex flex-col w-full h-full	items-center">
            <TitlesMain />
            <ButtonAndInput btnText="VAMOS LÁ!" handleOnChange={handleChangeMask} value={value} />
        </div>
    );
}

export default MainOrganism;
