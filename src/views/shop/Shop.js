import HeaderTop from "../component/headerTop/HeaderTop";
import Header from "../component/header/Header";
import Loader from "../component/loader/Loader";
import Breadcumb from "../component/Breadcumb/Breadcumb";
import ChatBot from "../component/chatBot/ChatBot";
import $ from 'jquery';
import React,{useEffect, useState} from 'react';
import './Shop.css';
import ShopListContainer from "./component/ShopListContainer";
import ShopListMenu from "./component/ShopListMenu";
import axios from 'axios'; //npm install axios


const ipAddress = '192.168.0.114';

//배열 섞기
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function Shop() {

    //목록 데이타 저장
    const [shopData,setShopData] = useState([]);
    //셔플된 전체 데이타 
    const [shopDataAll,setShopDataAll] = useState([]);

    useEffect(()=>{
        $('body').addClass('loaded');

        //서버에서 크롤링 json 가져오기
        axios.get(`http://${ipAddress}:5000/crawlingShop`)
        .then(res=>{
            setShopData(res.data);
            console.log(res.data); // 데이터를 콘솔에 로그로 출력
        })
        .catch(error => {
            console.error('데이터 가져오기 오류:', error);
        });

    },[]);

    useEffect(() => {
        const data = [];
        if (shopData != null) {
            console.log('data', shopData);
            shopData.map(item => {
                console.log('data', item.name);
                data.push(item);
            });
            shuffle(data);
            setShopDataAll(data);
        }
    }, [shopData]);




  return (
    <div className="shop1">
        {/*헤더 위*/}
        <HeaderTop/>
        {/*헤더 메인 메뉴*/}
        <Header/>
        {/* 로딩 애니메이션*/}
        <Loader/>

        <div className="footer-top-2 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-footer-top-box">
                            <div className="footer-top-title">
                                <h1>Purchase health item<br/>for your health</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single-footer-top-box">

                            {/*
                            <div className="footer-top-button">
                                <a>Refresh Shop List</a>
                             </div>
                             */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-area food-template">
            {/*<ShopListMenu/>*/}

            <div className="food-list-selector">
                {/*
                <div>
                    오늘의 전체 랭킹 순위!
                </div>
                */}

                <button>
                    높은 가격순
                </button>

                <button>
                    낮은 가격순
                </button>
            </div>
            
            <div className="container">
                {shopDataAll.map(item => (
                    <ShopListContainer data={item} />
                ))}
            </div>
        </div>

        








        {/*
        <!--==================================================-->
        <!-- Start brand-area -->
        <!--==================================================-->
        */}
        <div className="brand-area">
            <div className="container">
                <div className="row">
                    <div className="owl-carousel brand_list">
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client5.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client4.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client5.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*
        <!--==================================================-->
        <!-- Start footer-top-area -->
        <!--==================================================-->
        */}

        {/*
        <!--==================================================-->
        <!-- Start footer_section -->
        <!--==================================================-->
        */}
        <div className="footer_section">
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
                                    <h2>Company Info:</h2>
                                </div>
                                <div className="footer-ico">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-check"></i><span>Our Projects</span></a></li>
                                        <li><a href="#"><i className="fas fa-check"></i><span>About Us</span></a></li>
                                        <li><a href="#"><i className="fas fa-check"></i><span>Upcoming Events</span></a></li>
                                        <li><a href="#"><i className="fas fa-check"></i><span>Upcoming Events</span></a></li>
                                        <li><a href="#"><i className="fas fa-check"></i><span>Our Services</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-box">
                            <div className="footer-content">
                                <div className="footer-title">
                                    <h2>Company Info:</h2>
                                </div>
                                <div className="footer-icons">
                                    <i className="fa fa-home"></i>
                                    <p><b>Address</b> <br/> 10 South Building, Dhaka</p>
                                </div>
                                <div className="footer-icons">
                                    <i className="fa fa-phone"></i>
                                    <p><b>Telephone</b> <br/> (922) 3354 2252</p>
                                </div>
                                <div className="footer-icons">
                                    <i className="fa fa-globe"></i>
                                    <p><b>Email:</b> <br/> example@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-box">
                            <div className="footer-content">
                                <div className="footer-title">
                                    <h2>Company Info:</h2>
                                    <p>There are many variation of passa Morem Ipsum available.</p>
                                </div>
                                <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form_box">
                                                <input type="text" name="youe email address" placeholder="youe email address"/>
                                            </div>
                                        </div>
                                        <div className="form-button">
                                            <button type="submit">sign up</button>
                                        </div>
                                    </div>
                                </form>
                                <div id="status"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom">
                    <div className="col-lg-6 col-md-6">
                        <div className="copy-left-box">
                            <div className="copy-left-title">
                                <h3>Copyright © Agrofarm all rights reserved.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="copy-right-box">
                            <div className="copy-right-title">
                                <ul>
                                    <li><a href="#"><span>Terms & Condition</span></a></li>
                                    <li><a href="#"><span>Privacy Policy</span></a></li>
                                    <li><a href="#"><span>Contact Us</span></a></li>
                                </ul>															
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        <ChatBot/>
        </div>
    </div>
  );
}

export default Shop;

