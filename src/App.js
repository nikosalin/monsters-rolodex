import React, { Component} from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.compnent';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') /* πανε στο λινκ για να βρεις τα στοιχεια */
    .then(response => response.json()) /* παρε τα στοιχεια απο την λιστα json */
    .then(users => this.setState({monsters: users})); /* βαλε τα στοιχεια της λιστας στα τερατα */
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
      return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
          <SearchBox 
            placeholder='search monsters'
            handleChange={this.handleChange} />
          <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
