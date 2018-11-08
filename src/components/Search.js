import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import Link from './Link';
import { FEED_SEARCH_QUERY } from '../Queries';

class Search extends Component {
  state = {
    links: [],
    filter: ''
  }
  executeSearch = async () => {
    const { filter } = this.state
    const result = await this.props.client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter },
    })
    const links = result.data.feed.links
    this.setState({ links })
  }
  render() {
    return (
      <div>
        <div>
          Search
          <input
            type='text'
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this.executeSearch()}>OK</button>
        </div>
        {this.state.links.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))}
      </div>
    )
  }
}

export default withApollo(Search);
