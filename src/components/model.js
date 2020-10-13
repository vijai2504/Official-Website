import React from 'react';

class Model extends React.Component {
  render() {
    return (
      <>
        <div class="modal fade" id="login" role="dialog">
        <div class="modal-dialog modal-sm">

         
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title text-center form-title">Login</h4>
            </div>
            <div class="modal-body padtrbl">

              <div class="login-box-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <div class="form-group">
                  <form name="" id="loginForm">
                    <div class="form-group has-feedback">
                      
                      <input class="form-control" placeholder="Username" id="loginid" type="text" autocomplete="off" />
                      
                      <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                    
                      <input class="form-control" placeholder="Password" id="loginpsw" type="password" autocomplete="off" />
                     
                
                      <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="checkbox icheck">
                          <label>
                                    <input type="checkbox" id="loginrem" /> Remember Me
                                  </label>
                        </div>
                      </div>
                      <div class="col-xs-12">
                        <button type="button" class="btn btn-green btn-block btn-flat" onclick="userlogin()">Sign In</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
            </>
            )
              }
                }

                export default Model;
