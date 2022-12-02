type Props = {
    title: string;
};

function Title({ title }: Props) {
    return <h1 className="text-3xl">{title}</h1>;
}

export { Title };
