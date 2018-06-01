/**
 * created by Hemadri Dasari on 26/05/2018
 */

import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    return (
      <div id="footer">
          <div className="panel-top">
            <div className="row">
              <div className="col-xs-12">
                <div className="text-left">
                  <ul id="meta-nav"><li><a href="/meta-navigation/imprint/?L=1">IMPRINT</a></li><li><a href="/meta-navigation/data-privacy-statement/">DATA PRIVACY STATEMENT</a></li><li><a href="/elements/privacy/?L=1">OPT-OUT</a></li></ul>
                </div>
                <div className="text-right">
                  @2018 Yieldlab
                </div>
              </div>
          </div>
          </div>
      </div>
    )
  }
}