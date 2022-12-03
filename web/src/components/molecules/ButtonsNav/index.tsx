import { useState } from "react";
import ButtonNav from "../../atoms/ButtonNav";

export function ButtonsNav() {
    const [activeTab, setActiveTab] = useState("index");

    const handleActiveTab = (type: string) => {
        setActiveTab(type);
    };

    return (
        <div className="flex flex-col space-y-4 mt-10 text-lg font-light">
            <ButtonNav btnText="Início" handleOnClick={handleActiveTab} />
            <ButtonNav btnText="Histórico" />
            <ButtonNav btnText="Depositar" />
            <ButtonNav btnText="Transferir" />
        </div>
    );
}
