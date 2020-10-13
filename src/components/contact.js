import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <>
         <section id="contact" class="section-padding">
            <div class="container">
              <div class="row">
                <div class="header-section text-center">
                  <h2>Contact Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nesciunt vitae,<br/> maiores, magni dolorum aliquam.</p>
                  <hr class="bottom-line"/>
                </div>
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" class="contactForm">
                  <div class="col-md-6 col-sm-6 col-xs-12 left">
                    <div class="form-group">
                      <input type="text" name="name" class="form-control form" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div class="validation"></div>
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-12 right">
                    <div class="form-group">
                      <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div class="validation"></div>
                    </div>
                  </div>

                  <div class="col-xs-12">
                   
                    <button type="submit" id="submit" name="submit" class="form contact-form-button light-form-button oswald light">SEND EMAIL</button>
                  </div>
                </form>

              </div>
            </div>
          </section>
      </>
    );
  }
}

export default Contact;
