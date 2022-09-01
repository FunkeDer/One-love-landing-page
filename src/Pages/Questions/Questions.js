import React from 'react';
import '../Questions/Questions.css';

const Questions = () => {
  return (
    <div>
    <div className="questions-page">
      <div className="container">
      <div className="question_block">
        <div className="small__question__block">
          <h1 className="question_topic">ЗАЛИШИЛИСЯ ПИТАННЯ?</h1>
          <p className="question__paragraph">Ми зв'яжемось з вами та відповімо на усі цікавинки.</p>
          <div className="input__block">
            <input className='input__info' placeholder="Ім'я"type="text" name="name"  />

            <input type="" name="number" placeholder="Номер телефону"  className='input__info'/>

            <button className='question_button'><h3 className='btn_text'>ПИТАННЯ Є!</h3></button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Questions;