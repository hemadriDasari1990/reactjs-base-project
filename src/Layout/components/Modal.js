/**
 * created by Hemadri Dasari on 26/05/2018
 */

import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {Map, List, fromJS, toJS} from 'immutable';
import {connect} from 'react-redux';
import myTheme from '../../common/theme';
import Divider from 'material-ui/Divider';

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true
    };
  }
  static get propTypes() {
    return {
      title: React.PropTypes.string,
      children: React.PropTypes.node
    }
  }

  handleClose = () => {
    this.setState({open: false});
  };

  componentWillReceiveProps(nextProps){
    setTimeout (() => {
      if(!nextProps.adslotsAddloading && nextProps.adslotsAddData && nextProps.adslotsAddData.size > 0){
        this.setState({
          open: false
        });
      }
      if(!nextProps.adslotsUpdateloading && nextProps.adslotsUpdateData  && nextProps.adslotsUpdateData.size > 0){
        this.setState({
          open: false
        });
      }
    }, 3000) 
  }
  render() {
  const actions = [
    <RaisedButton style={myTheme.buttonSimpleStyle} buttonStyle={myTheme.buttonStyle} type="submit" onClick={this.props.hideModal}>
              Cancel
    </RaisedButton>
  ]; 

    const titleStyle = {
      backgroundColor: "#11d229",
      color: "#fff",
      height:70,
      fontWeight: 'bold'
    }
    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
          modal={true}
          titleStyle={titleStyle}
        >
          {this.props.children}
          <Divider/>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let adslotsUpdateloading = state.getIn(['Form', 'ads', 'update', 'loading'], false);
  let adslotsAddData = state.getIn(['Form', 'ads', 'add', 'success'], List());
  let adslotsAddloading = state.getIn(['Form', 'ads', 'add', 'loading'], false);
  let adslotsUpdateData = state.getIn(['Form', 'ads', 'update', 'success'], List());
  return {
    adslotsAddData,
    adslotsUpdateData
  }
}

export default connect(mapStateToProps, null)(Modal)