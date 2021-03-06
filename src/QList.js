import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/QList.scss";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import BannerReq2 from "./BannerReq2";
import { Link } from "react-router-dom";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const QList = (props) => {
    const [posts, setPosts] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    const [qdata, setQdata] = useState([]);

    useEffect(async () => {
        //header
        props.setCount(0);

        var data = JSON.stringify({
            u_id: localStorage.getItem("id_value"),
        });

        var config = {
            method: "get",
            url: "http://3.36.197.174:8081/api/user/my-question",
            headers: {
                Authorization: localStorage.getItem("id"),
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setQdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div data-aos="fade-down" data-aos-duration="1000">
                <BannerReq2 />
            </div>

            <div className="ContactData">
                <div className="nav-area">
                    <div className="nav-homearea">
                        <i class="fas fa-home"></i>
                    </div>
                    <div className="nav-section1">
                        <ul className="sec-ul">
                            <li className="sec-li">
                                <div className="sec1-title">
                                    CONTACT
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
                                        ????????????
                                        <div className="nav-icon">
                                            <FontAwesomeIcon
                                                icon={faSortDown}
                                            ></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </a>
                                <ul className="sec-list">
                                    <Link to="/faq">
                                        <li>
                                            <a>FAQ</a>
                                        </li>
                                    </Link>
                                    <Link to="/questions">
                                        <li>
                                            <a>????????????</a>
                                        </li>
                                    </Link>
                                    <Link to="/qlist">
                                        <li>
                                            <a>????????????</a>
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="contentsQList">
                <div className="banner">
                    <p className="banner-title">????????????</p>
                    <br></br>
                    <p className="subtitle">
                        ???????????? ????????? ????????? ??? ????????????.
                    </p>
                </div>
                <table className="list">
                    <thead>
                        <tr>
                            <th>??????</th>
                            <th className="th-title">??????</th>
                            <th>?????????</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qdata.map((post) => (
                            <tr>
                                <td class="list-td">
                                    {post.answerCnt == 0 ? (
                                        <span className="list-span1">
                                            ????????????
                                        </span>
                                    ) : (
                                            <span className="list-span2">
                                                ????????????
                                            </span>
                                        )}
                                </td>
                                <td className="list-title">
                                    <Link to={`/qlist/${post.q_dtt}`}>
                                        <a className="list-link">
                                            {post.q_content}
                                        </a>
                                    </Link>
                                </td>
                                <td className="list-date">{post.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="QList-btn">
                <button className="QList-write">
                    <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="pencil"
                    ></FontAwesomeIcon>
                </button>
            </div>
        </>
    );
};

export default QList;
