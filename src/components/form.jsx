import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, FormText, Form as BootstrapForm } from 'reactstrap';

import model_fields from '../config/model_fields';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      model: props.model || undefined,
      id: props.id || NaN
    };

    this.changeSelectedModel = this.changeSelectedModel.bind(this)
  };

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ ...nextProps });
  }

  changeSelectedModel(event) {
    this.setState({
      model: event.target.value
    });
  }

  makeForm(params) {
    const model = this.state.model;

    return (
      <div>
        { model }
        <br />
        { this.state.id }
      </div>
    )
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Label for="modelSelect">Select Model</Label>
          <Input type="select" name="select" id="modelSelect" onChange={this.changeSelectedModel}>
            {
              Object.keys(model_fields).map((key) => (
                <option value={key}>{ key }</option>
              ))
            }
          </Input>
        </FormGroup>
        <div>
          {
            this.makeForm()
          }
        </div>
      </div>
    );
  };
}

export default Form;
