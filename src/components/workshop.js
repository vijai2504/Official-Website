import React from 'react';

class Workshop extends React.Component {
  render() {
    return (
      <>
          <section id="work-shop" class="section-padding">
          <div class="container">
            <div class="row">
              <div class="header-section text-center">
                <h2>Upcoming Workshop</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nesciunt vitae,<br/> maiores, magni dolorum aliquam.</p>
                <hr class="bottom-line"/>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="service-box text-center">
                  <div class="icon-box">
                    <i class="fa fa-html5 color-green"></i>
                  </div>
                  <div class="icon-text">
                    <h4 class="ser-text">Mentor HTML5 Workshop</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="service-box text-center">
                  <div class="icon-box">
                    <i class="fa fa-css3 color-green"></i>
                  </div>
                  <div class="icon-text">
                    <h4 class="ser-text">Mentor CSS3 Workshop</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="service-box text-center">
                  <div class="icon-box">
                    <i class="fa fa-joomla color-green"></i>
                  </div>
                  <div class="icon-text">
                    <h4 class="ser-text">Mentor Joomla Workshop</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Workshop;
