import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/"><h1 className="heading">CryptoSearch.io</h1></Link>
        <Search />
      </div>
    );
  }
}
