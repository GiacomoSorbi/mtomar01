import React from 'react';
import './FilterBar.css';



export class FilterBar extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      show: 'Featured Projects'
    };

    this.handleShowChange = this.handleShowChange.bind(this);
    this.filterSelection = this.filterSelection.bind(this);
    this.w3AddClass = this.w3AddClass.bind(this);
    this.w3RemoveClass = this.w3RemoveClass.bind(this);

    this.filters = [
      'Featured Projects',
      'Latest Projects',
      'All Projects',
      'Cafe - Bars',
      'Residence',
      'Retail Stores',
      'Yachts'
    ];



  }

  getShowClass(filter) {
    if (this.state.show === filter) {
      return 'active';
    }
    return '';
  }

  filterSelection(filter) {
    var x, i;
    x = document.getElementsByClassName("Project");
    if (filter === "all") filter = "";
    for (i = 0; i < x.length; i++) {
      this.w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(filter) > -1) this.w3AddClass(x[i], "show");
    }
  }

  w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
      }
    }
  }

  w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  handleShowChange(filter) {
    this.setState({show: filter});
    this.filterSelection(filter);
  }

  renderShowOptions() {
    return this.filters.map(filter => {
      return <li className={this.getShowClass(filter)} key={filter} onClick={this.handleShowChange.bind(this, filter)}>{filter}</li>;
    });
  }

  render() {
    return(
      <div className="FilterBar">
        <div className="FilterBar-show-types">
          <ul>
            {this.renderShowOptions()}
          </ul>
        </div>
      </div>
    );
  }
};
