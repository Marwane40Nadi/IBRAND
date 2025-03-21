import "./main.css";

export default function Main() {
  return (
    <div id="div1">
      <h1 id="h">
        نمكّن الجميع من بدء وتطوير وتوسيع أعمال التجارة الإلكترونية في الشرق
        الأوسط وأفريقيا وخارجهما
      </h1>
      <div id="divCircleServices">
        {[...Array(6)].map((_, index) => (
          <img key={index} src="/images/globe.png" alt="Service Icon" id="circleServices" />
        ))}
      </div>
      <div id="divBtn">
        <button id="btn">ابدأ الآن</button>
      </div>
    </div>
  );
}
