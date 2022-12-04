import { useBalance } from "./useBalance";

export function ProfileIndex() {
    const data = useBalance();

    return (
        <div className="mx-auto mt-20 text-4xl text-center">
            <h3 className="text-slate-200">
                Saldo disponível: <br />
                R${data.balance}
            </h3>
        </div>
    );
}
