import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import * as appActions from '../../actions'
import { makeSelectGlobal } from './selectors';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import _ from 'lodash'
import HomeComponent from '../../components/Home'
class Home extends Component {
  componentWillMount = () => {
    this.props.actions.getMovieListAction()
  };
  onClickLogout = () => {
    localStorage.clear();
    this.props.router.push('/login')
  }
  render() {
    return (
      <HomeComponent
        onClickLogout={this.onClickLogout}
        tableData={this.props.systemState.getMoviesReducer.data || {}} />
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}
const mapStateToProps = createStructuredSelector({
  systemState: makeSelectGlobal(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
