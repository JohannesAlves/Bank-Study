import { Button } from "../../atoms/Button";
import Input from "../../atoms/Input";

export function ProfileDeposit() {
    return (
        <>
            <div className=" w-9/12 h-4/5 mx-auto mt-10 rounded-md overflow-auto">
                <div className="flex flex-col justify-center items-center mt-8">
                    <div>
                        <h2 className="text-3xl text-orange-500 font-bold">Depósito</h2>
                    </div>

                    <div>
                        <Input placeholder="R$100,00" />
                    </div>
                    <div className="mt-5 flex justify-center flex-wrap space-x-2 lg:space-x-6">
                        <Button btnText="R$100" />
                        <Button btnText="R$200" />
                        <Button btnText="R$300" />
                    </div>

                    <div className="flex justify-center">
                        <Button btnText="DEPOSITAR" />
                    </div>
                </div>
            </div>
        </>
    );
}
