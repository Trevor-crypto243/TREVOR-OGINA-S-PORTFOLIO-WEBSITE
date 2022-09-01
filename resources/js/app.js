import './bootstrap';
import React from 'react';
import Contact from './components/contact'
import Home from './components/home'
import About from './components/About'
import Projects from './components/projects'
import './styles/styles.css'

function App(){        
    function clickHandler(){     
     document.body.classList.toggle("light-mode");
    //  document.querySelector(".active").classList.remove("active");

    }

    function controller() { 
        [...document.querySelectorAll(".control")].forEach(button => {
            button.addEventListener("click", function() {
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
                document.querySelector(".active").classList.remove("active");
                document.getElementById(button.dataset.id).classList.add("active");
            })
        });           

    }
  
    return(
        <div>            
            <Home />
            <About />
            <Projects />
            <Contact />
            <div className="controls">               
                    <div onClick={controller} className="control active-btn"  data-id="home" >
                        <i className="fas fa-home" onClick={controller}></i>
                        {/* <button onClick={controller}>home</button> */}
                    </div>
                    <div  onClick={controller} className="control" data-id="about">
                        <i className="fas fa-user"></i>                        
                    </div>
                    <div  onClick={controller} className="control" data-id="portfolio">
                        <i className="fas fa-briefcase"></i>                       
                    </div>       
                    <div  onClick={controller} className="control" data-id="contact">
                        <i className="fas fa-envelope-open"></i>                   
                    </div>
            </div>
                <div onClick={clickHandler} className="theme-btn">
                    <i  className="fas fa-adjust"></i>                    
                </div>
        </div>
    )
}
export default App;

