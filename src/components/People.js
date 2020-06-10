import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
  }

  componentDidMount() {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }



  render() {
    return (
      <div>
        {this.props.listPeople.people.length > 0 ? (
          <div>
            <div>
              <ul className="menu">
                {this.props.listPeople.people.map(item => (
                  <div>
                    <button
                      value={item.name}
                      className='button'
                      style={{
                        paddingLeft: '20px',
                        paddingRight: '20px'
                      }}
                      onClick={() => this.setState({ item, showing: true })
                      }
                    >{item.name.split(' ')[0]}</button>

                  </div>
                )
                )}
              </ul>
            </div>

            {this.state.item && (
              <div id='details'>
                <div class="card">
                  <div class="card-divider">Full Name:
              {this.state.item.name}
                  </div>
                  <div class="card-section">
                    <h4>Hometown:{this.state.item.town}</h4>
                    <h4>Favorite Coding Language: {this.state.item.favorite}</h4>
                    <p>{this.state.item.extra}</p>
                  </div>
                </div>
              </div>
            )}
          </div>)
          :
          (
            <div><h3>There are currently no people in here... <Link to='/add' onClick={() => this.props.changePage('add')}>Add Some</Link></h3></div>

          )
        }


      </div>
    )
  }
}

export default People