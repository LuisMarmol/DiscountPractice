import './App.css'
import { Instructions } from './components/Instructions'
import { useState } from 'react';

function App() { 
  const [discount, setDiscount] = useState(100);

  /* function setDiscount() {
    setDiscount(75);
  }; */

  const applyDiscount = () => {
    discountClick(75);
  };

  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>      

      <div>
            <p data-testid="price">${discount}</p>
            <button onClick={applyDiscount}>Apply Discount</button>
        </div>
    </>
  )
}

export default App