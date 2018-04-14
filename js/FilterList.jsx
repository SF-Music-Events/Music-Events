import React from 'react';

class FilterList extends React.Component {
  constructor(props) {
    super(props);

    this.filter = this.filter.bind(this);
  }

  filter(filterVal, filterType) {
    let node = document.getElementById(filterVal);
    node.classList.contains('filter-Selected')
      ? node.classList.remove('filter-Selected')
      : node.classList.add('filter-Selected');
    this.props.filterFunc(filterVal, filterType);
  }

  render() {
    let { filterItems, type } = this.props;

    return (
      <div>
        {filterItems &&
          Object.keys(filterItems)
            .slice(0, 7)
            .map(item => (
              <div id={item} onClick={() => this.filter(item, type)}>
                {item}
              </div>
            ))}
      </div>
    );
  }
}

export default FilterList;
