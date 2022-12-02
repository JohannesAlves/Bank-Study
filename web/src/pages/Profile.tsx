import { NavIndex } from "../components/organisms/ProfileIndex";
import { Nav } from "../components/organisms/Nav";
import { ProfileTranserHistory } from "../components/organisms/ProfileTransferHistory";
import { ProfileDeposit } from "../components/organisms/ProfileDeposit";

function Profile() {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-full font-sans">
                <Nav />
                <ProfileDeposit />
            </div>
        </>
    );
}

export default Profile;
