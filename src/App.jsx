import React, { useState } from "react";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import eddit from "./component/Connecting/edit-2.png";
import message from "./component/Connecting/messages.png";
import sms from "./component/Connecting/sms-tracking.png";
import { useInView } from "react-intersection-observer";
import Connecting from "./component/Connecting/Connecting";
import Project from "./component/Project/Project";
import projectImg from "./component/Project/Rectangle 19.png";
import projectImg2 from "./component/Project/Rectangle 20.png";
import projectImg3 from "./component/Project/Rectangle 21.png";
import appCss from "./appCss.module.scss";
export default function App() {
  const [btnClick, setBtnClick] = useState(2);

  const projectsComponent = [
    <Project
      img={projectImg}
      title={"Sobha Hearland II Villas"}
      defultValue={3}
    />,
    <Project
      img={projectImg2}
      title={"Sobha Hearland II Villas"}
      defultValue={1}
    />,
    <Project
      img={projectImg3}
      title={"Sobha Hearland II Villas"}
      defultValue={4}
    />,
    <Project
      img={projectImg2}
      title={"Sobha Hearland II Villas"}
      defultValue={2}
    />,
  ];
  const { ref: messageIcon, inView: myElement } = useInView({
    root: null,
    triggerOnce: true,
  });
  const { ref: smsIcon, inView: myElementsms } = useInView({
    root: null,
    triggerOnce: true,
  });
  const { ref: edditIcon, inView: myElementIcon } = useInView({
    root: null,
    triggerOnce: true,
  });

  return (
    <div>
      <Header />
      <About />
      <span
        style={{
          margin: "58px 0 16px",
          textAlign: "center",
          display: "block",
          fontSize: 16,
        }}
      >
        Three steps. Three minutes.
      </span>
      <h2 style={{ fontSize: 50, textAlign: "center", margin: 0 }}>
        Everything should be this easy.
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "45px 66px",
          gap: 160,
        }}
      >
        <span
          ref={messageIcon}
          className={myElement ? appCss.messageStyle : ""}
        >
          <Connecting img={message} title={"Answer questions"} />
        </span>
        <span ref={smsIcon} className={myElementsms ? appCss.smsStyle : ""}>
          <Connecting img={sms} title={"Select a quote"} />
        </span>
        <span ref={edditIcon} className={edditIcon ? appCss.edditStyle : ""}>
          <Connecting img={eddit} title={"Get registered"} />
        </span>
      </div>
      <div
        style={{
          margin: "132px 32px 40px 32px",
        }}
      >
        <span style={{ display: "block", fontSize: 16 }}>
          Best Project of the Years
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontSize: 50, margin: 0 }}>Our recent projects</h2>
          <div style={{ display: "flex", marginRight: 30 }}>
            <button
              onClick={() => {
                if (btnClick <= 1) setBtnClick(btnClick);
                else setBtnClick(btnClick - 1);
              }}
              style={{
                cursor: btnClick === 1 ? "not-allowed" : "pointer",

                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                backgroundColor: "white",
                border: "none",
                width: 30,
                height: 30,
              }}
            >
              &#11164;
            </button>
            <button
              onClick={() => setBtnClick(btnClick + 1)}
              disabled={btnClick >= projectsComponent.length ? true : false}
              style={{
                cursor:
                  btnClick >= projectsComponent.length
                    ? "not-allowed"
                    : "pointer",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                backgroundColor: "black",
                border: "none",
                width: 30,
                height: 30,
              }}
            >
              &#11166;
            </button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: 30, paddingBottom: 0 }}>
        {/* {Math.trunc((btnClick * 100) / projectsComponent.length) + " " + "%"} */}
        {btnClick +' of '+ projectsComponent.length +' projects'}
        <div
          style={{
            width:
              Math.trunc((btnClick * 100) / projectsComponent.length) + "%",
            height: 5,
            backgroundColor: "black",
            marginTop:'10px'
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          margin: "10px 30px 227px",
        }}
      >
        {projectsComponent.slice(0, btnClick).map((elem) => elem)}
      </div>
    </div>
  );
}
