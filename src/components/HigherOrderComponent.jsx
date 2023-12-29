import React, { Component } from 'react';

export default class HOF extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  filterByUserType = (userType) => {
    const filteredData = this.state.userData.filter(
      (item) => item.user_type === userType
    );

    return filteredData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>
      </li>
    ));
  };

  filterNamesStartingWithJ = () => {
    const filteredData = this.state.userData.filter((item) =>
      item.name.startsWith('J')
    );

    return filteredData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>
      </li>
    ));
  };

  filterByAge = () => {
    const filteredData = this.state.userData.filter(
      (item) => item.age > 28 && item.age <= 50
    );

    return filteredData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>
      </li>
    ));
  };

  findTotalExperienceOfDesigners = () => {
    const designers = this.state.userData.filter(
      (item) => item.user_type === 'Designer'
    );

    const totalExperience = designers.reduce(
      (total, designer) => total + designer.years,
      0
    );

    return totalExperience;
  };

  render() {
    return (
      <div>
        <h2>Display All Items</h2>
        <ul className='allItemsDiv'>
          {this.state.userData.map((item) => (
            <li key={item.id} className="list-elements">
              <span>Id: {item.id}</span>
              <span>Name : {item.name}</span>
              <span>User Type: {item.user_type}</span>
            </li>
          ))}
        </ul>

        <h2>Display based on user type (Designer)</h2>
        <ul className='byTypeDiv'>{this.filterByUserType('Designer')}</ul>

        <h2>Filter all Data starting with J</h2>
        <ul className='byLetterDiv'>{this.filterNamesStartingWithJ()}</ul>

        <h2>Filter all data based on age greater than 28 and age less than or equal to 50</h2>
        <ul className='byAgeDiv'>{this.filterByAge()}</ul>

        <h2>Find the total years of the Designers</h2>
        <p className='byYearsDiv'>{this.findTotalExperienceOfDesigners()} years</p>
      </div>
    );
  }
}
