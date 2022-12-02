import { NavIndex } from "../components/organisms/NavIndex";
import { NavOrganism } from "../components/organisms/NavOrganism";

function Profile() {
    return (
        <>
            <div className="flex flex-row h-full">
                <NavOrganism />
                <NavIndex />
            </div>
        </>
    );
}

export default Profile;
