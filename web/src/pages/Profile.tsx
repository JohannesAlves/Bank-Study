import { NavIndex } from "../components/organisms/ProfileIndex";
import { Nav } from "../components/organisms/Nav";
import { ProfileHistoric } from "../components/organisms/ProfileHistoric";
import { ProfileDeposit } from "../components/organisms/ProfileDeposit";

function Profile() {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-full font-sans">
                <Nav />
                <ProfileHistoric />
            </div>
        </>
    );
}

export default Profile;
