import './App.css'
import About from './Components/About';
import FormComponent from './Components/FormComponent';
import NavTest from './Components/NavTest';
// import About, { Rahma } from './Components/About';
// import Hadir from './Components/About';
import taswira from './Dame.jpg'
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <NavTest/>
      <FormComponent/>
      <h1>Workshop React JS</h1>
      <h2>2 eme</h2>
      <About/>
      {/* <About/>
      <Rahma/> */}
      {/* <Hadir/> */}

      <img src='/Joker.jpg' alt='Not Found'/>
      <img src={taswira} alt='Not Found'/>
      <Button variant="success">Success</Button>
    </div>    
  )
}

export default App;
