import { Button } from "../../atoms/Button";
import Input from "../../atoms/Input";

type Props = {
    handleOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
    value: string;
    btnText: string;
};

function ButtonAndInput({ btnText, handleOnChange, value }: Props) {
    return (
        <>
            <Input handleOnChange={handleOnChange} value={value} />
            <Button btnText={btnText} />
        </>
    );
}

export { ButtonAndInput };
