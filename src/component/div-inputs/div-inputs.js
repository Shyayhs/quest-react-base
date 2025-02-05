import "./div-inputs.css"
import InputText from "../input-text"
import InputColor from "../input-color"

function DivInputs (props) {
    return (
        <div className="inputs-container">
            <InputText {...props}/>
            <InputColor value={props.color} onChange={props.onColorChange}/>
        </div>
    )
}

export default DivInputs; 