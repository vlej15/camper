import React from "react";
import "./css/BannerMain.scss";
import img1 from "./css/main.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

$(document).ready(function () {
  $(".arrow-icon").click(function () {
    var offset = $(".section1").offset();
    $("html").animate({ scrollTop: offset.top }, 1400);
  });

  // $(window).scroll(function () {
  //     let pos = $(window).scrollTop();
  //     // console.log(pos)
  //     function getSize() {
  //         let size = $(".wecreate").css("font-size");
  //         size = parseInt(size, 10);
  //         $("#font-size").text(size);
  //     }

  //     getSize();
  // if (pos < 500) {
  //     num = num * 0.8;
  // }

  //     if (pos < 350) {
  //         $(".wecreate").width('100px');
  //     }
  // });
});

function BannerMain() {
  return (
    <div className="bannerMain">
      <div className="img-area">
        <img src={img1} />
      </div>
      <div className="bm_box">
        <div className="text-area">
          <h3 className="wecreate">WE CREATE NEW CULTURE</h3>
          <p className="new">
            캠핑의 새로운 시대를 주도하는 CAMPER
            <br />
            캠핑에 대한 모든 편리한 서비스를 선사합니다.
          </p>
        </div>
        <div className="frame">
          <div className="topline"></div>
          <div className="bottomline"></div>
          <p className="topedge"></p>
          <p className="bottomedge"></p>
        </div>
      </div>
      <div className="arrow-area">
        <button className="arrow-icon">
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </button>
        <p className="arrow-title">Scroll</p>
      </div>
    </div>
  );
}

export default BannerMain;
