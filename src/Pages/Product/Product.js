import React from 'react';
import '../Product/Product.css';
import Mask__Group_2 from '../Product/Mask__Group_2.png';


const Product = () => {
  return (
    <div className='product_page'>
        <div className="container">
        <div className="product_block">
          <div className="small__product__block">
            <div className="text__block__product">
                <h1 className="product__topic">ЯКІСНИЙ ПРОДУКТ - НАШ ДНК</h1>
              <p className="small__paragraph_product">Ми самостійно обираємо зелене зерно з країн-постачальників. Семирічний досвід ми поєднуємо з досвідченим персоналом.  Завдяки цьому, кожна пачка кави – передбачувано смачна.</p>
                <br />
                <p className="small__paragraph_product">Наш асортимент – це поєднання як і базових позицій, так і експериментальних лотів.</p>
            </div>
            <div className="img__block_coffee_2">
              <img src={Mask__Group_2} alt="coffee cells" className='coffee__cells_2'/>
           </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Product;
