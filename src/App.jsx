import { Navbar, Home, About, Speakers, Register, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Speakers />
      <Register />
      <Footer />
    </div>
  );
}

export default App;