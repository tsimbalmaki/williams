import React from 'react';
import s from "../Blog/Blog.module.css";
import CardOffer from "../../views/CardOffer/CardOffer";

const FeeStructure = () => {
    return (
       <div><div className={s.bloks}>
           <CardOffer icon={'ICON'}
                      title={'Fee Structure'}
                      descriptionOffer={'Utility patents offer the broadest protection for any new or useful process, machine, manufacture, or composition of matter.'}
           />
       </div></div>
    )
}

export default FeeStructure;