const Home = () => {
    return ( 
        <div>
        <header class="container header active" id="home">
            <div class="header-content">
                <div class="left-header">
                    <div class="h-shape"></div>
                    <div class="image">
                        <img src="img/1.jpg" alt=""/>
                    </div>
                </div>
                <div class="right-header">
                    <h1 class="name">
                        Hi, I'm <span>Trevor Ogina.</span>
                        A Software Engineer.
                    </h1>
                    <p>
                    I am passionate about technology ,  can develop both native and hybrid desktop and mobile applications. 
                    can work well with unix based systems including system administration , competent in computer networking and distributed systems
                    </p>
                    <div class="btn-con">
                        <a href="" class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
            </div>
         </header>
        </div>
     );
}
 
export default Home;