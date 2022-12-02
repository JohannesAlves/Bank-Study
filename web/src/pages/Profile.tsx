import { NavIndex } from "../components/organisms/NavIndex";
import { NavOrganism } from "../components/organisms/NavOrganism";
import { NavTransferHistory } from "../components/organisms/NavTransferHistory";

function Profile() {
    return (
        <>
            <div className="flex flex-row h-full">
                <NavOrganism />
                <NavTransferHistory />
            </div>
        </>
    );
}

export default Profile;
