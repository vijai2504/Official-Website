import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <>
         <footer id="footer" class="footer">
            <div class="container text-center">

              <h3>Start Your Free Trial Now!</h3>

              <form class="mc-trial row">
                <div class="form-group col-md-3 col-md-offset-2 col-sm-4">
                  <div class=" controls">
                    <input name="name" placeholder="Enter Your Name" class="form-control" type="text"/>
                  </div>
                </div>
                
                <div class="form-group col-md-3 col-sm-4">
                  <div class=" controls">
                    <input name="EMAIL" placeholder="Enter Your email" class="form-control" type="email"/>
                  </div>
                </div>
               
                <div class="col-md-2 col-sm-4">
                  <p>
                    <button name="submit" type="submit" class="btn btn-block btn-submit">
                    Submit <i class="fa fa-arrow-right"></i></button>
                  </p>
                </div>
              </form>
              
              <ul class="social-links">
                <li><a href="#link"><i class="fa fa-twitter fa-fw"></i></a></li>
                <li><a href="#link"><i class="fa fa-facebook fa-fw"></i></a></li>
                <li><a href="#link"><i class="fa fa-google-plus fa-fw"></i></a></li>
                <li><a href="#link"><i class="fa fa-dribbble fa-fw"></i></a></li>
                <li><a href="#link"><i class="fa fa-linkedin fa-fw"></i></a></li>
              </ul>
              ©2016 Mentor Theme. All rights reserved
              <div class="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade.com</a>
              </div>
            </div>
          </footer>
      </>
    );
  }
}

export default Footer;
