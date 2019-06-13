import React from 'react'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.listPeople;
  }

  render() {
    return (
      <div>

        <figure data-title="Summary">
          <figcaption>
            Number of People: {this.state.people.length} People
          </figcaption>
        </figure>
      </div>
    )
  }

}

export default Home