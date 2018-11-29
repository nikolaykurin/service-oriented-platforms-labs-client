import React, { Component } from 'react';
import { Table } from 'reactstrap';

import model_fields from '../config/model_fields';

class List extends Component {

  constructor(props) {
    super(props);
  };

  makeTables() {
    console.log(this.props.data);

    let tables = [];
    for (let key in model_fields) {
      tables.push(
        <div>
          <h4 style={{ textTransform: 'uppercase' }}> { `${key}s` } </h4>
          <Table size="sm" key={ key }>
            <thead>
            <tr key={ 0 }>
              {
                model_fields[key].map((field, key) => (
                  <th key={ `0-${key}` }>{ field.title }</th>
                ))
              }
            </tr>
            </thead>
            <tbody>
            {
              this.props.data[key].map((item) => (
                <tr key={ item.id } onClick={() => this.props.editItem(key, item.id)}>
                  {
                    model_fields[key].map((field, key) => (
                      <th key={`${item.id}-${key}`}>{ item[field.accessor] }</th>
                    ))
                  }
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
