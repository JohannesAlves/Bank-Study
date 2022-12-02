type Props = {
    subtitle: string;
};

function Subtitle({ subtitle }: Props) {
    return <h2 className="text-3xl mt-5">{subtitle}</h2>;
}

export { Subtitle };
