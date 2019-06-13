import React from 'react'
class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      town: '',
      favorite: '',
      extra: ''
    }
  }


  render() {
    return (
      <div>
        <label>Full Name</label>
        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} ></input>
        <label>Hometown</label>
        <input type="text" value={this.state.town} onChange={(e) => this.setState({ town: e.target.value })} ></input>
        <label> Favorite Coding Language</label>
        <select value={this.state.favorite} onChange={(e) => this.setState({ favorite: e.target.value })} >
          <option value="" disabled>Choose a Language</option>
          <option value="js">Javascript</option>
          <option value="c#">C#</option>
          <option value="c++">C++</option>
          <option value="oC">Objective C</option>
        </select>
        <label>Interesting Fact</label>
        <textarea name="" id="" cols="30" rows="10" value={this.state.extra} onChange={(e) => this.setState({ extra: e.target.value })} ></textarea>
        <button style={{ height: '50px', width: '100%' }} onClick={() => {

          this.props.onUpdate(this.state);
        }}

        >Add</button>
      </div >
    )
  }
}

export default Add