import React from "react";
import s from './CardOffer.module.css'

const CardOffer = (props) => {
    return (
        <div className={s.cards} >
            <div className={s.card}>
            <div className={s.icon}>{props.icon}</div>
            <div className={s.title}>{props.title}</div>
            <div className={s.descriptionOffer}>{props.descriptionOffer}</div>
            <div className={s.but1}>
                <div className={s.but}> Lear more </div>
            </div>

        </div>
        </div>
    )
}

export default CardOffer;