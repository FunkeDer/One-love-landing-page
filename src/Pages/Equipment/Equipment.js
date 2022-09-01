import React from 'react';
import '../Equipment/Equipment.css';

const Equipment = () => {
  return (
    <div>
      <div className="equipment-page">
        <div className="container">
        <div className="equipment_block">
          <div className="small__equipment__block">
            <img src="https://loring.com/wp-content/uploads/2018/09/loring-s35-kestrel.png" alt="Loring s35" className='img__loring' />
            <div className="small__text__equipment">
                <h1 className="loring_s35">LORING S35 KESTEL</h1>
                <h1 className="loring__info">ЕКСКЛЮЗИВНЕ ОБЛАДНАННЯ <br/>В УКРАЇНІ.</h1>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Equipment;
