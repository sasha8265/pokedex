import React from "react"
import PokeCard from "./PokeCard"
import './Pokedex.css'


const Pokedex = (props) => {
    return (
        <div className='Pokedex'>
            {props.chars.map(p => (
                <PokeCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    base_experience={p.base_experience} />
            ))}
        </div>
    )
}

export default Pokedex;