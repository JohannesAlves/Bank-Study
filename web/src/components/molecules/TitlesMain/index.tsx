import { Subtitle } from "../../atoms/Subtitle";
import { Title } from "../../atoms/Title";

export function TitlesMain() {
    return (
        <div className="mt-10">
            <Title title="👋 Olá, este é o meu projetinho!" />
            <Subtitle subtitle="Me informe um CPF válido ;)" />
        </div>
    );
}
