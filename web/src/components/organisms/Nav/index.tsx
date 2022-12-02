import { AvatarAndName } from "../../molecules/AvatarAndName";
import { ButtonsNav } from "../../molecules/ButtonsNav";

export function Nav() {
    return (
        <nav className="w-1/6 h-full bg-slate-200 rounded-lg flex flex-col  font-sans">
            <div className="text-center font-bold mt-2">
                <AvatarAndName />
            </div>

            <ButtonsNav />
        </nav>
    );
}
