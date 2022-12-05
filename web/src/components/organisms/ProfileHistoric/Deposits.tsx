import { TwoDecimalsNumber } from "../../../utils/2DecimalsNumber";
import TableHistoric from "../TableHistoric/TableHistoric";
import { useHistoric } from "./useHistoric";

export function Deposits() {
    const data = useHistoric();

    function DepositsData() {
        return (
            <>
                {data?.depositsUser?.map((depositUser, index) => {
                    const date = new Date(depositUser.createdAt);
                    const transferDate = new Intl.DateTimeFormat("pt-BR").format(date);
                    const amountToNumber = Number(depositUser.amount);
                    return (
                        <>
                            <tr className="bg-gray-600 text-slate-200" key={depositUser.idDeposit}>
                                <td>Depósitos</td>
                                <td>{transferDate}</td>
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
            <TableHistoric view={<DepositsData />} />
        </>
    );
}
