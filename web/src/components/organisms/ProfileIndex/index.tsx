import { TwoDecimalsNumber } from "../../../utils/2DecimalsNumber";
import { useBalance } from "./useBalance";

export function ProfileIndex() {
    const data = useBalance();
    const balanceToNumber = Number(data.balance);
    const balanceToDecimal = Number(TwoDecimalsNumber(balanceToNumber));

    const decimalToCurrencyMoney = balanceToDecimal.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    return (
        <div className="mx-auto mt-20 text-4xl text-center">
            <h3 className="text-slate-200">
                Saldo disponível: <br />
                {decimalToCurrencyMoney}
            </h3>
        </div>
    );
}
