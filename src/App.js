import './App.css';
import About from '../src/Pages/About/About';
import Equipment from './Pages/Equipment/Equipment';
import Product from './Pages/Product/Product';
import Coffee from './Pages/Coffee/Coffee';
import Partners from './Pages/Partners/Partners';
import Questions from './Pages/Questions/Questions';


function App() {
  return (
    <div className='container'>
      <About/>
      <Equipment/>
      <Product/>
      <Coffee/>
      <Partners/>
      <Questions/>
    </div>
  );
}

export default App;
