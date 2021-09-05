import React from 'react';
import image1 from '../img/car_1.jpg';
import image2 from '../img/car2.png';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import '../Home/Home.css'

export default function AddVehicle() {


    return (
        <div>

            {/* <div style="background-image:{image1};"> */}
            <div className="hero" style={{ backgroundImage: `url(${image1})` }}>

                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-10">

                            <div class="row mb-5">
                                <div class="col-lg-7 intro">
                                    <h1><strong>Rent a car</strong> is within your finger tips.</h1>
                                </div>
                            </div>

                            <form class="trip-form">

                                <div class="row align-items-center">

                                    <div class="mb-3 mb-md-0 col-md-3">
                                        <select name="" id="" class="custom-select form-control">
                                            <option value="">Select Type</option>
                                            <option value="">Ferrari</option>
                                            <option value="">Toyota</option>
                                            <option value="">Ford</option>
                                            <option value="">Lamborghini</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 mb-md-0 col-md-3">
                                        <div class="form-control-wrap">
                                            <input type="text" id="cf-3" placeholder="Pick up" class="form-control datepicker px-3" />
                                            <span class="icon icon-date_range"></span>

                                        </div>
                                    </div>
                                    <div class="mb-3 mb-md-0 col-md-3">
                                        <div class="form-control-wrap">
                                            <input type="text" id="cf-4" placeholder="Drop off" class="form-control datepicker px-3" />
                                            <span class="icon icon-date_range"></span>
                                        </div>
                                    </div>
                                    <div class="mb-3 mb-md-0 col-md-3">
                                        <input type="submit" value="Search Now" class="btn btn-primary btn-block py-3" />
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <br></br>
                <br></br>
                <br></br>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 text-center order-lg-2">
              <div class="img-wrap-1 mb-5">
                <img src={image2} alt="Image" class="img-fluid"/>
              </div>
            </div>
            <div class="col-lg-4 ml-auto order-lg-1">
              <h3 class="mb-4 section-heading"><strong>You can easily avail our promo for renting a car.</strong></h3>
              <p class="mb-5">tahiketahiketahiketahiketahiketahiketahike tahiketahiketahi
              ketahiketahike tahiketahiketahiketahiketahiketah
              iketahiketahiketahiketahiketahike tahiketahiketahiketahiketahiketahiketahike</p>
              
              <p><a href="#" class="btn btn-primary">Meet them now</a></p>
            </div>
          </div>
        </div>
      </div>

       
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <h2 class="footer-heading mb-4">About Us</h2>
              <p>tahike tahike tahike thaike tthaike athikeeeeeeee dela</p>
              <ul class="list-unstyled social">
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-linkedin"></span></a></li>
              </ul>
            </div>
            <div class="col-lg-8 ml-auto">
              <div class="row">
                <div class="col-lg-3">
                  <h2 class="footer-heading mb-4">Quick Links</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-lg-3">
                  <h2 class="footer-heading mb-4">Resources</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-lg-3">
                  <h2 class="footer-heading mb-4">Support</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-lg-3">
                  <h2 class="footer-heading mb-4">Company</h2>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
              <div class="border-top pt-5">
               
              </div>
            </div>

          </div>
        </div>
      </footer>



        </div>


    );
}

