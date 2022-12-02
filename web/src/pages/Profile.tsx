import { NavIndex } from "../components/organisms/ProfileIndex";
import { Nav } from "../components/organisms/Nav";
import { NavTransferHistory } from "../components/organisms/ProfileTransferHistory";

function Profile() {
    return (
        <>
            <div className="flex flex-row h-full">
                <Nav />
                <NavTransferHistory />
            </div>
        </>
    );
}

export default Profile;
