import React from "react";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import eddit from "./component/Connecting/edit-2.png";
import message from "./component/Connecting/messages.png";
import sms from "./component/Connecting/sms-tracking.png";

import Connecting from "./component/Connecting/Connecting";
export default function App() {
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
        <Connecting img={message} title={"Answer questions"} />
        <Connecting img={sms} title={"Select a quote"} />
        <Connecting img={eddit} title={"Get registered"} />
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
          <div style={{ display: "flex" }}>
            <button
              style={{
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                backgroundColor: "white",
                border: "none",
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
            >
              &#11164;
            </button>
            <button
              style={{
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                backgroundColor: "black",
                border: "none",
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
            >
              &#11166;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
