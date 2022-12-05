import { Button } from "../../atoms/Button";
import Input from "../../atoms/Input";
import requestMoney from "../../../assets/requestMoney.png";
import { useDeposit } from "./useDeposit";

export function ProfileDeposit() {
    return (
        <>
            <div className=" w-9/12 h-4/3 mx-auto mt-10 rounded-md overflow-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl text-orange-500 font-bold">Depósito</h2>
                        <img src={requestMoney} className="w-12" />
                    </div>

                    <div className="flex flex-col items-center">
                        <input
                            placeholder="R$100,00"
                            className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"
                        />
                        <p className="text-slate-600 mt-1">O depósito máximo é de R$2000,00 ;)</p>
                    </div>
                    <div className="mt-1 flex justify-center flex-wrap space-x-2 lg:space-x-6">
                        <Button btnText="R$100,00" />
                        <Button btnText="R$200,00" />
                        <Button btnText="R$300,00" />
                    </div>

                    <div className="flex justify-center">
                        <Button btnText="DEPOSITAR" />
                    </div>
                </div>
            </div>
        </>
    );
}
