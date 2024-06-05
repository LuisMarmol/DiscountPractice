import './App.css'
import { Instructions } from './components/Instructions'
import { useState } from 'react';

function App() { 
  const [discount, setDiscount] = useState(100);

  function handleDiscount() {
    setDiscount(75);
  }

  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>      

      <div>
            <p data-testid="price">${discount}</p>
            <button onClick={handleDiscount}>Apply Discount</button>
        </div>
    </>
  )
}

export default App