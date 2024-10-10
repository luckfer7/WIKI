import { Input } from "./styles";

function input ({value, onChange}) {
    return (
       <Input value={value} onChange={onChange}>
       </Input>
    )
}

export default input;