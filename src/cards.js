import "./cards.css";
import { useEffect } from "react";

export default function Cards() {
  useEffect(() => {
    const revealOnScroll = () => {
      const elements = document.querySelectorAll(".card");

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Vérifier au chargement

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="CardsDiv">
      <div>
        <h1>انضم إلينا اليوم</h1>
        <p id="p2">
          دعنا نقدم لك يد العون للوصول إلى مبتغاك، إختر النموذج الذي يناسبك
          أسفله وابدأ رحلة مليئة بالنجاح والتفوق
        </p>
      </div>

      <div id="firstCard">
        <div className="container">
          <div className="card from-left">
            <img src="/images/pic1.jpg" alt="logo" />
            <h3 className="affiliate">AFFILIATE</h3>
            <p id="p3">
              قم بالترويج لأحدث المنتجات المدرجة على منصتنا واحصل على عمولات
              هامة
            </p>
            <button className="btn">تعلم المزيد</button>
          </div>

          <div className="card from-right">
            <img src="/images/pic1.jpg" alt="logo" />
            <h3 className="seller">SELLER</h3>
            <p id="p3">
              افتح أسواقاً جديدة لمنتجاتك في الشرق الأوسط وشمال إفريقيا والعديد
              من المناطق عن طريق الاستفادة من خدماتنا
            </p>
            <button className="btn">ابدأ الآن</button>
          </div>
        </div>
      </div>

      <div>
        <h3>
          هل ترغب في الحصول على مزيد من المعلومات؟ <a href="#">تواصل معنا.</a>
        </h3>
      </div>
    </div>
  );
}
