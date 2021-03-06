import React from "react";
import "./About.css";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-header">
            <h2>ניר טולדנו &mdash; מעסה מקצועי</h2>
            <p>
              מעסה רפואי, בשיטת עיסוי רקמות עמוק וטריגר פוינט. את הכשרתי כמעסה
              קיבלתי מטעם מכללת וינגייט בשנת 2017. כיום אני אוסטאופט, מטפל בשיטת
              קינזיו טייפ (kinesio tape), מאמן כושר, חובש ומדריך עזרה ראשונה
            </p>
          </div>

          <div className="about-text">
            <div className="about-text-1">
              <i className="far fa-heart"></i>
              <h3>שיטת הטיפול</h3>
              <p>
                בסיס שיטת הטיפול שלי עוסקת בעיסוי רקמות עמוק וטריגר פוינט. אני
                מביא איתי את כל עולמות הידע שצברתי ועדיין צובר במהלך השנים.
                בעזרת לימודי האוסטיאופתיה למדתי לאבחן פתולוגיות ומצבים רפואיים.
                בעזרת לימודי כמאמן כושר אני מביא את הפאן השיקומי בטיפול דרך
                תרגילי חיזוק ומתיחות ביתיים. בתחילת הטיפול מבוצעות מספר בדיקות
                תנועה המבוססות על תלונת המטופל.
              </p>
            </div>
            <div className="about-text-2">
              <i className="fas fa-infinity"></i>
              <h3>אני מאמין</h3>
              <p>
                אני מאמין בטיפול הוליסטי, המשלב את כל הגוף. טיפול רק באזור הכאב
                בעיני שווה ל"חצי עבודה", ולרוב הבעיה נפתרת מהטיפול ההוליסטי בגוף
                ולא רק בבעיה עצמה. המטרה שלי בטיפול היא להביא את הגוף לאיזון
                ולנחת אליו הוא כמהה, בכדי להביא את הגוף לטיפול עצמי. עם הידע
                הנכון, גוף המטופל מצביע על מקור הבעיה ולא על הסימפטומים
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
