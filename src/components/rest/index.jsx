import React, { Component } from 'react';
import models from '../../config/models';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import classnames from 'classnames';
import { getList } from '../../connectors/rest';
import List from "../list";
import Form from "../form";

class REST extends Component {

  constructor(props) {
    super(props);

    let state = {
      selectedModel: undefined,
      selectedItem: NaN
    };
    models.forEach((model) => {
      state[model] = [];
    });

    this.state = state;

    this.editItem = this.editItem.bind(this);
  };

  async componentWillMount() {
    const list = await getList();

    this.setState({
      ...list
    });
  }

  editItem(model, item) {
    console.log(model, item);

    this.setState({
      selectedModel: model,
      selectedItem: item
    });
  }

  render() {
    return (
      <Row>
        <Col md="6">
          <List data={this.state} editItem={this.editItem} />
        </Col>
        <Col md="6">
          <Form model={this.state.selectedModel} id={this.state.selectedItem} />
        </Col>
      </Row>
    );
  };
}

export default REST;
