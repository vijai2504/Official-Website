import React from 'react';

class Test extends React.Component {
  render() {
    return (
      <>
         <section id="testimonial" class="section-padding">
          <div class="container">
            <div class="row">
              <div class="header-section text-center">
                <h2 class="white">See What Our Customer Are Saying?</h2>
                <p class="white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nesciunt vitae,<br/> maiores, magni dolorum aliquam.</p>
                <hr class="bottom-line bg-white"/>
              </div>
              <div class="col-md-6 col-sm-6">
                <div class="text-comment">
                  <p class="text-par">"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, nec sagittis sem"</p>
                  <p class="text-name">Abraham Doe - Creative Dırector</p>
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div class="text-comment">
                  <p class="text-par">"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, nec sagittis sem"</p>
                  <p class="text-name">Abraham Doe - Creative Dırector</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Test;
