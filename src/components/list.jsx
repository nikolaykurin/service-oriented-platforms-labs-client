import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import model_fields from '../config/model_fields';

class List extends Component {

  constructor(props) {
    super(props);
  };

  makeTables() {
    let tables = [];
    for (let key in model_fields) {
      tables.push(
        <div>
          <h4 style={{ textTransform: 'uppercase' }}> { `${key}s` } </h4>
          <Table size="sm" responsive hover key={ key }>
            <thead>
              <tr key={ 0 }>
                {
                  model_fields[key].map((field, key) => (
                    <th key={ `0-${key}` }>{ field.title }</th>
                  ))
                }
                <th key={ '-1-actions' }>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.data[key].map((item) => (
                <tr key={ item.id }>
                  {
                    model_fields[key].map((field, key) => (
                      <th key={`${item.id}-${key}`}>{ item[field.accessor] }</th>
                    ))
                  }
                  <th key={ `${ item.id }-actions` }>
                    <FontAwesomeIcon
                      style={{ margin: '0 5px', color: '#008888', cursor: 'pointer' }}
                      icon='pen'
                      onClick={() => this.props.editItem(key, item.id)}
                    />
                    <FontAwesomeIcon
                      style={{ margin: '0 5px', color: '#FF2222', cursor: 'pointer' }}
                      icon='trash'
                      onClick={() => this.props.removeItem(key, item.id)}
                    />
                  </th>
                </tr>
              ))
            }
            </tbody>
          </Table>
          <br />
        </div>
      )
    }

    return tables;
  }

  render() {
    const tables = this.makeTables();

    return (
      <div>
        {
          tables.map(table => table )
        }
      </div>
    );
  };
}

export default List;
