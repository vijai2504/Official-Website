import React from 'react';

class Cta extends React.Component {
  render() {
    return (
      <>
          <section id="cta-2">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="text-center">Subscribe Now</h2>
                <p class="cta-2-txt">Sign up for our free weekly software design courses, we’ll send them right to your inbox.</p>
                <div class="cta-2-form text-center">
                  <form action="#" method="post" id="workshop-newsletter-form">
                    <input name="" placeholder="Enter Your Email Address" type="email"/>
                    <input class="cta-2-form-submit-btn" value="Subscribe" type="submit"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Cta;
