import React from "react";
import "./Home.css";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <>
      <div id="Home" className="home">
        <div className="home-flex">
          <div className="left-content">
            {/* data-aos = "fade-down" data-aos-delay= "2000" */}
            <p>Hello, My name is</p>
            <h1>Jahid Hasan</h1>
            <h2>
              And I'm a <span className="typing"></span>
            </h2>
            <a
              href="https://drive.google.com/file/d/1GUcUB-QSnvXWPcRKtNhjiHVBs2a-2HRl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="right-content">
            <div className="right-img">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
