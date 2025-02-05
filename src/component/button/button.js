import "./button.css"

function Button (props) {
    // let colorValue = parseInt(props.color.slice(1), 16);
    // let rolocValue = 0;

    // for (let i = 0; i < 6; i++) {
    //     rolocValue = (rolocValue << 4) | (colorValue & 0xF);
    //     colorValue >>= 4;
    // }

    // let roloc = '#' + rolocValue.toString(16).toUpperCase().padStart(6, '0');

    return (
        <button style={{backgroundColor: props.color, color: props.roloc, border: `1px solid ${props.roloc}`}} backgroundColor={props.color} onClick={() => alert(props.label)}> Botão </button>
    );
}

export default Button;