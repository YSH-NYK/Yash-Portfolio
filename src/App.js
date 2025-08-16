import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Journey from './components/Journey';
import Contentcreation from './components/Contentcreation';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <section id = "Navbar"><Navbar /></section>
    <section id = "Aboutme"><Aboutme /></section>
     <section id = "Skills"><Skills /></section>
     <section id = "Projects"><Projects /></section>
     <section id = "Contentcreation"><Contentcreation /></section>
     <section id = "Journey"><Journey /></section>
     <section id = "Footer"><Footer /></section>
    </>
  );
}

export default App;