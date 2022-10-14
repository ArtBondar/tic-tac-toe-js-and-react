import React from 'react';

function GetElementToUI(element) {
    switch (element) {
        case 1:
            return "https://cdn-icons-png.flaticon.com/512/17/17047.png";
        case 0:
            return "https://cdn-icons-png.flaticon.com/512/3522/3522558.png";
        default:
            return "https://www.pngplay.com/wp-content/uploads/10/Eggfruit-Transparent-Background.png";
    }
}

function Symbol(props) {
    let value = Number(props.element);
    return (
        <button onClick={props.onClick}
            style={{ display: "inline-block" }}
            disabled={props.disabled}>
            <img src={GetElementToUI(value)} width="100" />
        </button>
    );
}

export default Symbol;