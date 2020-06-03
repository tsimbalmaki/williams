import React from 'react';
import s from './Blog.module.css'
import CardOffer from "../../views/CardOffer/CardOffer";

const Blog = () => {
    return (
        <div className={s.bloks}>
        <CardOffer title={1}
                   descriptionOffer={1}
                   icon={1}/>
                </div>
)
}

export default Blog;