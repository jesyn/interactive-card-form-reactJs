import { useState } from 'react';
import './App.css'
//import Footer from './components/Footer';
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Form />
      {/* <Footer /> */}
    </div>
  )
}

export default App;
