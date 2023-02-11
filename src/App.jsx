import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import Form from './components/Form'
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card />
      <Form />
      <Footer />
    </div>
  )
}

export default App;
