import { NavIndex } from "../components/organisms/NavIndex";
import { Nav } from "../components/organisms/Nav";
import { NavTransferHistory } from "../components/organisms/NavTransferHistory";

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
