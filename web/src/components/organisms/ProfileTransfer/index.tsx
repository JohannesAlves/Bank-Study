import { Button } from "../../atoms/Button";
import moneyTransfer from "../../../assets/moneyTransfer.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { api } from "../../../api/api";
import { TwoDecimalsNumber } from "../../../utils/2DecimalsNumber";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface FormValues {
    amount: string;
    toAccountId: string;
}

export function ProfileTransfer() {
    const { register, handleSubmit, setValue } = useForm<FormValues>();
    const { user } = useContext(AuthContext);
    const [amount, setAmount] = useState("R$0.00");

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const amountToNumber = Number(data.amount);
        const amountToDecimal = Number(TwoDecimalsNumber(amountToNumber));
        const toAccountId = data.toAccountId;

        if (amountToDecimal > 2000) {
            return toast.error("Ei, esqueceu do nosso combinado? O valor máximo é de R$2000,00 ;)", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        try {
            if (user.fullname) {
                const response = await api.post("/transfer", { amount: amountToDecimal, toAccountId });
                if (response) {
                    return toast.success("Transferência realizada com sucesso. 🥳🥳", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } else {
                return;
            }
        } catch {
            return toast.error("Algo de errado aconteceu, na transferência me perdoe! 😢 ", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <>
            <div className=" w-9/12 h-4/3 mx-auto mt-10 rounded-md overflow-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl text-orange-500 font-bold">Transferir</h2>
                        <img src={moneyTransfer} className="w-12" />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row space-x-10 flex-wrap justify-center">
                                <input
                                    autoComplete="off"
                                    {...(register("amount"),
                                    {
                                        onChange: (event) => {
                                            const { value } = event.currentTarget;
                                            const removedCurrencyMask = value.slice(2);
                                            const valueToDecimal = Number(removedCurrencyMask).toFixed(2);
                                            setValue("amount", `${valueToDecimal}`);
                                            setAmount(`R$${valueToDecimal}`);
                                        },
                                        value: amount,
                                    })}
                                    placeholder="Qual será o valor?"
                                    className="w-64 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-2xl text-center"
                                />

                                <input
                                    autoComplete="off"
                                    {...register("toAccountId")}
                                    placeholder="Para qual conta?"
                                    className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-2xl text-center"
                                />
                            </div>
                            <p className="text-slate-600 mt-1 text-center">
                                Ei, você pode transferir para você mesmo para testar o app! <br />
                                Mas lembrando, o máximo é R$2000,00 😉
                            </p>
                        </div>
                        <div className="mt-1 flex justify-center flex-wrap space-x-2 lg:space-x-6">
                            <button
                                onClick={() => {
                                    const value = 100;
                                    setValue("amount", `${value}`);
                                    setAmount(`R$100.00`);
                                }}
                                type="button"
                                className="border-2 mt-10 hover:shadow-lg transition-all duration-300	 hover:shadow-orange-500/50 border-orange-500 rounded-2xl px-3 py-2 text-orange-500 cursor-pointer hover:bg-stone-900 hover:text-gray-200 font-bold"
                            >
                                R$100,00
                            </button>
                            <button
                                onClick={(event) => {
                                    const value = 200;
                                    setValue("amount", `${value}`);
                                    setAmount(`R$200.00`);
                                }}
                                type="button"
                                className="border-2 mt-10 hover:shadow-lg transition-all duration-300	 hover:shadow-orange-500/50 border-orange-500 rounded-2xl px-3 py-2 text-orange-500 cursor-pointer hover:bg-stone-900 hover:text-gray-200 font-bold"
                            >
                                R$200,00
                            </button>
                            <button
                                onClick={(event) => {
                                    const value = 300;
                                    setValue("amount", `${value}`);
                                    setAmount(`R$300.00`);
                                }}
                                type="button"
                                className="border-2 mt-10 hover:shadow-lg transition-all duration-300	 hover:shadow-orange-500/50 border-orange-500 rounded-2xl px-3 py-2 text-orange-500 cursor-pointer hover:bg-stone-900 hover:text-gray-200 font-bold"
                            >
                                R$300,00
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <Button btnText="TRANSFERIR" />
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}
