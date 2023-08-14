import './App.css';

import Feature from "./components/Feature";
import Footer from './components/Footer';
import Header from "./components/Header";
import PromoDeal from './components/PromoDeal';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <PromoDeal />
      <Footer />
    </div>
  );
}

export default App;
