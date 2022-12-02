import { Subtitle } from "../../atoms/Subtitle";

export function NavTransferHistory() {
    return (
        <>
            <div className="flex flex-col text-center mx-auto w-10/12 overflow-auto rounded-lg ">
                <table className="table-fixed  mx-auto">
                    <thead className="bg-orange-400">
                        <tr>
                            <th className="w-1/2 ...">Tipo</th>
                            <th className="w-1/2 ...">Data</th>
                            <th className="w-1/2 ...">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-200">
                            <td>Transferência</td>
                            <td>11/02/2001</td>
                            <td>R$112,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
