import { TwoDecimalsNumber } from "../../../utils/2DecimalsNumber";
import { useHistoric } from "./useHistoric";

export function Transfers() {
    const data = useHistoric();

    if (!data) {
        return <h1>Sem dados</h1>;
    }

    return data?.transfersUser?.map((transferUser, index) => {
        const date = new Date(transferUser.createdAt);
        const transferDate = new Intl.DateTimeFormat("pt-BR").format(date);

        const amountToNumber = Number(transferUser.amount);

        return (
            <>
                <tr className="bg-gray-600 text-slate-200" key={transferUser.idTransfer}>
                    <td>Transferência</td>
                    <td>{transferDate}</td>
                    <td>R${TwoDecimalsNumber(amountToNumber)}</td>
                </tr>
            </>
        );
    });
}
