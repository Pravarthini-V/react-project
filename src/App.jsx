import RegForm from './components/RegForm.jsx';
import './App.css';

function App() {
  return (
    <div>
      <p>Registration Form</p>
      <RegForm regform={{ name: "prava", email: "prava@gmail.com" }} />
    </div>
  );
}

export default App;