import React, { useState } from "react";

const Card = ({ item }) => {
    const [active, setActive] = useState(false);
    return (
        <div className="card">
            <div
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="card__wrapper"
                style={
                    !active
                        ? {
                              backgroundImage: "url(./images/cover_bg.svg",
                          }
                        : {
                              backgroundImage: "url(./images/hover_bg.svg",
                          }
                }
            >
                <div className="card__info">
                    <div className="card__top">
                        <h3 className="card__title">{item.title}</h3>
                        <span className="card__description">
                            {item.description}
                        </span>
                    </div>

                    <div className="card__bottom">
                        <span className="card__num">{item.info}</span>
                        <span className="card__label">{item.type}</span>
                    </div>
                </div>

                <div className="card__image">
                    <img
                        className="card__image_right"
                        src={item.img}
                        alt={item.title}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
