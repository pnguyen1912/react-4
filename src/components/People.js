import React from 'react'

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listPeople;
  }






  render() {
    return (
      <div>
        <ul className="menu">
          {this.state.people.map(item => {
            return (
              <div>
                <li style={{ borderStyle: 'solid', borderColor: '#336283', padding: '5px', paddingLeft: '15px', paddingRight: '15px' }}>{item.name}</li>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default People