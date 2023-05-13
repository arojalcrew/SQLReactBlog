import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_960_720.jpg" alt="" />
        <div className="user">
        <img src="https://cdn.pixabay.com/photo/2021/12/29/08/18/insect-6900940_960_720.jpg" alt="" />  
        <div className="info">
          <span>Arkadiusz</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to ={`/write?edit=2`}> 
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odio totam quia voluptas reiciendis, aliquam laborum illum aut velit dolorem libero quo accusamus sequi similique dolores odit vero possimus cumque unde, at corrupti cum est. Harum doloremque maxime vel odit reiciendis quis cupiditate, quibusdam perspiciatis praesentium laboriosam nobis quidem. Numquam neque est fugit inventore exercitationem laboriosam quos ea tempore esse corrupti vero quam aperiam, modi, minima voluptatem architecto cupiditate, ut nobis officiis. Voluptatibus corporis possimus, aut dolore dolor adipisci incidunt explicabo omnis voluptates pariatur facere dolores nam quia quisquam saepe enim amet ipsum odio porro molestiae iure! Eveniet, animi nulla?</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single