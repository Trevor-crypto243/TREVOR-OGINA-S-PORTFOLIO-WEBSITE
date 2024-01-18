const Portfolio = () => {
    return ( 
    <div>
         <section class="container" id="portfolio">
            <div class="main-title">
                <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
            </div>
            <p class="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div class="portfolios">
            <div class="portfolio-item">
                    <div class="image">
                        <img src="./img/beyondvas.png" alt="cashmania" />
                    </div>
                    <div className="card shadow hover-items ">
                        <h3 style={{color:'black'}}><strong>Beyond Vas</strong></h3>
                        <h5 className="text-center mb-5 text-dark" style={{color:'black'}}>PRSP WEBSITE, SMS,SHORTCODES, USSD</h5>
                        <p style={{color:'black', textAlign:"center", fontSize:".8em"}} className="text-center">Beyond VAS is a leading innovations and technology company
                            providing turn-key mobility solutions and platforms in the
                            education, telecom, finance, government & entertainment
                            sectors</p>
                        <div class="icons">
                            <a href="https://beyondvas.co/" target="blank" style={{color:"gray", marginTop:'.5cm'}}>
                                <strong>View</strong>
                            </a>                          
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src="./img/cashmania.png" alt="cashmania" style={{opacity:".5"}}/>
                    </div>
                    <div className="hover-items p-3">
                        <h3 style={{color:'black'}}><strong>Cash Mania</strong></h3>
                        <p className="text-center p-2">Fast Games Website, smartsoft gaming</p>
                        <div class="icons">
                            <a href="https://cashmania.co.ke/" target="blank" style={{color:"blue", marginTop:'.5cm'}}>
                                Click to View Project
                            </a>                          
                        </div>
                    </div>
                </div>
            
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/Logo1.png" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src="./img/Logo1.png" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/Logo1.png" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/Logo1.png" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/Logo1.png" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>                
            </div>
        </section>

    </div> 
    );
}
 
export default Portfolio;