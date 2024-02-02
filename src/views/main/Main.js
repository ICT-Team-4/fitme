import {Link} from 'react-router-dom';
import React from 'react';


import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';



function Main() {
  return (
    <div>
        <HeaderTop/>
        <Header/>

        {/*
        <div className="loader-wrapper">
            <div className="loader"></div>
            <div className="loder-section left-section"></div>
            <div className="loder-section right-section"></div>
        </div>
        */}

        {/*
        <!-- ============================================================== -->
        <!-- Start - Mobile-Menu- Section -->
        <!-- ============================================================= -->
        */}


    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
        <div className="mobile-menu">
            <nav className="itsoft_menu">
                <ul className="nav_scroll">
                    <li><a href="">home</a>
                        <ul className="sub-menu">
                            <li><a href="index.html">DEMO 01</a></li>
                            <li><a href="index-2.html">DEMO 02</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">about</a>
                        <ul className="sub-menu">
                            <li><a href="team.html">our farmers</a></li>
                            <li><a href="service.html">our service</a></li>
                            <li><a href="portfolio.html"> Gallery</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </li>
                    <li><a href="service.html">service</a></li>
                    <li><a href="portfolio.html">gallery</a></li>
                    <li><a href="gallery.html">pages</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">about us</a></li>
                            <li><a href="team.html">our farmers</a></li>
                            <li><a href="service.html">our service</a></li>
                            <li><a href="portfolio.html"> Gallery</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </li>
                    <li><a href="#">blog</a>
                        <ul className="sub-menu">
                            <li><a href="blog-grid.html">blog grid view</a></li>
                            <li><a href="blog-list.html">blog list view</a></li>
                            <li><a href="blog-2column.html">blog 2 column</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">contact</a></li>
                </ul>
            </nav>
        </div>
    </div>

    {/*
        <!--==================================================-->
        <!-- Start  slider Area -->class
        <!--==================================================-->
    */}
    <div className="owl-carousel pb-next slider_list">
        <div className="slider-area style-two align-items-center d-flex">
        <video muted autoPlay loop style={{position:"absolute", width:"100vw", height:"100%", position:"absolute"}}>
            <source src="/videos/main_title.mp4" type="video/mp4"/>
        </video>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="slider-content">
                            <div className="slider-title">
                                <h1 className="text-orange">For your Health <br/> with <span>FitMe</span></h1>
                            </div>
                            <div className="slider-button">
                                <a href="#">Login now<i className="bi bi-arrow-right"></i></a>
                            </div>
                            <div className="slider-btn">
                                <a href="#">About more<i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="slider-content">
                            <div className="slider-thumb">
                                <img src="assets/images/hero-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider-area upper align-items-center d-flex">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="slider-content">
                            <div className="slider-thumb">
                                <img src="../../assets/images/cat.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="slider-content">
                            <div className="slider-title">
                                <h3>100% Organic food served</h3>
                                <h1>we are the <span>best</span> <br/> Service providers</h1>
                                <p>Authoritatively maintain turnkey processes before distinctive our  food <br/> Efficiently more facilitate ethical imperatives</p>
                            </div>
                            <div className="slider-button">
                                <a href="#">Shop now <i className="bi bi-arrow-right"></i></a>
                            </div>
                            <div className="slider-btn">
                                <a href="#">About us <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start  feature-area -->
        <!--==================================================-->
    */}
    <div className="feature-area style-two">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <div className="main-title">
                            <h2></h2>
                        </div>
                    </div>
                    <div className="section-titles">
                        <div className="main-titles">
                            <h2>Featured Categories</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="owl-carousel feature_list">
                    <div className="col-lg-12 col-md-6">
                        <div className="single-feature-box">
                            <div className="feature-content">
                                <div className="feature-thumb">
                                    <img src="../../assets/images/cat2.png" alt=""/>
                                </div>
                                <div className="feature-title">
                                    <a href="#">Soft Drinks</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="single-feature-box">
                            <div className="feature-content">
                                <div className="feature-thumb">
                                    <img src="assets/images/cat4.png" alt=""/>
                                </div>
                                <div className="feature-title">
                                    <a href="#">Eggs & Dairy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="single-feature-box">
                            <div className="feature-content">
                                <div className="feature-thumb">
                                    <img src="assets/images/cat1.png" alt=""/>
                                </div>
                                <div className="feature-title">
                                    <a href="#">Vegetables</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="single-feature-box">
                            <div className="feature-content">
                                <div className="feature-thumb">
                                    <img src="assets/images/cat5.png" alt=""/>
                                </div>
                                <div className="feature-title">
                                    <a href="#">Organic Fish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="single-feature-box">
                            <div className="feature-content">
                                <div className="feature-thumb">
                                    <img src="assets/images/cat4.png" alt=""/>
                                </div>
                                <div className="feature-title">
                                    <a href="#">Eggs & Dairy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="single-feature-box">
                            <div className="feature-content">
                                <div className="feature-thumb">
                                    <img src="assets/images/cat1.png" alt=""/>
                                </div>
                                <div className="feature-title">
                                    <a href="#">Vegetables</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <div className="single-feature-box">
                            <div className="feature-content">
                                <div className="feature-thumb">
                                    <img src="assets/images/cat5.png" alt=""/>
                                </div>
                                <div className="feature-title">
                                    <a href="#">Organic Fish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start  offer-area -->
        <!--==================================================-->
    */}
    <div className="offer-area style-two">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="single-offer-box style-one">
                        <div className="offer-content">
                            <div className="offer-title">
                                <h2>Get 15% Off all Vegitables</h2>
                            </div>
                            <div className="offer-titles">
                                <h3>Fresh Vegetables And Organic Fruits</h3>
                            </div>
                        </div>
                        <div className="offer-button">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="single-offer-box style-two">
                        <div className="offer-content">
                            <div className="offer-title">
                                <h2>Get 10% Off all Fruits</h2>
                            </div>
                            <div className="offer-titles">
                                <h3>Fresh Vegetables And Organic Fruits</h3>
                            </div>
                        </div>
                        <div className="offer-button">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start products -area -->
        <!--==================================================-->
    */}
    <div className="product-area style-two">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-titles">
                        <div className="main-titles">
                            <h2>Featured Products</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="owl-carousel product_list">
                            <div className="col-lg-12 col-md-6">
                                <div className="single-product upper">
                                    <div className="product-thumb">
                                        <img src="assets/images/product-4.jpg" alt=""/>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-category">
                                            <a href="#">Vegetables</a>
                                        </div>
                                        <div className="product-title">
                                            <h2><a href="#">Taza Palm Fruit</a></h2>
                                        </div>
                                        <div className="product-rating">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-half"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="single-product upper">
                                    <div className="product-thumb">
                                        <img src="assets/images/product-1.jpg" alt=""/>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-category">
                                            <a href="#">Dry Foods</a>
                                        </div>
                                        <div className="product-title">
                                            <h2><a href="#">Bangladeshi Papaya</a></h2>
                                        </div>
                                        <div className="product-rating">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="single-product upper">
                                    <div className="product-thumb">
                                        <img src="assets/images/product-3.jpg" alt=""/>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-category">
                                            <a href="#">Fresh Fruits</a>
                                        </div>
                                        <div className="product-title">
                                            <h2><a href="#">Fresh Strawberry</a></h2>
                                        </div>
                                        <div className="product-rating">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-half"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="single-product upper">
                                    <div className="product-thumb">
                                        <img src="assets/images/product-1.jpg" alt=""/>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-category">
                                            <a href="#">Dry Foods</a>
                                        </div>
                                        <div className="product-title">
                                            <h2><a href="#">Bangladeshi Papaya</a></h2>
                                        </div>
                                        <div className="product-rating">
                                            <ul>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="singles-products">
                        <div className="products-content">
                            <div className="products-title">
                                <h4>Agrofarm</h4>
                                <h2>50% OFF</h2>
                                <span>Featured Products</span>
                            </div>
                        </div>
                        <div className="product-button">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start  coundown-area-->
        <!--==================================================-->
    */}
    <div className="about-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="about-images">
                        <img src="assets/images/about-img.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="section-titles">
                        <div className="main-titles">
                            <h2>Fresh Vegetable Everyday</h2>
                        </div>
                    </div>
                    <div className="abouts-content">
                        <div className="abouts-titles">
                            <h2>Your Best Online Organic Food Recipes agrofarm</h2>
                        </div>
                        <div className="abouts-discription">
                            <p>Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper. Amprey grunion. Walleye poolfish sand butterfly ray stream catfish jewfish, Spanish.</p>
                        </div>
                        <div className="about-tmbs">
                            <img src="assets/images/author-img.png" alt=""/>
                        </div>
                        <div className="author-name">
                            <h2>John Smith</h2>
                            <span>CEO and Founder</span>
                        </div>
                        <div className="signature">
                            <img src="assets/images/signature.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start portfolio area -->
        <!--==================================================-->
    */}
        <div className="portfolio_area pt-80 pb-70" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="portfolio_nav">
                            <div className="portfolio_menu">
                                <ul className="menu-filtering">
                                    <li className="current_menu_item" data-filter="*">All Products</li>
                                    <li data-filter=".physics" >Dry Foods</li>
                                    <li data-filter=".cemes" >Fresh Fruits</li>
                                    <li data-filter=".math" >Vegetables</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row image_load">
                    <div className="col-lg-3 col-md-6 col-sm-12 grid-item physics math">
                        <div className="single-product">
                        <div className="product-thumb">
                            <img src="assets/images/product-4.jpg" alt=""/>
                            <div className="product-icon">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a href="#"><i className="fa fa-cart-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-category">
                                <a href="#">Vegetables</a>
                            </div>
                            <div className="product-title">
                                <h2><a href="#">Taza Palm Fruit</a></h2>
                            </div>
                            <div className="product-price">
                                <h3>56.00৳ </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 grid-item cemes">
                        <div className="single-product">
                        <div className="product-thumb">
                            <img src="assets/images/product-3.jpg" alt=""/>
                            <div className="product-icon">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a href="#"><i className="fa fa-cart-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-category">
                                <a href="#">Fresh Fruits</a>
                            </div>
                            <div className="product-title">
                                <h2><a href="#">Fresh Strawberry</a></h2>
                            </div>
                            <div className="product-price">
                                <h3>12.00৳ </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 grid-item cemes">
                        <div className="single-product">
                        <div className="product-thumb">
                            <img src="assets/images/product-1.jpg" alt=""/>
                            <div className="product-icon">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a href="#"><i className="fa fa-cart-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-category">
                                <a href="#">Dry Foods</a>
                            </div>
                            <div className="product-title">
                                <h2><a href="#">Bangladeshi Papaya</a></h2>
                            </div>
                            <div className="product-price">
                                <h3>50.00৳ </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 grid-item cemes math">
                        <div className="single-product">
                        <div className="product-thumb">
                            <img src="assets/images/product-2.jpg" alt=""/>
                            <div className="product-icon">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                    <li><a href="#"><i className="fa fa-cart-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-category">
                                <a href="#">Fresh Fruits</a>
                            </div>
                            <div className="product-title">
                                <h2><a href="#">Taza & Fresh Orange</a></h2>
                            </div>
                            <div className="product-price">
                                <h3>30.00৳ </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/*
            <!--==================================================-->
            <!-- Start  coundown-area  style-two-->
            <!--==================================================-->
        */}
    <div className="countdown-area style-two">
        <div className="container">
            <div className="row backg">
                <div className="col-lg-6 col-md-6">
                    <div className="section-titles">
                        <div className="main-titles">
                            <h2>Best Deals This Week</h2>
                            <p>Ballan wrasse climbing amur pike Arctic char of the organic <br/> lamprey grunion. Walleye poolfish sandition done.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div id="countdown">
                        <ul>
                            <li><span id="days"></span>days</li>
                            <li><span id="hours"></span>Hours</li>
                            <li><span id="minutes"></span>Minutes</li>
                            <li><span id="seconds"></span>Seconds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start footer-area -->
        <!--==================================================-->
    */}
    <div className="testimonials-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="section-titles">
                        <div className="main-titles">
                            <h2>What Our Clients Say</h2>
                        </div>
                        <div className="testi_title">
                            <h2>“Agrofarm! is the Real and Best Organic Store”</h2>
                        </div>
                    </div>
                    <div className="owl-carousel testis_lists">
                        <div className="testi_content">
                            <div className="testi_title">
                                <p>Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper.</p>
                            </div>
                            <div className="testi_thumb">
                                <img src="assets/images/project5.jpg" alt=""/>
                            </div>
                            <div className="client-info">
                                <h2>David Alexon</h2>
                                <span>Manager</span>
                            </div>
                            <div className="testi_img">
                                <img src="assets/images/quote.png" alt=""/>
                            </div>
                        </div>
                        <div className="testi_content">
                            <div className="testi_title">
                                <p>Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper.</p>
                            </div>
                            <div className="testi_thumb">
                                <img src="assets/images/project5.jpg" alt=""/>
                            </div>
                            <div className="client-info">
                                <h2>David Alexon</h2>
                                <span>Manager</span>
                            </div>
                            <div className="testi_img">
                                <img src="assets/images/quote.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="testmoni_tmb">
                        <img src="assets/images/testi-img.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start blog-area -->
        <!--==================================================-->
    */}
    <div className="blog-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-titles">
                        <div className="main-titles">
                            <h2>Agrofarm Recent Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="owl-carousel blog_list">
                    <div className="col-lg-12">
                    <div className="blog-single-box">
                        <div className="blog-thumb">
                            <img src="assets/images/blog-3.jpg" alt=""/>
                            <div className="blog-btn">
                                <a href="#">farming</a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="blog-details.html">Made confident bigger chance as.</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div className="blog-button">
                                <a href="#">read more <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="blog-single-box">
                        <div className="blog-thumb">
                            <img src="assets/images/blog-1.jpg" alt=""/>
                            <div className="blog-btn">
                                <a href="#">organic</a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="#">Amount of Freak Bread or Other Fruits</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div className="blog-button">
                                <a href="#">read more <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="blog-single-box">
                        <div className="blog-thumb">
                            <img src="assets/images/blog.jpg" alt=""/>
                            <div className="blog-btn">
                                <a href="#">dayri farm</a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="blog-details.html">Spicey choose plush amazing</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div className="blog-button">
                                <a href="#">read more <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="blog-single-box">
                        <div className="blog-thumb">
                            <img src="assets/images/blog-5.jpg" alt=""/>
                            <div className="blog-btn">
                                <a href="#">farming</a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="blog-details.html">Made confident bigger chance as.</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div className="blog-button">
                                <a href="#">read more <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="blog-single-box">
                        <div className="blog-thumb">
                            <img src="assets/images/blog-4.jpg" alt=""/>
                            <div className="blog-btn">
                                <a href="#">farming</a>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="blog-details.html">Simple and Delicious Keto Salads</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div className="blog-button">
                                <a href="#">read more <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start footer-area -->
        <!--==================================================-->
    */}
    <div className="support-area">
        <div className="container">
            <div className="row border-top">
                <div className="col-lg-4 col-md-6">
                    <div className="support-content">
                        <div className="icon">
                            <i className="bi bi-truck"></i>
                        </div>
                        <div className="support-title">
                            <h2>Free Shipping</h2>
                        </div>
                        <div className="support-discription">
                            <p>Ballan wrasse climbing gouramic amur pike Arctic char,</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="support-content">
                        <div className="icon style-one">
                            <i className="bi bi-alipay"></i>
                        </div>
                        <div className="support-title">
                            <h2>Best Price Guarantee</h2>
                        </div>
                        <div className="support-discription">
                            <p>Ballan wrasse climbing gouramic amur pike Arctic char,</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="support-content">
                        <div className="icon style-two">
                            <i className="bi bi-clock-history"></i>
                        </div>
                        <div className="support-title">
                            <h2>24/7 Support</h2>
                        </div>
                        <div className="support-discription">
                            <p>Ballan wrasse climbing gouramic amur pike Arctic char,</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    {/*
        <!--==================================================-->
        <!-- Start footer-area -->
        <!--==================================================-->
    */}
    <div className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-box">
                        <div className="footer-logo">
                            <img src="assets/images/logo-2.png" alt=""/>
                        </div>
                        <div className="footer-content">
                            <div className="footer-title">
                                <p>There are many variation of passa Morem Ipsum available, but the in majority have suffered.</p>
                                <h5>Follow Us:</h5>
                            </div>
                            <div className="footer-icon">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>	
                                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>	
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-box">
                        <div className="footer-content">
                            <div className="footer-title">
                                <h2>Information</h2>
                            </div>
                            <div className="footer-ico">
                                <ul>
                                    <li><a href="#"><span>Our Projects</span></a></li>
                                    <li><a href="#"><span>About Us</span></a></li>
                                    <li><a href="#"><span>Contact Us</span></a></li>
                                    <li><a href="#"><span>Privacy policy</span></a></li>
                                    <li><a href="#"><span>Checkout</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-box">
                        <div className="footer-content">
                            <div className="footer-title">
                                <h2>My Account</h2>
                            </div>
                            <div className="footer-ico">
                                <ul>
                                    <li><a href="#"><span>My Order</span></a></li>
                                    <li><a href="#"><span>Download</span></a></li>
                                    <li><a href="#"><span>Account Details</span></a></li>
                                    <li><a href="#"><span>Address</span></a></li>
                                    <li><a href="#"><span>Lost password</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-box">
                        <div className="footer-content">
                            <div className="footer-title">
                                <h2>Download Our Apps</h2>
                            </div>
                            <div className="footer-discription">
                                <p>Fast and Conventment Access</p>
                            </div>
                            <div className="footer-thumb">
                                <img src="assets/images/google-play.png" alt=""/>
                            </div>
                            <div className="footer-img">
                                <img src="assets/images/app-store.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start copy-right-area -->
        <!--==================================================-->
    */}
    <div className="copy-right-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                        <div className="copy-rights-titles">
                            <h3>Copyright © Agrofarm -Dream IT. all rights reserved.</h3>
                        </div>
                </div>
                <div className="col-lg-6">
                    <div className="copy-right-thumb">
                        <img src="assets/images/payments.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>






    {/*
        <!--==================================================-->
        <!----- Start Search Popup Area ----->
        <!--==================================================-->
    */}
        <div className="search-popup">
            <button className="close-search style-two"><i className="fa fa-times"></i></button>
            <button className="close-search"><i className="fas fa-arrow-up"></i></button>
            <form method="post" action="#">
                <div className="form-group">
                    <input type="search" name="search-field" value="" placeholder="Search Here" required=""/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
            </form>
        </div>
        {/*
            <!--==================================================-->
            <!----- Start Search Popup Area ----->
            <!--==================================================-->
        */}

        {/*
            <!--==================================================-->
            <!----- Start Scroll ----->
        <!--==================================================-->
        */}
        <div className="scroll-area">
            <div className="top-wrap">
                <div className="go-top-btn-wraper">
                    <div className="go-top go-top-button">
                        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Main;

