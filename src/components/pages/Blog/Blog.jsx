import React from 'react';
import s from './Blog.module.css';

const Blog = (props) => {

  const BlogItem = (props) => {
    return (
      <div>
        {props.text}
      </div>
    )
  }

  let BlogElements = props.state.blogData.map((bdata) => <BlogItem text={bdata.text} id={bdata.id}/>);

  let newPostEl = React.createRef();

  let addPost = () => {
    let text = newPostEl.current.value;
    props.addPost(text);
    newPostEl.current.value = '';
  }

  let onPostChange = () => {

  }

  return (
    <div className={s.bloks}>
      <div>
        <textarea onChange={onPostChange}
                  ref={newPostEl}
                  newPostText={props.newPostText}/>
      </div>
      <div>
        <button onClick={addPost}>button</button>
      </div>
      <div>{BlogElements}</div>

    </div>
  )
}

export default Blog;