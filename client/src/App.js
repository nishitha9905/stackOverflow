import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router> 
       <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
