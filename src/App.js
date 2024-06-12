import logo from './logo.svg';
import './App.css';
import { AddPatient } from './components/AddPatient';
import { ViewAll } from './components/ViewAll';
import { SearchPatient } from './components/SearchPatient';

function App() {
  return (
    <div className="App">
      <AddPatient></AddPatient>
      <SearchPatient></SearchPatient>
      <ViewAll></ViewAll>
    </div>
  );
}

export default App;
