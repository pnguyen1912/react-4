import React from 'react'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.listPeople;
  }

  unique = (val) => {
    let newAr = []
    val.map(item => newAr.push(item.favorite))
    var unique = newAr.filter((item, i, ar) => ar.indexOf(item) === i)
    return unique
  }

  render() {
    return (
      <div>
        {this.state.people.length > 0 && (


          <figure data-title="Summary">
            <figcaption>
              Number of People: {this.state.people.length} People
          </figcaption>

            <figcaption>
              Favorite Coding Languages:
            <ul>
                {this.unique(this.state.people).map(item =>
                  <li>{item}</li>
                )}
              </ul>

            </figcaption>

          </figure>)}
      </div>
    )
  }

}

export default Home