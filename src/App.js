import React, { Component } from 'react';
import { CardList } from './components/card_list/card_list.component';
import { SearchBox } from './components/search_box/search_box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(respnse => respnse.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsteres = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search monsters...' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsteres} />
      </div>
    )
  }
}

export default App;
