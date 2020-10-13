import React from 'react';

class Price extends React.Component {
  render() {
    return (
      <>
         <section id="pricing" class="section-padding">
          <div class="container">
            <div class="row">
              <div class="header-section text-center">
                <h2>Our Pricing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nesciunt vitae,<br/> maiores, magni dolorum aliquam.</p>
                <hr class="bottom-line"/>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="price-table">
                  
                  <div class="pricing-head">
                    <h4>Monthly Plan</h4>
                    <span class="fa fa-usd curency"></span> <span class="amount">200</span>
                  </div>

                  
                  <div class="price-in mart-15">
                    <a href="#" class="btn btn-bg green btn-block">PURCHACE</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="price-table">
                  
                  <div class="pricing-head">
                    <h4>Quarterly Plan</h4>
                    <span class="fa fa-usd curency"></span> <span class="amount">800</span>
                  </div>

                 
                  <div class="price-in mart-15">
                    <a href="#" class="btn btn-bg yellow btn-block">PURCHACE</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="price-table">
                  
                  <div class="pricing-head">
                    <h4>Year Plan</h4>
                    <span class="fa fa-usd curency"></span> <span class="amount">1200</span>
                  </div>

                 
                  <div class="price-in mart-15">
                    <a href="#" class="btn btn-bg red btn-block">PURCHACE</a>
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

export default Price;
