import React, { useState } from "react";

function ContactUs() {
  const[userData, setUserData]= useState({firstName:"", lastName:"", phone:"", email:"",address:"", message:"",});
  const postUserData = () => {}
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5 ">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br></br> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    lorem Ipsum dolor sit amet consectetur adipidicing
                    elit,Etquia quiese dolor sandeep
                  </p>
                  <figure>
                    <img
                      className="img-fluid"
                      src="./images/hero1.jpg"
                      alt="contact us "
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="First Name"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Last Name"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Phone Number"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Email id"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-12 col-md-12 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Add Address"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row contact-input-feild">
                      <div className="col-12">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter Your Mesaage"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      className="form-check-input "
                      id="exampleCheck1"
                    />
                    <label className="form-check-label main-hero-para" for="exampleCheck1">
                      I agree that the all your term and condition may contact
                    </label>
                    <button type="submit" className="btn design w-100 mt-5">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
