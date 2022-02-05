import './App.css';

import Navbar from './components/Navbar';
import TestForm from './components/TestForm';

let name = 'Khalid'
function App() {
  return (
    <>
    
    <Navbar title="Help the Text" AboutText="About"/>
    <TestForm heading = "Hello, I am here to help you! Enter to Analyze your Text"/>
  
    </>
    
  );
}

export default App;
