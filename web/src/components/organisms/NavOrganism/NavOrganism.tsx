import AvatarAndName from "../../molecules/AvatarAndName/AvatarAndName";
import ButtonsNav from "../../molecules/ButtonsNav/ButtonsNav";

function NavOrganism() {
    return (
        <nav className="w-1/6 h-full bg-slate-200 rounded-lg flex flex-col  font-sans">
            <div className="text-center font-bold mt-2">
                <AvatarAndName />
            </div>

            <ButtonsNav />
        </nav>
    );
}

export default NavOrganism;
