import React from 'react';
import CardOffer from "../../views/CardOffer/CardOffer";
import s from "../Blog/Blog.module.css";

const WhatWeDo = () => {
    return (
       <div className={s.bloks}>
           <CardOffer icon={'ICON'}
                      title={'What We Do'}
                      descriptionOffer={'Utility patents offer the broadest protection for any new or useful process, machine, manufacture, or composition of matter.'}
           />
       </div>
    )
}

export default WhatWeDo;