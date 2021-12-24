import './App.css';
import Companies from './components/Companies';
import Discover from './components/Discover';
import DoMore from './components/DoMore';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import How from './components/How';
import Services from './components/Services';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Discover />
      <How />
      <DoMore />
      <Companies />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
