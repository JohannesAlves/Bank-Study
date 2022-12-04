import { Transfers } from "./Transfers";

export function ProfileHistoric() {
    return (
        <>
            <div className="flex flex-col text-center mx-auto w-full lg:w-10/12 h-full overflow-auto lg:rounded-r-lg ">
                <table className="table-fixed  mx-auto ">
                    <thead className="bg-stone-900">
                        <tr className="text-orange-500">
                            <th className="w-1/2">Tipo</th>
                            <th className="w-1/2">Data</th>
                            <th className="w-1/2 px-12">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Transfers />
                    </tbody>
                </table>
            </div>
        </>
    );
}
