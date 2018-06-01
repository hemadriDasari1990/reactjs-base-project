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

const adFormatPattern = "[1-9][0-9]{0,3}x[1-9][0-9]{0,3}";
let patt = new RegExp(adFormatPattern);

class EditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      adName: this.props.name,
      adNameError: "",
      adType: this.props.type,
      adTypeError: "",
      adLink: this.props.link,
      adLinkError: "",
      adFormat: this.props.format,
      adFormatError: "",
      adPriceError: "",
      adPrice: this.props.price
    }
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.adslotsUpdateloading && nextProps.adslotsUpdateData && nextProps.adslotsUpdateData.size > 0){
      this.props.getAdslots();
    }
  }

  handleTouchTap = () => {
    if(this.state.adName == '' || this.state.adName == null){
      this.setState({
        adNameError: "Ad name cannot be empty",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: ""
    });
    }
    else if(this.state.adType == '' || this.state.adType == null){
      this.setState({
        adNameError: "",
        adTypeError: 'Ad type cannot be empty',
        adLinkError: '',
        adPriceError: '',
        adFormatError: ""
      });
    }else if(this.state.adLink == '' || this.state.adLink == null){
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: 'Ad link cannot be empty',
        adPriceError: '',
        adFormatError: ""
      });
    }else if(this.state.adFormat == '' || this.state.adFormat == null){
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "Ad format cannot be empty"
      });
    }else if(!patt.test(this.state.adFormat)){
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "Invalid format"
      });
    }else if(this.state.adPrice == '' || this.state.adPrice == null){
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: 'Ad price cannot be empty',
        adFormatError: ""
      });
    }else{
      let data = {};
      data.name = this.state.adName;
      data.type = parseInt(this.state.adType);
      data.url = this.state.adLink;
      data.format = this.state.adFormat;
      data.price = parseInt(this.state.adPrice);
      data.fallback = false;
      this.props.updateAdslots(data, this.props.id);
           
    }
  };

  changeAdName = (evt) => {
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
        adNameError: "Ad name cannot be empty",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "",
        adName: ""
      });
    }else{
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "",
        adName: evt.target.value
      });
    }
  }
  changeAdType = (evt) => {
     if(evt.target.value == '' || evt.target.value == null){
      this.setState({
        adNameError: "",
        adTypeError: 'Ad type cannot be empty',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "",
        adType: ""
      });
    }else{
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "",
        adType: evt.target.value
      });
    }
  }
  changeAdLink = (evt) => {
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: 'Ad link cannot be empty',
        adPriceError: '',
        adFormatError: "",
        adLink: ""
      });
    }else{
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "",
        adLink: evt.target.value
      });
    }
  }
  changeAdFormat = (evt) => {
    if(evt.target.value == '' || evt.target.value == null){
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "Ad format cannot be empty",
        adFormat: ""
      });
    }else{
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "",
        adFormat: evt.target.value
      });
    }
  }
  changeAdPrice = (evt) => {
     if(evt.target.value == '' || evt.target.value == null){
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: 'Ad price cannot be empty',
        adFormatError: "",
        adPrice: ""
      });
    }else{
      this.setState({
        adNameError: "",
        adTypeError: '',
        adLinkError: '',
        adPriceError: '',
        adFormatError: "",
        adPrice: evt.target.value
      });
    }
  }
  render() {
    const style = {
      marginRight: 55,
      marginLeft: 55
    }
    return (
      <div className="row">
          {this.props.adslotsUpdateData && this.props.adslotsUpdateData.size > 0 && <h5>Ad updated successfully</h5>}
          {this.props.adslotsUpdateError && this.props.adslotsUpdateError.size > 0 && <h4>Error occured. Please try again! </h4>}
          <TextField errorText={this.state.adNameError} style={style} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} underlineFocusStyle={myTheme.underlineFocusStyle} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Ad Name" hintText="Enter Ad name" value={this.state.adName} onChange={this.changeAdName} type="text" />
          <TextField errorText={this.state.adTypeError} style={style} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} underlineFocusStyle={myTheme.underlineFocusStyle} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Ad Type" value={this.state.adType} onChange={this.changeAdType} type="number" />
          <TextField errorText={this.state.adLinkError} style={style} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} underlineFocusStyle={myTheme.underlineFocusStyle} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Ad Link" hintText="Enter Ad link" value={this.state.adLink} onChange={this.changeAdLink} type="text" />
          <TextField errorText={this.state.adFormatError} style={style} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} underlineFocusStyle={myTheme.underlineFocusStyle} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Ad Format" hintText="Enter Ad format" value={this.state.adFormat} onChange={this.changeAdFormat} type="text" />
          <TextField errorText={this.state.adPriceError} style={style} errorStyle={myTheme.errorStyle} underlineStyle={myTheme.underlineStyle} inputStyle={myTheme.inputStyleText} underlineFocusStyle={myTheme.underlineFocusStyle} hintStyle={myTheme.hintStyle} floatingLabelStyle={myTheme.floatingLabelStyle} floatingLabelText="Ad Price" value={this.state.adPrice} onChange={this.changeAdPrice} type="number" />
          <RaisedButton style={myTheme.buttonSimpleStyle} buttonStyle={myTheme.buttonStyle} type="submit" onClick={this.handleTouchTap}>
                    {this.props.adslotsUpdateloading ? "Updating..." :'Update'}
          </RaisedButton>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let adslotsUpdateloading = state.getIn(['Form', 'ads', 'update', 'loading'], false);
  let adslotsUpdateData = state.getIn(['Form', 'ads', 'update', 'success'], List());
  let adslotsUpdateError = state.getIn(['Form', 'ads', 'update', 'errors'], '');
  return {
    adslotsUpdateloading,
    adslotsUpdateData,
    adslotsUpdateError
  }
}

export default connect(mapStateToProps, {...actions, ...adsActions})(EditForm)