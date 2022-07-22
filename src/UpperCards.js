import React, { useState } from 'react';
import PlayApi from './PlayApi';

function UpperCards() {
    const[workData, setWorkData]= useState(PlayApi);
    console.log(PlayApi);
  return (
    <>
    <section>
 <div className="work-container container">
    <h1 className="main-heading text-center"> How does it Work</h1>
    <div className="row">
        {workData.map((current) => {
            const{ id, logo, title, info } = current; 
            return <>
            
<div className="col-12 col-lg-4 text-center ">
    <i className={`fontawesome-style ${logo}`}></i>
    <h2 className="sub-heading">{title}</h2>
    <p className="main-hero-para w-100">{info}</p>

        </div>
            </>


        })
        }

    </div>
 </div>
    </section>
    </>
  )
}

export default UpperCards