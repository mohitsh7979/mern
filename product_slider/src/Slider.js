import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slider.css';
import image from './Image/abc.jpg'


export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return ( 
  
  <div>

<Carousel responsive={responsive}>
  <div>
  <img src="{image}" alt="" class="my-img" />
    <div id="container">
      <div class="product-image">
        <img src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=" alt="" />

        <div class="info">
          <h2>Description</h2>
          <ul>
            <li><strong>Market Price: </strong>5000000</li>
            <li><strong>Red Hot Price: </strong>500</li>
            <li><strong>Discount %: </strong>90%</li>
            <li><strong>Upside Potential: </strong></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box">Upside Potential</div>
  </div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;

  </div>)
  ;
}
