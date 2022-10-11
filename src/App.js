import './assets/css/App.css';
import Header from './components/layout-components/Header/Header';
import Footer from './components/layout-components/Footer/Footer';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <section className="introduction">
            <h1>Hi, I'm <span className="name">David</span></h1>
            <p> ceci est un texte... rien de plus normal</p>
            <figure className="avatar">
              <img src="css/img/avatar/avatar.svg" alt="avatar"/>
            </figure>  
          <figure className="desktop">
            <img src="css/img/logo/desktop.svg" alt="desktop" />
          </figure>
        </section>

        <section className="presentation">
          <div className="description pink-bg">
            <h2>Hi, I’m <span id="name">David</span>. Nice to meet you.</h2>
            <p>Since the beginning of my journey as a freelance developer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.</p>
            <button className="btn">Let's make contact</button>
          </div>
          <Skill />
        </section>

        <section id="projects">
          <Project />
        </section>      
      </main>
      <Footer />
    </div>
)};

export default App;
