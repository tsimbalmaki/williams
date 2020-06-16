import {rerenderEntireTree} from "../render";

let state = {
  blogPage: {
    blogData: [
      {id: 1, text: 'первый'},
      {id: 2, text: 'второй'},
      {id: 3, text: 'третий'},
    ],
    newPostText: 'Tsimbal'
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    text: postMessage
  };
  state.blogPage.blogData.push(newPost);
  rerenderEntireTree(state);
}

export default state;