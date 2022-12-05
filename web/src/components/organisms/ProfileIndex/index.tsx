import { TwoDecimalsNumber } from "../../../utils/2DecimalsNumber";
import { useBalance } from "./useBalance";

export function ProfileIndex() {
    const data = useBalance();
    const balanceToNumber = Number(data.balance);

    return (
        <div className="mx-auto mt-20 text-4xl text-center">
            <h3 className="text-slate-200">
                Saldo disponível: <br />
                R${TwoDecimalsNumber(balanceToNumber)}
            </h3>
        </div>
    );
}
