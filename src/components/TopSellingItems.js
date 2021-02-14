import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";

export default function TopSellingItems() {
 const { items,handleDetail } = useGlobalContext();
 return (
  <>
  <Item items={items} handleDetail={handleDetail}/>
  </>
 )
}

const Item = ({items, handleDetail}) => {
 return (
  <div className="container top">
   <h3 className="text-capitalize p-2">top selling items</h3>
   <div className="underline"></div>
   <div className="row">
     {items.map((item)=>{
      const {id,img,price,title,per} = item;
      return <article key={id} className="col-6 col-md-3 mx-auto">
       <div className='card' onClick={()=>{
         handleDetail(id)
       }}>
         <Link to='/details'>
          <img src={img} className='w-100' alt=""/>
          <h5 className='title'>{title}</h5>
          <p>{price}</p>
          <div className="per">
          <p className='text-italic'>{per}%</p>
          </div>
         </Link>
       </div>
      </article>
     })}
   </div>
  </div>
 )
}
