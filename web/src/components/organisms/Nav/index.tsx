import { ButtonsNav } from "../../molecules/ButtonsNav";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import AvatarImg from "../../atoms/AvatarImg";

export function Nav() {
    const { user } = useContext(AuthContext);

    return (
        <nav className="w-full lg:w-1/6  h-full bg-slate-200 lg:rounded-l-lg flex flex-col">
            <div className="text-center font-bold mt-2">
                <AvatarImg />
                <h4>{user.fullname}</h4>
            </div>

            <ButtonsNav />
        </nav>
    );
}
