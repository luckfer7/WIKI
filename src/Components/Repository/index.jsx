import { RepoContainer } from "./styles"

function ItemContainer ({repo}) {
    return (
        <RepoContainer>
            <h3>{repo.name}</h3>
            <h5>{repo.full_name}</h5>
            <button>Remover</button>
            <hr />
        </RepoContainer>
    )
}

export default ItemContainer;