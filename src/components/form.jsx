import React, { Component } from 'react';
import { Button, FormGroup, Label, CustomInput, Form as BootstrapForm } from 'reactstrap';
import model_fields from '../config/model_fields';
import { notGenerateableFields, makeFormFields, refreh } from '../utils';
import PropTypes from 'prop-types';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      model: props.model || undefined,
      id: props.id || NaN,
      item: props.item || {}
    };

    this.changeSelectedModel = this.changeSelectedModel.bind(this);
    this.save = this.save.bind(this);
    this.clearForm = this.clearForm.bind(this);
  };

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ ...nextProps });
  }

  changeSelectedModel(event) {
    this.setState({
      model: Object.keys(model_fields).includes(event.target.value) ? event.target.value : undefined,
      id: NaN
    });
  }

  async save() {
    let fields = model_fields[this.state.model].map( item => item.accessor );

    let data = {};
    fields.forEach((field) => {
      data[field] = !notGenerateableFields.includes(field) ? document.querySelector(`#${field}`).value : undefined;
    });

    const result = this.state.id ? await this.props.updateItem(this.state.model, Object.assign(data, { id: this.state.id })) : await this.props.createItem(this.state.model, data);

    if (result) {
      refreh();
    }

  }

  clearForm() {
    this.setState({
      id: NaN,
      item: {}
    });
  }

  makeForm() {
    const model = this.state.model;

    if (!model) {
      return (
        <div>
          Select Type
        </div>
      );
    }

    const fields = makeFormFields(model, this.props.dictionaries, this.state.item);

    return (
      <BootstrapForm>
        {
          fields.map( field => field )
        }
      </BootstrapForm>
    );
  }

  render() {
    return (
      <div>
        <FormGroup>
          <Label for="modelSelect">Select Model</Label>
          <CustomInput type="select" name="select" id="modelSelect" onChange={this.changeSelectedModel} >
            <option value={ undefined }>Not Selected</option>
            {
              Object.keys(model_fields).map((key) => (
                <option value={ key } selected={ key === this.state.model }>{ key }</option>
              ))
            }
          </CustomInput>
        </FormGroup>
        <div>
          {
            this.makeForm()
          }
        </div>
        <div>
          <Button
            style={{ margin: '20px' }}
            color="success"
            onClick={this.save}
          >
            Save
          </Button>
          <Button
            style={{ margin: '20px' }}
            color="danger"
            onClick={this.clearForm}
          >
            Clear
          </Button>
        </div>
      </div>
    );
  };
}

Form.propTypes = {
  createItem: PropTypes.func,
  updateItem: PropTypes.func
};

export default Form;
