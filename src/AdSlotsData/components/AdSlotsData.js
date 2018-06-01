/**
 * created by Hemadri Dasari on 26/05/2018
 */

import React, { Component } from "react";
import Paper from 'material-ui/Paper';
import Timer from "material-ui/svg-icons/image/timer";
import Description from "material-ui/svg-icons/action/description";
import Link from "material-ui/svg-icons/content/link";
import ID from "material-ui/svg-icons/image/hdr-strong";
import Face from "material-ui/svg-icons/action/face";
import Format from "material-ui/svg-icons/content/text-format";
import Price from "material-ui/svg-icons/editor/attach-money";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SearchBar from '../../Search/components/SearchBar';
import * as searchActions from '../../Search/actions';
import * as formActions from '../../Form/actions';
import * as actions from '../actions';
import {Map, List, fromJS, toJS} from 'immutable';
import {connect} from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import Modal from '../../Layout/components/Modal';
import EditForm from '../../Form/components/EditForm';
import AddForm from '../../Form/components/AddForm';
import FilterForm from '../../Form/components/FilterForm';
import Divider from 'material-ui/Divider';

const name = 'adslots';
class AdSlotsData extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAddModal: false,
      showEditForm: false,
      showFilterModal: false,
      id: "",
      name: "",
      format: "",
      type: "",
      price: 0,
      url: "",
      array: this.props.adslotsData,
      filter: ""
    }
  }
  static get propTypes() {
      return {
        filterAds: React.PropTypes.func,
        getAdslots: React.PropTypes.func
      }
    }

  componentWillUnmount() {
    this.onSearchSubmit('');
  }

  componentWillMount(){
    this.props.getAdslots();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.adslotsData && nextProps.adslotsData.size > 0){
      this.setState({
        array: nextProps.adslotsData
      });
    }

    if(nextProps.adslotsAddData && nextProps.adslotsAddData.size > 0){
      this.props.addAdslotsSuccess({});
      this.props.getAdslots();
    }
    this.hideModal();
  }

  changeFilter = (evt) => {
    let data = filterColumns(this.state.array, evt.target.value);
    this.setState({
      array: data
    });
  }

  onSearchSubmit = (searchTerm) => {
    this.props.filterAds(name, searchTerm)
  }

  showAddModal = () => {
    this.setState({
      showAddModal: true
    });
  }

  showFilterModal = () => {
    this.setState({
      showFilterModal: true
    });
  }

  hideModal = () => {
    this.setState({
      showAddModal: false,
      showEditForm: false,
      showFilterModal: false
    });
  }

  renderSearchBar = () => {
    return (
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-4" style={{marginTop: 8, marginLeft: 24}}>   
          <SearchBar onSubmit={this.onSearchSubmit} id="Search"/>     
        </div>
        <div className="" style={{float: 'right', marginRight: 20}}>   
          <FilterForm changeFilter={this.changeFilter} adslotsData={this.props.adslotsData} />
        </div>
        <div className="" style={{float: 'right', marginTop: 15}}>   
           <FloatingActionButton mini={true} title="Create Add" backgroundColor="#11d229" onClick={this.showAddModal} style={{marginRight:30}}>
            <ContentAdd />
          </FloatingActionButton>   
        </div>
      </div>
    )
  }

  showEditForm = (id, name, type, url, format, price) => {
    this.setState({
      showEditForm: true,
      id: id,
      name: name,
      type: type,
      format: format,
      price: price,
      url: url
    });
  }

  render() {
    let rows = [];
    const { array } = this.state;
    const style = {
      margin: 10,
      padding:15,
      display: 'inline-block',
      width: '100%'
    };
    const iconStyle = {
      marginBottom: -7,
      marginRight: 3,
      color: '#06f323'
    }
    if(array){
      array.map((data, i) =>{
        let id = data.get("id");
        let name = data.get("name");
        let type = data.get("type");
        let url = data.get("url");
        let format = data.get("format");
        let price = data.get("price");
        rows.push(
           <div key={id} className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <Paper style={style} zDepth={5} onClick={() => this.showEditForm(id, name, type, url, format, price)}>
                <ID style={iconStyle}/><span><b>Ad ID:</b> {id}</span>
                <br/>
                <Face style={iconStyle}/><span><b>Ad Name:</b> {name}</span>
                <br/>
                <Description style={iconStyle}/><span><b>Ad Type:</b> {type}</span>
                <br/>
                <Link style={iconStyle}/><span><b>Ad Link: </b></span><u><a href={url} target="_blank">{url}</a></u>
                <br/>
                 <Format style={iconStyle}/><span><b>Ad Format: </b>{format}</span>
                 <br/>
                 <Price style={iconStyle}/><span><b>Ad Price: </b>${price}</span>
              </Paper>
            </div>
          )
      })
    }
    return (
      <MuiThemeProvider>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1>---Welcome To Adslots Manager Dashboard---</h1>
          {this.renderSearchBar()}
          {this.state.showEditForm && (<Modal hideModal={this.hideModal} buttonName="Update" title="Update Ad">
              <EditForm id={this.state.id} name={this.state.name} type={this.state.type} format={this.state.format} price={this.state.price} link={this.state.url} />
            </Modal>
          )}
          {this.state.showAddModal && (<Modal hideModal={this.hideModal} buttonName="Add" title="Create Ad">
              <AddForm />
            </Modal>
          )}
          {this.props.adslotsAddData && this.props.adslotsAddData.size > 0 && <h5>Ad created successfully</h5>}
          {this.props.adslotsAddError && this.props.adslotsAddError.size > 0 && <h4>Error occured. Please try again! </h4>}

          <Divider width="100%" style={{backgroundColor: "#fff", height: 3, marginTop:10}}/>
          {this.props.adslotsloading && "Loading..."}
          {rows}
        </div>
      </MuiThemeProvider>
    )
  }
}

