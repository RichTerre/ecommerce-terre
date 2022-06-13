//import logo from './logo.svg';/
//import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/NavBar/ItemListContainer/index";
import ItemDetailContainer from './Components/NavBar/ItemDetailContainer';


function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>  
  
  );
}

export default App;
