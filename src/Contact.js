const Contact = () => {
    return ( 
    <div>
         <section class="container contact" id="contact">
            <div class="contact-container">
                <div class="main-title">
                    <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                </div>
                <div class="contact-content-con">
                    <div class="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                           These are my official contact details
                        </p>
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    : Nairobi, Kenya
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: otitrevor450@gmail.com</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>: Kisii University, Main Campus</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>: 0795781794</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>: French, English, Dholuo</span>
                                </p>
                            </div>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="https://www.facebook.com/trevor.oti.5" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/otitrevor/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://github.com/Trevor-crypto243" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCRS76RPIOG7GmsuZ8vQmV9w/" target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/trevor-ogina-150937213/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="right-contact">
                      <form class="contact-form">
                        <div class="input-control i-c-2">
                            <input type="text" id="name" required placeholder="YOUR NAME"/>
                            <input type="email" id="to" required placeholder="YOUR EMAIL"/>
                        </div>
                        <div class="input-control">
                            <input type="text" id="subject" required placeholder="ENTER SUBJECT"/>
                        </div>
                        <div class="input-control">
                            <textarea id="body" cols="15" rows="8" placeholder="Message Here..."></textarea>
                        </div>
                        <div class="submit-btn">
                            {/* <button id="send-email" class="main-btn">Send Email</button> */}
                            <a href="#" class="main-btn">
                                    <span class="btn-text">Download CV</span>
                                    <span class="btn-icon"><i class="fas fa-download"></i></span>
                                </a>
                        </div>
                     </form>                        
                    </div>
                </div>
            </div>
        </section>

    </div> 
    );
}
 
export default Contact;