function orderData(adslotsData, state) {
    const defaultSortColumn = fromJS({columnId: 'type', sortOrder: 'asc'})
    const sortColumn = state.getIn(['Search', name, 'sortedColumn'], defaultSortColumn)
    const column = sortColumn.get('columnID')
    const order = sortColumn.get('sortOrder')
    adslotsData = adslotsData.sort((a, b) => {
      a = a.get(column, 0)
      b = b.get(column, 0)
      if (order === 'asc') {
        if (a > b) return 1
        if (a < b) return -1
      } else {
        if (a < b) return 1
        if (a > b) return -1
      }
      return 0;
    })
    return adslotsData;
  }

function filterColumns(adslotsData, columnName) {
    const column = columnName;
    const order = 'asc';
    adslotsData = adslotsData.sort((a, b) => {
      a = a.get(column, 0)
      b = b.get(column, 0)
      if (order === 'asc') {
        if (a > b) return 1
        if (a < b) return -1
      } else {
        if (a < b) return 1
        if (a > b) return -1
      }
      return 0;
    })
    return adslotsData;
  }

function filterData(adslotsData, searchTerm) {
    return adslotsData.filter(function(data) {
      for (let value of data.values()) {
        value = String(value)
        if (!searchTerm || value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
      }
      return false;
    });
  }

const mapStateToProps = (state, props) => {
  let adslotsloading = state.getIn(['Adslots', 'ads', 'loading'], false);
  let adslotsData = state.getIn(['Adslots', 'ads', 'success'], List());
  adslotsData = orderData(adslotsData, state)
  let adslotsError = state.getIn(['Adslots', 'ads', 'errors'], '');
  const searchTerm = state.getIn(['Search', name, 'searchTerm'])
  if (searchTerm) {
    adslotsData = filterData(adslotsData, searchTerm)
  }
  let adslotsAddData = state.getIn(['Form', 'ads', 'add', 'success'], List());
  let adslotsAddError = state.getIn(['Form', 'ads', 'add', 'errors'], '');
  return {
    adslotsloading,
    adslotsData,
    adslotsError,
    adslotsAddData,
    adslotsAddError,
    sortColumn: state.getIn(['Search', name, 'sortedColumn', 'columnID'], 'type'),
    sortOrder: state.getIn(['Tables', name, 'sortedColumn', 'sortOrder'], 'asc')
  }
}

export default connect(mapStateToProps, {...actions, ...searchActions, ...formActions})(AdSlotsData)