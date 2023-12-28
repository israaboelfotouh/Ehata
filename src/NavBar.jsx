import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav>
        <div className="Navebar container">
          <div className="main">
            <Link className="link" to="/yourservices">
              اطلب خدماتك
            </Link>
          </div>

          <ul>
            <li>
              <Link className="link" to="/">
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link className="link" to="/services">
                خدماتنا
              </Link>
            </li>

            <li>
              <Link className="link" to="/about">
                نبذة عنا
              </Link>
            </li>
            <li>
              <Link className="link" to="/contacts">
                تواصل معنا
              </Link>
            </li>
            <li>توظيف </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
