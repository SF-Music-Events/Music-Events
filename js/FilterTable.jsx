import React from 'react';

const FilterTable = () => (
  <div>
    <form>
      <table>
        <tbody>
          <tr>
            <th />
            <th>Age</th>
            <th>Price</th>
            <th>Tags</th>
          </tr>
          <tr>
            <td>
              <h3>Filters</h3>
            </td>
            <td>
              <span className="filter">18+</span>
            </td>
            <td>
              <span className="filter">Free</span>
            </td>
            <td>
              <span>Dropdown</span>
            </td>
            <td>
              <button>Filter Results</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
);

export default FilterTable;
