import React from 'react';
import '../About/About.css';
import Owner from '../About/Owner.png';
import Mask__Group_1 from '../About/Mask__Group_1.png';

const About = () => {
  return (
  <div className="about-container">
   <div className='page-about'>
        <div className="head__text_w1366">
        <div className="head_text">
          <h1 className="head__text__1">КАВА ДОДОМУ, В ОФІС  ЧИ В КАВ'ЯРНЮ?</h1>
          <h1 className="head__text__2">ЗАПРОСТО!</h1>
        </div>
        </div>
        <div className="about_block">
          <div className="small__about__block">
          <img src={Owner} alt="owner" className='img__owner' />

            <div className="small__text__about">
              <p className="small_paragraph">
                ONE LOVE - це про любов. Ми існуємо для того, щоб ви раз і назавжди закохалися в якісну, чесну каву, обрану для вас з кращих фермерських плантацій.
              </p>
              <p className="small_paragraph">
                З 2014 року команда ONE LOVE багато працює над відбором зелених зерен, правильним їх транспортуванням, зберіганням, обсмажкою та пакуванням, аби вдома, офісі чи в кав’ярні ви насолоджувались кавою, на яку справді заслуговуєте.
              </p>
            </div>
          </div>

        </div>

        <div className="proposal_block">
          <div className="small__proposal__block">

          <div className="text__proposal_block">
            <h1 className="proposal__header">ЩО МИ ПРОПОНУЄМО?</h1>
            <p className="proposal_paragraph">Свіжообсмажена кава класу спешелті. </p>
            <h1 className="proposal__header">ЩО ТАКЕ СПЕШЕЛТІ?</h1>
            <p className="proposal_paragraph">Це 10-15% від усього урожаю зерна сорту арабіка. Таке звання кава отримує на етапі відбору зеленого зерна. Її буде перевірено на штучні та природні дефекти, наявність нестиглих ягід, їх відповідність одному розміру та іншим стандартам. Ви можете бути впевнені в тому, що кожен пакунок – це виключно високоякісна кава. </p>
          </div>  
          <div className="img__block_coffee">
            <img src={Mask__Group_1} alt="coffee cells" className='coffee_cells'/>
           </div>
        </div>
        </div>
      </div>
   </div>
  )
}

export default About;