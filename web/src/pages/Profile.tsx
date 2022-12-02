import { Subtitle } from "../components/atoms/subtitle";
import { Title } from "../components/atoms/title";
import AvatarAndName from "../components/molecules/AvatarAndName/AvatarAndName";
import ButtonsNav from "../components/molecules/ButtonsNav/ButtonsNav";
import NavOrganism from "../components/organisms/NavOrganism/NavOrganism";

function Profile() {
    return (
        <>
            <div className="flex flex-row h-full">
                <NavOrganism />

                <div className="mx-auto mt-20 text-4xl text-center">
                    <h3 className="text-slate-200">
                        Saldo disponível: <br />
                        R$200,00
                    </h3>

                    <h3></h3>
                </div>
            </div>
        </>
    );
}

export default Profile;
