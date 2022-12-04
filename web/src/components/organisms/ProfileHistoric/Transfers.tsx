import { useTransfers } from "./useTransfers";

export function Transfers() {
    const data = useTransfers();

    if (!data) {
        return <h1>Sem dados</h1>;
    }

    return data?.transfersUser?.map((transferUser, index) => {
        return (
            <>
                <tr className="bg-gray-600 text-slate-200" key={transferUser.idTransfer}>
                    <td>Transferência</td>
                    <td>{transferUser.createdAt}</td>
                    <td>R${transferUser.amount}</td>
                </tr>
            </>
        );
    });
}
