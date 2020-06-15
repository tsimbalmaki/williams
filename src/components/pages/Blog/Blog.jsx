import React from 'react';
import s from './Blog.module.css'
import CardOffer from "../../views/CardOffer/CardOffer";

const Blog = (props) => {
    return (
        <div className={s.bloks}>
        <CardOffer icon={'ICON'}
                   title={'Blog'}
                   descriptionOffer={'Utility patents offer the broadest protection for any new or useful process, machine, manufacture, or composition of matter.'}
                   />
                </div>
)
}

export default Blog;