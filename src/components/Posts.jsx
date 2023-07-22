import React from 'react';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector(state => state.posts.posts);
  
  return (
    <tbody>
      {
        posts.map(post => 
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
        )
      }
    </tbody>
  )
};

export default Posts;