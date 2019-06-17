import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import People from './components/People'
import Add from './components/Add'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      pageNum: ''
    }
  }


  onUpdate = (val) => {
    this.setState({
      people: [...this.state.people, val]
    })
  };

  changePage = (val) => {
    this.setState({ pageNum: val })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>People Rolodex</header>
          <ul className="menu">
            <li className={this.state.pageNum === 'home' ? 'is-active' : ''} onClick={() => this.setState({ pageNum: 'home' })}> <Link style={{ paddingLeft: '20px' }} to='/' params="" >Home</Link></li>
            <li className={this.state.pageNum === 'people' ? 'is-active' : ''} onClick={() => this.setState({ pageNum: 'people' })} ><Link style={{ paddingLeft: '20px' }} to='/people'>People</Link></li>
            <li className={this.state.pageNum === 'add' ? 'is-active' : ''} onClick={() => this.setState({ pageNum: 'add' })} ><Link style={{ paddingLeft: '20px' }} to='/add'>Add People</Link></li>
          </ul>
          <Route exact path='/' render={() => <Home listPeople={this.state} />} />
          <Route path='/people' render={() => <People listPeople={this.state} changePage={this.changePage} />} />
          <Route path='/add' render={() => <Add onUpdate={this.onUpdate} />} />
        </div>
      </BrowserRouter >
    );
  }
}
export default App;
