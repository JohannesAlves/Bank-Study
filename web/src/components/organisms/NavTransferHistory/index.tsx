import { Subtitle } from "../../atoms/Subtitle";

export function NavTransferHistory() {
    return (
        <>
            <div className="w-9/12 h-4/5 bg-gray-700 mx-auto mt-10 rounded-lg flex justify-center">
                <div className="flex flex-col text-center">
                    <div>
                        <h2 className="text-3xl text-slate-200 font-semibold mt-10">HISTÓRICO</h2>
                    </div>

                    <div className="overflow-x-auto relative mt-10">
                        <table className="w-full text-sm  text-left text-orange-500 dark:text-orange-400">
                            <thead className="text-xs  text-orange-700 uppercase  bg-gray-500 dark:text-slate-200">
                                <tr>
                                    <th scope="col" className="py-3 px-3">
                                        TIPO
                                    </th>

                                    <th scope="col" className="py-3 px-6">
                                        DATA
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        VALOR
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Transferência
                                    </th>
                                    <td className="py-4 px-6">02/12/2022</td>
                                    <td className="py-4 px-9">R$2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
