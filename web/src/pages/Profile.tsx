import { NavIndex } from "../components/organisms/ProfileIndex";
import { Nav } from "../components/organisms/Nav";
import { ProfileHistoric } from "../components/organisms/ProfileHistoric";
import { ProfileDeposit } from "../components/organisms/ProfileDeposit";
import { ProfileTransfer } from "../components/organisms/ProfileTransfer";

function Profile() {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-full font-sans">
                <Nav />
                <ProfileTransfer />
            </div>
        </>
    );
}

export default Profile;
