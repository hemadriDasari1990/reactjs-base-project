/**
 * created by Hemadri Dasari on 26/05/2018
 */

import React, { PureComponent } from "react";
import Logo from '../../../public/images/yieldlab-logo.png';

export default class Header extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-sm-5 col-xs-6">
              <img src={Logo} alt="YieldLab" height="68"/>
          </div>

          <div>
              <h2>{this.props.appName}</h2>
          </div>
        </div>
      </div>
    )
  }
}