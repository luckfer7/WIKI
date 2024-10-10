import { Botao } from "./styles";

function Button ({onClick}) {
    return (
        <Botao onClick={onClick} >
            buscar
        </Botao>
    )
}

export default Button;