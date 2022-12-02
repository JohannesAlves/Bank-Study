type Props = {
    btnText: string;
};

function Button({ btnText }: Props) {
    return (
        <>
            <a className="border-2 mt-10  border-orange-500 rounded-2xl px-3 py-2 text-orange-500 cursor-pointer hover:bg-stone-900 hover:text-gray-200 font-bold">
                {btnText}
            </a>
        </>
    );
}

export { Button };
