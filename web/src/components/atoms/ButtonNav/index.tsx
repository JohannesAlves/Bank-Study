import { useNavigate } from "react-router-dom";

type TButtonNavProps = {
    btnText: string;
    page: string;
};

function ButtonNav({ btnText, page }: TButtonNavProps) {
    const navigate = useNavigate();

    return (
        <button className="hover:bg-orange-500 rounded" onClick={() => navigate(`/${page}`)}>
            {btnText}
        </button>
    );
}

export default ButtonNav;
