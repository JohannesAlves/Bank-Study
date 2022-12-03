import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonNav from "../../atoms/ButtonNav";
import { ProfileDeposit } from "../../organisms/ProfileDeposit";
import { useNavigate } from "react-router-dom";

export function ButtonsNav() {
    return (
        <div className="flex flex-col space-y-4 mt-10 text-lg font-light">
            <ButtonNav btnText="Início" page="profile" />
            <ButtonNav btnText="Histórico" page="profile/historic" />
            <ButtonNav btnText="Depositar" page="profile/deposit" />
            <ButtonNav btnText="Transferir" page="profile/transfer" />
        </div>
    );
}
