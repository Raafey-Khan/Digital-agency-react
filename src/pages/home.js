import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="responsive-visible">
                    <img src="/assets/images/techno-logo.png" alt="Techno Logo" />
                </div>
                <div className="nav-first-scroll">
                    <div className="my-container">
                        <div className="address-side">
                            <ul>
                                <li><a href="mailto:example@example.com">example@example.com</a></li>
                                <li><a href="#">2/20, Astern Road, USA</a></li>
                                <li><a href="tel:+880320432242">+880 320 432 242</a></li>
                            </ul>
                        </div>
                        <div className="social-links-side">
                            <i className="fa-brands fa-facebook-f" style={{color: '#ffffff'}}></i>
                            <i className="fa-brands fa-twitter" style={{color: '#fcfcfc'}}></i>
                            <i className="fa-brands fa-instagram" style={{color: '#ffffff'}}></i>
                            <i className="fa-solid fa-basketball" style={{color: '#ffffff'}}></i>
                        </div>
                    </div>
                </div>
                <header>
                    <div className="logo">
                        <h4 className="new-responsive-logo">Techno</h4>
                        <img className="techno-logo-img" src="/assets/images/techno-logo.png" alt="Techno Logo" />
                    </div>
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="nav-bar">
                        <ul>
                            <li>
                                <a href="#">Home <i style={{marginLeft: '0.2rem'}} className="fa-solid fa-angle-down"></i></a>
                            </li>
                            <li>
                                <a href="#">Company <i style={{marginLeft: '0.2rem'}} className="fa-solid fa-angle-down"></i></a>
                            </li>
                            <li>
                                <a href="#">Services <i style={{marginLeft: '0.2rem'}} className="fa-solid fa-angle-down"></i></a>
                            </li>
                            <li>
                                <a href="#">Pages <i style={{marginLeft: '0.2rem'}} className="fa-solid fa-angle-down"></i></a>
                            </li>
                            <li>
                                <a href="#">Elements <i style={{marginLeft: '0.2rem'}} className="fa-solid fa-angle-down"></i></a>
                            </li>
                            <li>
                                <a href="#">Blog <i style={{marginLeft: '0.2rem'}} className="fa-solid fa-angle-down"></i></a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a className="search-icon" href="#"><i className="fa-solid fa-magnifying-glass" style={{color: '#ffffff'}}></i></a>
                            </li>
                            <li>
                                <a className="basket-icon" href="#"><i className="fa-solid fa-basket-shopping" style={{color: '#ffffff'}}></i></a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="hero-image-container">
                    <div className="hero-main-two-holding-container">
                        <div className="hero-first-container">
                            <div className="hero-first-sub-txt">
                                <p><img src="/assets/images/blue-line.jpg" alt="Blue Line" /> Digital Agency Based in USA</p>
                            </div>
                            <div className="sub-heading-hero-first">
                                <h4>Meet the <span>Corporate</span> <br /> Team for Business</h4>
                            </div>
                            <br />
                            <div className="description-first-hero-txt">
                                <p>Globally develop unique technologies low-risk high-yield product <br />
                                    Seamlessly cultivate extensible solutions rather</p>
                            </div>
                            <br />
                            <div className="two-button-section d-flex">
                                <button className="start-button">Get Start Now</button>
                                <button className="phone-icon"><i className="fa-solid fa-phone" style={{color: '#ffffff'}}></i></button>
                                <span>Call Everyday <br /> +98 321 (7690) 326</span>
                            </div>
                        </div>
                        <div className="hero-second-container">
                            <div className="background-image-holder">
                                <div className="right-side-line-container">
                                    <img className="left-arc" src="/assets/images/img-left-shape.png" alt="Left Arc" />
                                    <div className="hero-section-img-containerr">
                                        <img src="/assets/images/hero-img.png" alt="Heroe" />
                                        <img className="round-spin" src="/assets/images/round.png" alt="Round Spin" />
                                    </div>
                                    <img className="right-arc" src="/assets/images/img-right-shape.png" alt="Right Arc" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-container">
                    <div className="checkout-sub-txt">
                        <h3>Checkout our <span className="blue-t">Company</span> <br /> <span className="side-left">Services Below</span></h3>
                    </div>
                    <div className="box-container">
                        <div className="box1"></div>
                        <div className="box2"></div>
                        <div className="box3"></div>
                        <div className="box4"></div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-first-image-container">
                        <img className="info-img" src="/assets/images/info-img.png" alt="Info" />
                    </div>
                    <div className="info-second-txt-container">
                        <div className="info-txt-logo">
                            <span className="bluetxt">
                                SINCE 1990
                            </span>
                            <div className="sub-heading-info">
                                <h3>The Right Place For Your <span className="blue-sub-head">Digital</span> Business</h3>
                            </div>
                            <div className="info-about-txt">
                                <p>Dynamically promote economically sound experiences. Proactively enable process services.</p>
                            </div>
                            <div className="info-long-txt">
                                <p>Dynamically promote economically sound experiences whereas best. Proactively enable process-centric services rather than B2B scenarios to syndicate future-proof outside the thinking.</p>
                            </div>
                            <div className="two-flex-labels d-flex">
                                <div className="inner-flex-1 d-flex">
                                    <i style={{color: '#0c5adb'}} className="fa-solid fa-check fw"></i>
                                    <p>LifeTime Dedicated Support</p>
                                </div>
                                <div className="inner-flex-2 d-flex">
                                    <i style={{color: '#0c5adb'}} className="fa-solid fa-check fw"></i>
                                    <p>Free IT Consulting Services</p>
                                </div>
                            </div>
                            <div className="co-founder-section d-flex">
                                <img className="co-founder-img" src="/assets/images/co-founder.png" alt="Co-founder" />
                                <div className="co-founder-about">
                                    <h4>David Alexon</h4>
                                    <p>CEO & Founder</p>
                                </div>
                                <div className="btnn" style={{borderRadius: '27%'}}>
                                    <p>Discover More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default Home;
