type Props = {
    onChange: React.FormEvent<HTMLInputElement>;
    value: string;
};

function Input({ onChange, value }: Props) {
    return (
        <input
            name="name"
            {...onChange}
            value={value}
            placeholder="123.456.789-10"
            className="w-96 h-11 px-4 py-2 border-b-2 mt-14 bg-transparent border-gray-600 outline-none  focus:border-orange-500 text-gray-200 text-3xl text-center"
        />
    );
}

export default Input;
