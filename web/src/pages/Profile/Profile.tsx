import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProfileIndex } from "../../components/organisms/ProfileIndex";
import { Nav } from "../../components/organisms/Nav";
import { ProfileHistoric } from "../../components/organisms/ProfileHistoric";
import { ProfileDeposit } from "../../components/organisms/ProfileDeposit";
import { ProfileTransfer } from "../../components/organisms/ProfileTransfer";
import { Deposits } from "../../components/organisms/ProfileHistoric/Deposits";
import { Transfers } from "../../components/organisms/ProfileHistoric/Transfers";

function Profile() {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-full font-sans">
                <Nav />
                <Routes>
                    <Route path="" element={<ProfileIndex />} />
                    <Route path="historic" element={<ProfileHistoric />} />
                    <Route path="historic/deposits" element={<Deposits />} />
                    <Route path="historic/transfers" element={<Transfers />} />
                    <Route path="deposit" element={<ProfileDeposit />} />
                    <Route path="transfer" element={<ProfileTransfer />} />
                </Routes>
            </div>
        </>
    );
}

export default Profile;
