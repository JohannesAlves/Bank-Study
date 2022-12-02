type Props = {
    subtitle: string;
    [props: string]: any;
};

function Subtitle({ subtitle, ...props }: Props) {
    return <h2 className={`text-3xl mt-5 ${props}`}>{subtitle}</h2>;
}

export { Subtitle };
