import { CircleFlag } from "react-circle-flags";
import "./first.css";

export default function Navbar() {
  return (
    <nav>
      <div className="languages">
        <button className="btnGet">Get Started</button>
        <CircleFlag countryCode="sa" height="30" />
        <CircleFlag countryCode="gb" height="30" />
      </div>

      <div className="services">
        <p>الرئيسية</p>
        <p>الخدمات</p>
        <p>كيف تعمل منصتنا؟</p>
        <p>الأسئلة الشائعة</p>
      </div>

      <div className="img">
        <img src="/images/pic1.jpg" alt="COD Network Logo" />
      </div>
    </nav>
  );
}
