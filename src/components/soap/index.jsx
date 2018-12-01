import React, { Component } from 'react';
import models from '../../config/models';
import { Row, Col } from 'reactstrap';

import { getList, getItem, removeItem, search } from '../../connectors/soap';
import List from '../list';
import Form from '../form';
import { refreh } from '../../utils';
import Search from "../Search";

class REST extends Component {

  constructor(props) {
    super(props);

    let state = {
      selectedModel: undefined,
      selectedItemId: NaN,
      selectedItem: {},
      data: {}
    };
    models.forEach((model) => {
      state.data[model] = [];
    });

    this.state = state;

    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.search = this.search.bind(this);
  };

  async componentWillMount() {
    const list = await getList();

    this.setState({
      data: list
    });
  }

  async editItem(model, id) {
    const item = await getItem(model, id);

    this.setState({
      selectedModel: model,
      selectedItemId: id,
      selectedItem: item
    });
  }

  async removeItem(model, id) {
    const removed = await removeItem(model, id);

    if (removed) {
      refreh();
    }
  }

  async search(str) {
    const list = await search(str);

    this.setState({
      data: list
    });
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <br />
        <Row>
          <Col md="12">
            <Search
              search={this.search}
            />
          </Col>
          <br />
          <br />
          <br />
          <Col md="6">
            <List
              data={this.state.data}
              editItem={this.editItem}
              removeItem={this.removeItem}
            />
          </Col>
          <Col md="6">
            <Form
              model={this.state.selectedModel}
              id={this.state.selectedItemId}
              item={this.state.selectedItem}
              dictionaries={this.state.data}
            />
          </Col>
        </Row>
      </div>
    );
  };
}

export default REST;
