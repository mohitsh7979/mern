import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../Slider.css'

export default function Property() {
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
    <div className="property container-fluid">
      <div className="redhot container">
        <div className="heading">
         <h1>Red Hot Ready</h1> 
          </div>
        <Carousel responsive={responsive}>
          <div>
            {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/photo-1533395427226-788cee25cc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpJTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/photo-1546412414-c2658fffe7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGR1YmFpJTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/flagged/photo-1554992369-085dc418ee00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
        </Carousel>
      </div>
      <div className="redhot container">
        <div className="heading">
         <h1>Red Hot Off Plan</h1> 
          </div>
        <Carousel responsive={responsive}>
          <div>
            {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/photo-1533395427226-788cee25cc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpJTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/photo-1546412414-c2658fffe7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGR1YmFpJTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/flagged/photo-1554992369-085dc418ee00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
        </Carousel>
      </div>
      <div className="redhot container">
        <div className="heading">
         <h1>Red Hot Closed Deals</h1> 
          </div>
        <Carousel responsive={responsive}>
          <div>
            {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/photo-1533395427226-788cee25cc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpJTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/photo-1546412414-c2658fffe7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGR1YmFpJTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://images.unsplash.com/flagged/photo-1554992369-085dc418ee00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>

          <div>
          {/* <img src="{image}" alt="" class="my-img" /> */}
            <div id="container">
              <div class="product-image">
                <img
                  src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                  alt=""
                />

                <div class="info">
                  <h2>Description</h2>
                  <ul>
                    <li>
                      <strong>Market Price: </strong>5000000
                    </li>
                    <li>
                      <strong>Red Hot Price: </strong>500
                    </li>
                    <li>
                      <strong>Discount %: </strong>90%
                    </li>
                    <li>
                      <strong>Upside Potential: </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box">Upside Potential</div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
