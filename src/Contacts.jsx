import React from "react";
import aboutlogo from "../src/img/aboutlogo.png";
import line from "../src/img/line.png";
import email from "../src/img/email.png";
import telephone from "../src/img/telephone.png";
import phone from "../src/img/phone.png";
import map from "../src/img/map.png";
import ordericone from "../src/img/ordericone.png";
import instagram from "../src/img/instagram.png";
import tiktok from "../src/img/tiktok.png";
import whatsapp from "../src/img/whatsapp.png";
import youtube from "../src/img/youtube.png";
import Twitter from "../src/img/Twitter.png";
import snapchat from "../src/img/snapchat.png";
import contactmap from "../src/img/contactmap.png";
export default function Contacts() {
  return (
    <>
      <section className="contact">
        <div className="container about-contant">
          <div></div>
          <div>
            {" "}
            <img src={aboutlogo} alt="aboutlogo" />
            <h1> اتصل بنا</h1>
          </div>
        </div>
      </section>

      <section className="contacts-us">
        <div className="container ">
          <h1>نحن هنا لخدمتك</h1>
          <div className="contact-div ">
            <div>
              <div className="contact-info">
                <div className="ourContact">
                  <p>info@ehata.co</p>
                  <img src={line} alt="line" />
                  <img src={email} alt="email" />
                </div>
              </div>
            </div>
            <div>
              <div className="contact-info">
                <div className="ourContact">
                  <p>الرياض – حي النخيل – شارع الأمير عبدالعزيز بن ثنيان</p>
                  <img src={line} alt="line" />
                  <img src={map} alt="map" />
                </div>
              </div>
            </div>
            <div>
              <div className="contact-info">
                <div className="ourContact">
                  <p>0112394445</p>
                  <img src={line} alt="line" />
                  <img src={telephone} alt="telephone" />
                </div>
              </div>
            </div>
            <div>
              <div className="contact-info">
                <div className="ourContact">
                  <p>0553220907 - 0553220271</p>
                  <img src={line} alt="line" />
                  <img src={phone} alt="phone" />
                </div>
              </div>
            </div>
          </div>

          <div className="social">
            <div className="Social-div">
              <img src={tiktok} alt="tiktok" />
            </div>
            <div className="Social-div">
              <img src={whatsapp} alt="whatsapp" />
            </div>
            <div className="Social-div">
              <img src={snapchat} alt="snapchat" />
            </div>
            <div className="Social-div">
              <img src={instagram} alt="instagram" />
            </div>
            <div className="Social-div">
              <img src={Twitter} alt="Twitter" />
            </div>
            <div className="Social-div">
              <img src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
      </section>

      <section className="OrderServices">
        <div className="services">
          <div className="order">
            <img src={ordericone} alt="ordericone" />
            <h1>اطلب خدمتك الان</h1>
          </div>
        </div>
        <img className="contactmap" src={contactmap} alt="contactmap" />
      </section>
    </>
  );
}
