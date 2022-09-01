import React from 'react';
import '../Partners/Partners.css';
import Group_1 from '../Partners/Group_1.png';
import Group_2 from '../Partners/Group_2.png';
import Group_3 from '../Partners/Group_3.png';
import Group_4 from '../Partners/Group_4.png';
import Group_5 from '../Partners/Group_5.png';
import Group_6 from '../Partners/Group_6.png';

const Partners = () => {
  return (
    <div className='partners_page'>
        <div className="container">
          <div className="small_partners_page">
            <div className="topic__partners">
                <h1 className="partners_header_text">НАШІ ПАРТНЕРИ</h1>
                <p className="head_paragraph">Нас обирають найкращі. Нам довіряють найкращі.</p>
            </div>
            <div className="partners__logo">
              <div className="partners_logo_1">
                <img src={Group_1} alt="Partners" className='img_partners_1'/>
                <img src={Group_2} alt="Partners" className='img_partners_2'/>
                <img src={Group_3} alt="Partners" className='img_partners_3'/>
              </div>
              <div className="partners_logo_2">
                <img src={Group_4} alt="Partners" className='img_partners_4'/>
                <img src={Group_5} alt="Partners" className='img_partners_5'/>
                <img src={Group_6} alt="Partners" className='img_partners_6'/>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Partners;
