import { TwoDecimalsNumber } from "../../../utils/2DecimalsNumber";
import TableHistoric from "../TableHistoric/TableHistoric";
import { useHistoric } from "./useHistoric";

export function Transfers() {
    const data = useHistoric();

    if (!data) {
        return <h1>Sem dados</h1>;
    }

    function TransfersData() {
        return (
            <>
                {data?.transfersUser?.map((transferUser, index) => {
                    const date = new Date(transferUser.createdAt);
                    const depositDate = new Intl.DateTimeFormat("pt-BR").format(date);
                    const amountToNumber = Number(transferUser.amount);
                    return (
                        <>
                            <tr className="bg-gray-600 text-slate-200" key={transferUser.idTransfer}>
                                <td>Depósitos</td>
                                <td>{depositDate}</td>
                                <td>R${TwoDecimalsNumber(amountToNumber)}</td>
                            </tr>
                        </>
                    );
                })}
            </>
        );
    }

    return (
        <>
            <TableHistoric view={<TransfersData />} />
        </>
    );
}
