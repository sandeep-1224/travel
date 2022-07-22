import React,{useState} from 'react'
import AboutApi from "./AboutApi";

function Aboutus() {
    const[data,setData]=useState(AboutApi)
  return (
    <>
    <section className="common-section our-service">
        <div className="container mb-5">
        <div className="row">
        <div className="col-12 col-lg-5 text-center">
            <div className="mt-5 left-side-image">
                <img className="img-fluid" src="./images/hero1.jpg" alt="aboutus images"></img>
            </div>
        </div>
        <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column">
            <h3 className="mini-title ">
               -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
            </h3>
            <h1 className="main-heading">How to use the App?</h1>
            {data.map((alldata) =>{
                const{id,title,info}=alldata;
                return(<>
                <div className="row our-services-info">
                <div className="col-1 our-services-number">{id}</div>
                <div className="col-10 our-services-data">
                    <h2>{title}</h2>
                    <p className="main-hero-para">{info}</p>
                </div>
            </div>

                </>
                )
            })}
            
            <br></br>
            <button className="design btn-style-border">Learn More</button>
        </div>
            </div>

        </div>
    </section>
    {/* second about section start here */}
    <section className="common-section our-service mt-5">
        <div className="container mb-5">
        <div className="row">
        
        <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column">
            <h3 className="mini-title ">
               -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
            </h3>
            <h1 className="main-heading">How to use the App?</h1>
            {data.map((alldata) =>{
                const{id,title,info}=alldata;
                return(<>
                <div className="row our-services-info">
                <div className="col-1 our-services-number">{id}</div>
                <div className="col-10 our-services-data">
                    <h2>{title}</h2>
                    <p className="main-hero-para">{info}</p>
                </div>
            </div>

                </>
                )
            })}
            
            <br></br>
            <button className="design btn-style-border">Learn More</button>
        </div>
        <div className="col-12 col-lg-5 text-center">
            <div className="mt-5 left-side-image">
                <img className="img-fluid" src="./images/hero1.jpg" alt="aboutus images"></img>
            </div>
        </div>
            </div>

        </div>
    </section>


    </>
  )
}

export default Aboutus