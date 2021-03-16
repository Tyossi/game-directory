import React from "react";
import "./Card.css";


const Card = ({ name, year, boxArt }) => {
    return (
        <>
            <div className="card__container">
                <div className="image__box grow">
                    <img className="box-art" src={boxArt} alt="Box Art" />
                </div>

                <div className="title-box">
                    <p className="title__text">{name}</p>
                    <p className="year__text">{year}</p>
                </div>
            </div>

        </>
    )
}

export default Card;