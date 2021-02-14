import React from 'react';
import Carousel from './Carousel';
import TopSellingItems from './TopSellingItems';



export default function Main() {
 return (
   <main className="container">
    <div className="row">
     <div className="col-12 mx-auto">

      {/* CAROUSEL */} 
      <Carousel/> 
      {/* End Of Carousel*/}

      <subheading className="container">
        <div className="row subheading mx-auto">
          <div className="col-6 col-md-3 mx-auto">
            <img src='../img/jumia-food-new-(1).png' alt=""/>
            <h5>jumia food</h5>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src='../img/icon-red-(2).png' alt=""/>
            <h5>oficial stores</h5>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src='../img/JumiaGlobal-(1).png' alt=""/>
            <h5>jumia global</h5>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src='../img/unnamed.png' alt=""/>
            <h5>loan</h5>
          </div>
        </div>
      </subheading>
    </div>
   </div>
    <TopSellingItems/>
  </main>
 )
}
