import React from "react";
import s from './CardOffer.module.css'


const CardOffer = (props) => {
    return (
        <div className={s.cards} >
            <div className={s.card}>
            <div className={s.icon}>icon</div>
            <div className={s.title}>Utility Patents</div>
            <div className={s.descriptionOffer}>Utility patents offer the broadest protection for any new or useful process, machine, manufacture, or composition of matter.</div>
            <div className={s.but1}>
                <div className={s.but}> Lear more </div>
            </div>

        </div>
        </div>
    )
}

export default CardOffer;