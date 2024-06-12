import logo from './logo.svg';
import './App.css';
import { AddPatient } from './components/AddPatient';
import { ViewAll } from './components/ViewAll';

function App() {
  return (
    <div className="App">
      <AddPatient></AddPatient>
      <ViewAll></ViewAll>
    </div>
  );
}

export default App;
