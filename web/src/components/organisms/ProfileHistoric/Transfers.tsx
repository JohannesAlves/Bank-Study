import { TwoDecimalsNumber } from "../../../utils/2DecimalsNumber";
import { useTransfers } from "./useTransfers";

export function Transfers() {
    const data = useTransfers();

    if (!data) {
        return <h1>Sem dados</h1>;
    }

    return data?.transfersUser?.map((transferUser, index) => {
        const date = new Date(transferUser.createdAt);
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth();
        const dateDay = date.getDate();
        const transferDate = `${dateDay}/${dateMonth}/${dateYear}`;

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
