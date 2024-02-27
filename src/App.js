import './App.css';
import contextProvider from './Components/Login_Signup/MyContext';
import LoginSignup from './Components/Login_Signup/LoginSignup';

function App() {
  return (
    <contextProvider>
      <LoginSignup/>
    </contextProvider>
  );
}

export default App;
