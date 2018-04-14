import React from 'react';
import FilterList from './FilterList';

class FilterTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        city: {},
        venue: {}
      }
    };

    this.filterResults = this.filterResults.bind(this);
  }

  filterResults(filterVal, filterType) {
    console.log(this.state.filters);
    let newFilterState = { ...this.state.filters };
    if (this.state.filters[filterType][filterVal]) {
      delete newFilterState[filterType][filterVal];
      this.setState({
        filters: { ...newFilterState }
      });
    } else {
      newFilterState[filterType][filterVal] = true;
      this.setState({
        filters: { ...newFilterState }
      });
    }

    this.props.filterEvents(this.state.filters, filterType);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>City</th>
              <th>Venue</th>
              <th>Age</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>
                <FilterList filterItems={this.props.cities} type="city" filterFunc={this.filterResults} />
              </td>
              <td>
                <FilterList filterItems={this.props.venues} type="venue" filterFunc={this.filterResults} />
              </td>
              <td>
                <div className="tag" onClick={() => this.filterResults('18+', 'age')}>
                  18+
                </div>
              </td>
              <td>
                <div className="tag" onClick={() => this.filterResults('Free', 'price')}>
                  Free
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FilterTable;
