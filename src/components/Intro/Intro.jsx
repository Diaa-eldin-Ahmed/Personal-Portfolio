import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/diaa.png";
import html from "../../img/HTML.png";
import react from "../../img/REACT.png";
import redux from "../../img/REDUX.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [rotate, setRotate] = React.useState(false);
    const [rotateRedux, setRotateRedux] = React.useState(false);
    return (
        <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Hello! I Am
                    </span>
                    <span>Diaa Ahmed</span>
                    <span>
                        Frontend Developer with high level of experience in web
                        designing and development, producing the Quality work
                    </span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
                {/* social icons */}
                <div className="i-icons">
                    {/* <motion.div
                        animate={{ y: [0, -20, -20, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1,
                            type: "spring",
                        }}
                        drag
                        dragConstraints={{
                            left: 330,
                            right: 330,
                            top: 330,
                            bottom: 330,
                        }}
                    > */}
                    <a
                        href="https://github.com/Diaa-eldin-Ahmed"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <img src={Github} alt="" />
                    </a>
                    {/* </motion.div> */}
                    <a
                        href="https://www.linkedin.com/in/diaa-ahmed-aboelela"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a
                        href="https://www.instagram.com/dia2ahmed"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        {/* <img src={Instagram} alt="" /> */}
                        <motion.img src={Instagram} alt="" drag />
                    </a>
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                {/* animation */}
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={html}
                    alt=""
                    drag
                    dragConstraints={{
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10,
                    }}
                />
                <motion.img
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{
                        left: "70%",
                        top: "23%",
                        rotate: rotate ? 360 : 0,
                    }}
                    transition={transition}
                    src={react}
                    alt=""
                    animate={{}}
                    onClick={() => {
                        setRotate(!rotate);
                    }}
                    drag
                    dragConstraints={{
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10,
                    }}
                />
                <motion.img
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{
                        left: "0rem",
                        rotate: rotateRedux ? 360 : 0,
                    }}
                    transition={transition}
                    src={redux}
                    alt=""
                    animate={{}}
                    onClick={() => {
                        setRotateRedux(!rotateRedux);
                    }}
                    drag
                    dragConstraints={{
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10,
                    }}
                />
                {/* animation */}
                {/* <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    floatinDiv mein change hy dark mode ka
                    <FloatinDiv
                        img={thumbup}
                        text1="Best Design"
                        text2="Award"
                    />
                </motion.div> */}

                <div
                    className="blur"
                    style={{ background: "rgb(238 210 255)" }}
                ></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
