import React from 'react'

function Header() {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 leader-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1> We can make Creative team for you.</h1>
                            <p className="main-hero-para">In ancient manuscripts, another mean to divide sentences into paragraphs was a line
                             break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital
                              letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original 
                              {/* Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. For additional ornamentation, a hedera leaf */}
             </p>
                        <h3> Get early access for you</h3>
                        <div className="input-group mt-3">
                            <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder='Enter Your text' name="" id=""/>
                            <div className="input-group-text">Get it now</div>
                        </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src="../images/hero2.jpg" alt="herosection" className="img-fluid" srcset=""/>
                            <img src="../images/hero1.jpg" alt="herosectionupper" className="img-fluid main-hero-img2" srcset=""/>
                        </div>
                    </div>
                </section>
            </header>
        </>

    )
}

export default Header