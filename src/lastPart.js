// Footer.jsx
import React from "react";
import "./lastPart.css";

const Footers = () => {
  return (
    <>
      <div className="cta-section">
        <div className="cta-box">
          <h2>هل أنت جاهز للبدء؟</h2>
          <p>
            تواصل الآن مع ممثل خدمة العملاء لدينا للحصول على مزيد من التفاصيل.
            اطلب مزيدًا من المعلومات حول خدماتنا لتلبية احتياجات عملك.
          </p>
          <button>انضم الآن</button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>الشركة</h3>
            <ul>
              <li>
                <a href="#">من نحن</a>
              </li>
              <li>
                <a href="#">الرؤية والرسالة</a>
              </li>
              <li>
                <a href="#">الأسئلة الشائعة</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>الخدمات</h3>
            <ul>
              <li>
                <a href="#">التوصيل السريع</a>
              </li>
              <li>
                <a href="#">خدمات التخزين</a>
              </li>
              <li>
                <a href="#">خدمات الدفع عند الاستلام</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>الدعم</h3>
            <ul>
              <li>
                <a href="#">الدعم الفني</a>
              </li>
              <li>
                <a href="#">الشكاوى والاقتراحات</a>
              </li>
              <li>
                <a href="#">الشروط والأحكام</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>IBRAND</h3>
            <p>شبكة التوصيل الرائدة في المنطقة بخدمات متكاملة وسريعة</p>
            <div className="social-icons">
              <a href="#">
                <img src="/svg/facebook-icon.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img src="/svg/x-icon.svg" alt="Twitter" />
              </a>
              <a href="#">
                <img src="/svg/instagram-icon.svg" alt="Instagram" />
              </a>
              <a href="#">
                <img src="/svg/linkedin-icon.svg" alt="LinkedIn" />
              </a>
            </div>
            <p>IBRAND 2025 ©</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footers;
