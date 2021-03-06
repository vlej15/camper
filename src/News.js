import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/News.scss";
import "./css/NewsBoard.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import BannerNews from "./BannerNews";

function News(props) {
    //header
    useEffect(() => {
        props.setCount(0);
    }, []);

    return (
        <>
            {/* <div className="end"></div> */}
            <div data-aos="fade-down" data-aos-duration="1000">
                <BannerNews />
            </div>

            <div className="FlocationData">
                <div className="nav-area">
                    <div className="nav-homearea">
                        <i class="fas fa-home"></i>
                    </div>
                    <div className="nav-section1">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <div className="sec1-title">
                                    COMMUNITY
                                    <div className="nav-icon">
                                        <FontAwesomeIcon
                                            icon={faSortDown}
                                        ></FontAwesomeIcon>
                                    </div>
                                </div>
                                <ul className="sec-list">
                                    <Link to="/map">
                                        <li>
                                            <a>ROADMAP</a>
                                        </li>
                                    </Link>
                                    <Link to="/notice">
                                        <li>
                                            <a>COMMUNITY</a>
                                        </li>
                                    </Link>
                                    <Link to="/faq">
                                        <li>
                                            <a>CONTACT</a>
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-section2">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <a>
                                    <div className="sec2-title">
                                        NEWS
                                        <div className="nav-icon">
                                            <FontAwesomeIcon
                                                icon={faSortDown}
                                            ></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </a>
                                <ul className="sec-list">
                                    <Link to="/notice">
                                        <li>
                                            <a>NOTICE</a>
                                        </li>
                                    </Link>
                                    <Link to="/freeboard">
                                        <li>
                                            <a>FREE BOARD</a>
                                        </li>
                                    </Link>
                                    <Link to="/tipboard">
                                        <li>
                                            <a>TIP BOARD</a>
                                        </li>
                                    </Link>
                                    <Link to="/news">
                                        <li>
                                            <a>NEWS BOARD</a>
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="contentsNews">
                <div className="start"></div>
                <div className="banner">
                    <p className="banner-title">N E W S</p>
                    <br></br>
                    <p className="subtitle">
                        ???????????? ????????? ????????? ????????? ?????? ?????? ??? ????????????.
                    </p>
                </div>
                <ul className="news-area">
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.dnews.co.kr/uhtml/view.jsp?idxno=202106080731094630523">
                            <dl>
                                <dt>
                                    "????????? 2030????????? ?????? ????????? ????????? ?????? 10??? ??????"??????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-08</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://www.dnews.co.kr/photo/photo/2021/06/08/202106080731094630523-2-202032.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://biz.chosun.com/industry/car/2021/06/07/X66F3UFTRVDWFBVCWD7ZHPOMFM/?utm_source=naver&utm_medium=original&utm_campaign=biz">
                            <dl>
                                <dt>
                                    "???, ????????? ?????? ?????????... ?????????, ???????????? ?????? ??????"??????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-07</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://chosunbiz-chosunbiz-prod.cdn.arcpublishing.com/resizer/1a-LoCb3sPVXQkq-eY7bQouXvVg=/464x266/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/CAZY6USGGRFD5H2A5RV4IORFKA.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="http://news.kmib.co.kr/article/view.asp?arcid=0924195065&code=11151400&cp=nv">
                            <dl>
                                <dt>
                                    "????????? ???????????? ????????? ???????????????"??????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-08</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="http://image.kmib.co.kr/online_image/2021/0608/2021060721390327371_1623069544_0924195065.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.fnnews.com/news/202106071807427867">
                            <dl>
                                <dt>
                                    "??????~?????????????????? ???????????? ????????? ????????????"????????????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-07</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://image.fnnews.com/resource/media/image/2021/06/07/202106071807424567_l.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="http://www.gnetimes.co.kr/news/articleView.html?idxno=63268">
                            <dl>
                                <dt>
                                    "????????? ????????? ?????? SK??????, ????????? ?????? ???????????? ??????????"????????????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-08</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="http://www.gnetimes.co.kr/news/photo/202106/63268_38973_3716.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.hankyung.com/car/article/202106070849g">
                            <dl>
                                <dt>
                                    "????????? ????????? ???????????? ?????????'?????? ?????? ?????????????????? ??????'??????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-07</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://img.hankyung.com/photo/202106/01.26561914.1.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.chosun.com/economy/tech_it/2021/06/07/36FSEC673RDOZP5Z7BC36YHD5Q/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news">
                            <dl>
                                <dt>
                                    "????????? ????????? ????????? ???????????? ????????????"??????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-07</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://images.chosun.com/resizer/BV7HOHtBxNxRzmBUKK8powGzvYI=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XGRGM7BMHNGSFDSRJ6OWUKNLEA.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.yna.co.kr/view/AKR20210607076300003?input=1195m">
                            <dl>
                                <dt>
                                    "??????, ?????? ?????????????????? ?????? ????????? ????????? ?????? ?????????"??????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-07</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://img9.yna.co.kr/photo/yna/YH/2021/06/07/PYH2021060706590001300_P4.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.news1.kr/articles/?4331979">
                            <dl>
                                <dt>
                                    "??????, 6??? ????????? ????????????????????? 250?????? ?????? ??????"?????????1???
                                </dt>
                                <dd>
                                    <p className="date">2021-06-08</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://image.news1.kr/system/photos/2021/6/8/4810062/article.jpg/dims/optimize"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.hankookilbo.com/News/Read/A2021060807470001051?did=NA">
                            <dl>
                                <dt>
                                    "????????? ????????? ?????? ?????? ?????? ??????...???????????? ??????"??????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-08</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/08/25793251-0439-4ed1-9b81-a074e7ed8163.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}

                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://newsis.com/view/?id=NISX20210608_0001468453&cID=13001&pID=13000">
                            <dl>
                                <dt>
                                    "???????????????, ?????? ??? ????????? ?????? ????????? ??????"????????????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-06-08</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://image.newsis.com/2021/06/08/NISI20210608_0000762106_web.jpg?rnd=20210608091919"></img>
                            </div>
                        </a>
                    </li>{" "}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.seoul.co.kr/news/newsView.php?id=20210416500021">
                            <dl>
                                <dt>
                                    "????????? ?????? ?????? ????????? ????????? ????????? ??????
                                    ?????????"??????????????????
                                </dt>
                                <dd>
                                    <p className="date">2021-04-18</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://img.seoul.co.kr/img/upload/2021/04/16/SSI_20210416092722_O2.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.fnnews.com/news/202104180904392018">
                            <dl>
                                <dt>
                                    "????????? ?????? ???????????? ??????"????????????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021.04.18</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://image.fnnews.com/resource/media/image/2021/04/16/202104160942441500_l.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.ekn.kr/web/view.php?key=20210418010003526">
                            <dl>
                                <dt>
                                    "??????, ?????? SUV ????????? ?????? ??? EQB???
                                    ??????"?????????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date"> 2021.04.18</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://www.ekn.kr/mnt/file/202104/2021041801000826200035261.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://moneys.mt.co.kr/news/mwView.php?no=2021041906208034691">
                            <dl>
                                <dt>
                                    "??????????????????, ????????? ???????????? ???2021 iF?????????
                                    ???????????? ??????"?????????S???
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021.04.18</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://menu.mt.co.kr/moneyweek/thumb/2021/04/19/06/2021041906208034691_1.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202104160204">
                            <dl>
                                <dt>
                                    "???????????? ????????? `????????????`???K-????????????,
                                    ????????? ?????? ??????????"???????????????TV???
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-17</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://img.wowtv.co.kr/wowtv_news/dnrs/20210416/B20210416164821263.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://newsis.com/view/?id=NISX20210416_0001409213&cid=13001">
                            <dl>
                                <dt>
                                    "????????????, ????????? ?????? ??? ?????????????? ??????
                                    ??????"???????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-16</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://image.newsis.com/2021/04/16/NISI20210416_0000728073_web.jpg?rnd=20210416105238"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://kbench.com/?q=node/220411">
                            <dl>
                                <dt>
                                    "????????? ??? ?????? ????????? '????????????5' ?????????
                                    ?????????21????????? ????????? ??????"??????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-19</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://images.kbench.com/kbench/article/2021_04/k220411p1n1.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://biz.chosun.com/site/data/html_dir/2021/04/16/2021041601903.html">
                            <dl>
                                <dt>
                                    "1??? ????????? 1000?????? ?????? ???????????? ????????????
                                    ?????????"??????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2020-04-16</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://image.chosun.com/sitedata/image/202104/16/2021041601900_0.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.yna.co.kr/view/AKR20210416134500003">
                            <dl>
                                <dt>
                                    "????????????????? 1?????? ?????? ?????? 22??????????????????
                                    68% ??????"??????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-16</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://img6.yna.co.kr/photo/yna/YH/2020/09/15/PYH2020091503110001300_P4.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://zdnet.co.kr/view/?no=20210416144951">
                            <dl>
                                <dt>
                                    "??????, ????????? 2025????????? 7200kW??? ?????????
                                    ??????????????? ??????"???ZDNET???
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2020-04-16</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://image.zdnet.co.kr/2021/04/16/18a2d178c2b5992a69d6d1e42b01a103.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="http://news.kmib.co.kr/article/view.asp?arcid=0924187685">
                            <dl>
                                <dt>
                                    "SK, ????????? ????????? ????????? ????????????
                                    ????????????EV??? ??????"??????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-16</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="http://image.kmib.co.kr/online_image/2021/0416/202104160405_11150924187685_1.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://moneys.mt.co.kr/news/mwView.php?no=2021041509238069320">
                            <dl>
                                <dt>
                                    "?????????, ????????? ?????? ????????? 100?????????
                                    ???????????? ????????????"?????????S???
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-15</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://menu.mt.co.kr/moneyweek/thumb/2021/04/15/06/2021041509238069320_1.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.mk.co.kr/news/business/view/2021/04/363276/">
                            <dl>
                                <dt>
                                    "KT&G, ???????????? 1200?????? ????????????
                                    ?????????"??????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-15</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_363276_16184652774611817.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="http://news.heraldcorp.com/view.php?ud=20210416000935">
                            <dl>
                                <dt>
                                    "???????????? ????????? ?????????????????? ?????? ????????????
                                    ????????? ?????????"?????????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-18</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="http://res.heraldm.com/content/image/2021/04/16/20210416000792_0.jpg"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                    <li>
                        {" "}
                        {/* li start */}
                        <a href="https://www.ajunews.com/view/20210418133900437">
                            <dl>
                                <dt>
                                    "'10??? ????????? 197km ??????'...????????? ???
                                    ???????????? ????????? ?????? ?????????" ??????????????????
                                </dt>
                                <dd>
                                    <p></p>
                                    <p className="date">2021-04-18</p>
                                </dd>
                            </dl>
                            <div className="img-area">
                                <img src="https://image.ajunews.com/content/image/2021/04/18/20210418150721118491.png"></img>
                            </div>
                        </a>
                    </li>{" "}
                    {/* li end */}
                </ul>
                {/* <div className="btn-area">
          {localStorage.getItem("id") != null ? (
            <button className="write-btn">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="pencil"
              ></FontAwesomeIcon>
            </button>
          ) : null}
        </div> */}
            </div>
        </>
    );
}

export default News;
