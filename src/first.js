import { CircleFlag } from "react-circle-flags";
import "./first.css";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav>
      <div className="leftSection">
        <div className="burger" onClick={handleToggle}>
          <div className="theDiv"></div>
          <div className="theDiv2"></div>
          <div className="theDiv"></div>
        </div>

        <div className={toggle ? "dropDownMenu" : "dropDownMenu hide"}>
          <p>الرئيسية</p>
          <p>الخدمات</p>
          <p>كيف تعمل منصتنا؟</p>
          <p>الأسئلة الشائعة</p>
        </div>

        <button className="btnGet">Get Started</button>
        <CircleFlag countryCode="sa" height="30" />
        <CircleFlag countryCode="gb" height="30" />
      </div>

      <div className="middleSection">
        <p>الرئيسية</p>
        <p>الخدمات</p>
        <p>كيف تعمل منصتنا؟</p>
        <p>الأسئلة الشائعة</p>
      </div>

      <div className="rightSection">
        <img src="/images/pic1.jpg" alt="COD Network Logo" />
      </div>
    </nav>
  );
}
