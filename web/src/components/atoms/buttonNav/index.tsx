type TButtonNavProps = {
    btnText: string;
};

function ButtonNav({ btnText }: TButtonNavProps) {
    return <button className="hover:bg-orange-500 rounded">{btnText}</button>;
}

export default ButtonNav;
