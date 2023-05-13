import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "lorem1",
      desc: "loremlorem",
      img: "https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_960_720.jpg"
    },
    {
      id: 2,
      title: "lorem2",
      desc: "loremloremlorem",
      img: "https://cdn.pixabay.com/photo/2021/12/29/08/18/insect-6900940_960_720.jpg"
    },
    {
      id: 3,
      title: "lorem3",
      desc: "loremloremloremlorem",
      img: "https://cdn.pixabay.com/photo/2021/10/29/09/27/lake-6751477_960_720.jpg"
    },
    {
      id: 4,
      title: "lorem4",
      desc: "loremloremloremloremlorem",
      img: "https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_960_720.jpg"
    },
  ]

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home