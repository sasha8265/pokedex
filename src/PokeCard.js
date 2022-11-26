import React from "react"
import './PokeCard.css'


const PokeCard = (props) => {
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

    return (
        <div className="PokeCard">
            <h3 className="PokeCard-title">{props.name}</h3>
            <img className="PokeCard-img" alt="" src={imgSrc}></img>
            <p className="PokeCard-info"><b>Type:</b> {props.type}</p>
            <p className="PokeCard-info"><b>EXP:</b> {props.base_experience}</p>
        </div>
    )
}

export default PokeCard;