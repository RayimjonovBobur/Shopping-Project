import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./about.scss";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="about">
          <div>
            <h3>Biz haqimizda</h3>
            <p>
              Onlyan-savdo do'koniga xush kelibsiz. Bu yerda siz barcha
              transport ehtiyot qisimlarini topishingiz mumkin.5 yildan ortiq
              vaqt davomida biz mijozlarimiz uchun to'g'ri uskuna va gadjetlarni
              tanlash va maslahat berish bilan shug'ullanamiz.Bozorda mavjud
              bo'lganimiz davomida biz shaharlar aro yetkazib berishni
              optimallashtirishga muvaffaq bo'ldik,shuning uchun siz transport
              uskunalarani uch kun ichida olasiz, agar sizga shahar ichida
              yetkazib berish kerak bo'lsa,biz maxsulotni 2 soat ichida yetkazib
              beramiz. Mijozlarimizning 90% doimiy mijozlarga aylanadi, chunki
              biz bir yil kafolat beramiz.Shuningdek, biz o'z Servis (xizmat
              ko'rsatish) markazimizni ochdik. Biz haftada 7 kun 10:00 dan 20:00
              gacha ishlaymiz.Bizga tashrif buyuring, biz har doim sizga mos
              gadjetni topishga yordam beramiz.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
