import React from 'react';
import CardOffer from "../../views/CardOffer/CardOffer";
import s from "../Blog/Blog.module.css";

const WhoWeAre = () => {
    return (
       <div className={s.bloks}>
           <CardOffer icon={'ICON'}
                      title={'Who We Are'}
                      descriptionOffer={'Utility patents offer the broadest protection for any new or useful process, machine, manufacture, or composition of matter.'}
           />
       </div>
    )
}

export default WhoWeAre;