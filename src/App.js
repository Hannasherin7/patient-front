import logo from './logo.svg';
import './App.css';
import { AddPatient } from './components/AddPatient';
import { ViewAll } from './components/ViewAll';
import { SearchPatient } from './components/SearchPatient';
import { DeletePatient } from './components/DeletePatient';

function App() {
  return (
    <div className="App">
      <AddPatient></AddPatient>
      <SearchPatient></SearchPatient>
      <DeletePatient></DeletePatient>
      <ViewAll></ViewAll>
    </div>
  );
}

export default App;
