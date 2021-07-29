import React, { useState } from 'react';
import Nav from './components/nav';
import About from './components/about';
import Footer from './components/footer';
import Project from './components/project';
import ContactForm from './components/contact';


function App() {
  const [categories] = useState([
    { name: "Projects", description: "web development projects" },
    { name: "Resume", description: "Resume" }

  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>

      <main>
        <div>
          <About
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}></About>
          <Project currentCategory={currentCategory}></Project>
          <ContactForm currentCategory={currentCategory}></ContactForm>
          <Footer></Footer>
        </div>
      </main>

    </div>
  );
}

export default App;