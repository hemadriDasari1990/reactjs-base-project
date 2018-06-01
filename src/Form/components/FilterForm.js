/**
 * created by Hemadri Dasari on 26/05/2018
 */

import React, { Component } from "react";
import Modal from '../../Layout/components/Modal';
import myTheme from '../../common/theme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {Map, List, fromJS, toJS} from 'immutable';
import * as adsActions from '../../AdSlotsData/actions';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class EditForm extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <RadioButtonGroup name="Filter By:" style={{ marginTop: 20, display: 'flex' }} onChange={this.props.changeFilter}> 
          <RadioButton
            value='type'
            name="type"
            label='Type'
            style={{ width: 'auto', marginRight: '15px' }}
            labelStyle={myTheme.labelStyle}
            inputStyle={myTheme.inputStyle}
            iconStyle={myTheme.iconStyle}
            />
          <RadioButton
            value='format'
            label='Format'
            name='format'
            style={{ width: 'auto' }}
            labelStyle={myTheme.labelStyle}
            inputStyle={myTheme.inputStyle}
            iconStyle={myTheme.iconStyle}
            />
        </RadioButtonGroup>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {

  return {

  }
}

export default connect(mapStateToProps, {...actions, ...adsActions})(EditForm)