type TButtonNavProps = {
    btnText: string;
    handleOnClick?: (...props: any) => void;
};

function ButtonNav({ btnText, handleOnClick }: TButtonNavProps) {
    return (
        <button className="hover:bg-orange-500 rounded" onClick={handleOnClick}>
            {btnText}
        </button>
    );
}

export default ButtonNav;
