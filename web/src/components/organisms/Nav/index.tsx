import { AvatarAndName } from "../../molecules/AvatarAndName";
import { ButtonsNav } from "../../molecules/ButtonsNav";

export function Nav() {
    return (
        <nav className="w-full lg:w-1/6  h-full bg-slate-200 lg:rounded-l-lg flex flex-col">
            <div className="text-center font-bold mt-2">
                <AvatarAndName />
            </div>

            <ButtonsNav />
        </nav>
    );
}
