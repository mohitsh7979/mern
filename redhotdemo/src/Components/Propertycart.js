import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Propertycart() {
  return (
   
      <section className="section-property section-t8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Latest Properties</h2>
                </div>
                <div className="title-link">
                  <a href="property-grid.html">
                    All Property
                    <span className="ion-ios-arrow-forward"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="property-carousel" className="owl-carousel owl-theme">
            <div className="carousel-item-b">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img
                    src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
                    alt=""
                    className="img-a img-fluid"
                  />
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <h2>My Property</h2>
        
                        <a href="property-single.html">
                          206 Mount
                          <br /> Olive Road Two
                        </a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="#" className="link-a">
                        Click here to view
                        <span className="ion-ios-arrow-forward"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>
                            340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item-b">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img
                    src="img/property-3.jpg"
                    alt=""
                    className="img-a img-fluid"
                  />
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <a href="property-single.html">
                          157 West
                          <br /> Central Park
                        </a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="property-single.html" className="link-a">
                        Click here to view
                        <span className="ion-ios-arrow-forward"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>
                            340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item-b">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img
                    src="img/property-7.jpg"
                    alt=""
                    className="img-a img-fluid"
                  />
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <a href="property-single.html">
                          245 Azabu
                          <br /> Nishi Park let
                        </a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="property-single.html" className="link-a">
                        Click here to view
                        <span className="ion-ios-arrow-forward"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>
                            340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item-b">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img
                    src="img/property-10.jpg"
                    alt=""
                    className="img-a img-fluid"
                  />
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        <a href="property-single.html">
                          204 Montal
                          <br /> South Bela Two
                        </a>
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">rent | $ 12.000</span>
                      </div>
                      <a href="property-single.html" className="link-a">
                        Click here to view
                        <span className="ion-ios-arrow-forward"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        <li>
                          <h4 className="card-info-title">Area</h4>
                          <span>
                            340m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Beds</h4>
                          <span>2</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Baths</h4>
                          <span>4</span>
                        </li>
                        <li>
                          <h4 className="card-info-title">Garages</h4>
                          <span>1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  );
}
