import { Button } from "../../atoms/Button";
import Input from "../../atoms/Input";

export function ProfileDeposit() {
    return (
        <>
            <div className=" w-9/12 h-4/5 mx-auto mt-10 rounded-md">
                <div className="flex flex-col justify-center items-center mt-8">
                    <div>
                        <h2 className="text-3xl text-slate-300 font-bold"></h2>
                    </div>

                    <div>
                        <Input />
                    </div>
                    <Button btnText="DEPOSITAR" />
                </div>
            </div>
        </>
    );
}
