import React from "react";
import Card from "../Card/Card"
import "./CardList.css"

const CardList = ({games}) => {
    return (
        <div className="card__section">
            {games.map((game, index) => {
            return <Card
                    key={index}
                    id={index}
                    name={game.name}
                    year={game.released}
                    boxArt={game.background_image}/>
        })}
        </div>
        
    )
}

export default CardList