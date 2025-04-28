import "./main.css";

export default function Main() {
  return (
    <div id="div1">
      <h1 id="h">
        نمكّن الجميع من بدء وتطوير وتوسيع أعمال التجارة الإلكترونية في الشرق
        الأوسط وأفريقيا وخارجهما
      </h1>
      <div id="divCircleServices">
        <img src="/svg/storage.svg" alt="Service Icon" id="circleServices"/>
        <img src="/svg/call-center.svg" alt="Service Icon" id="circleServices"/>
        <img src="/svg/Money.svg" alt="Service Icon" id="circleServices"/>
        <img src="/svg/Packaging.svg" alt="Service Icon" id="circleServices"/>
        <img src="/svg/shipping.svg" alt="Service Icon" id="circleServices"/>
        <img src="/svg/world.svg" alt="Service Icon" id="circleServices"/>
      </div>
      <div id="divBtn">
        <button id="btn">ابدأ الآن</button>
      </div>
    </div>
  );
}
