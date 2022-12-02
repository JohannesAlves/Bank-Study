import ButtonNav from "../../atoms/ButtonNav";

export function ButtonsNav() {
    return (
        <div className="flex flex-col space-y-4 mt-10 text-lg font-light">
            <ButtonNav btnText="Início" />
            <ButtonNav btnText="Histórico" />
            <ButtonNav btnText="Depositar" />
            <ButtonNav btnText="Transferir" />
        </div>
    );
}
