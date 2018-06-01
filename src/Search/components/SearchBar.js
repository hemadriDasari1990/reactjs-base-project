/**
 * created by Hemadri Dasari on 26/05/2018
 */

import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as searchActions from '../actions'

class SearchBar extends Component{
  static get propTypes() {
    return {
      onSubmit: React.PropTypes.func,
      id: React.PropTypes.string,
      setValue: React.PropTypes.func,
      value: React.PropTypes.string
    }
  }

  onChange = (value) => {
    this.props.setValue(this.props.id, 'value', value);
    this.props.onSubmit(value);
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Search Ad Slots by ID, Name, Type, URL, Format & Price"
          className="form-control"
          ref="search"
          value={this.props.value}
          onChange={e => this.onChange(e.target.value)}
          onBlur={this.onFormSubmit}
        />
        <span className="input-group-btn">
          <button type="submit" className="form-control">
          <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </span>
      </form>
    )
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.onChange(this.refs.search.value)
  }
}

const mapStateToProps = (state, props) => {
  let value = state.getIn(['Search', props.id, 'currentValues', 'value'], '');
  return {
    value: value
  }
}

export default connect(mapStateToProps, searchActions)(SearchBar)