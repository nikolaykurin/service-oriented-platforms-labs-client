import React from 'react';
import { FormGroup, Label, Input, CustomInput } from 'reactstrap';
import model_fields from '../config/model_fields';

export const notGenerateableFields = [
  'id',
  'timestamp'
];

export const makeFormFields = (model, selectDictionaries, data = {}) => {
  let fields = [];

  model_fields[model].forEach((field) => {
    if (notGenerateableFields.includes(field.accessor)) {
      return;
    }

    switch (field.type) {
      case 'number':
        fields.push(
          <FormGroup>
            <Label for={ field.accessor }>{ field.title }</Label>
            <Input
              type="number"
              name={ field.accessor }
              id={ field.accessor }
              defaultValue={ data[field.accessor] || 0 }
              onChange={ (e) => document.querySelector(`#${field.accessor}`).value = e.target.value }
            />
          </FormGroup>
        );
        break;
      case 'text':
        fields.push(
          <FormGroup>
            <Label for={ field.accessor }>{ field.title }</Label>
            <Input
              type="text"
              name={ field.accessor }
              id={ field.accessor }
              defaultValue={ data[field.accessor] || '' }
              onChange={ (e) => document.querySelector(`#${field.accessor}`).value = e.target.value }
            />
          </FormGroup>
        );
        break;
      case 'select':
        fields.push(
          <FormGroup>
            <Label for={ field.accessor }>{ field.title }</Label>
            <CustomInput
              type="select"
              name={ field.accessor }
              id={ field.accessor }
              defaultValue={ data[field.accessor] || 0 }
              onChange={ (e) => document.querySelector(`#${field.accessor}`).value = e.target.value }
            >
              <option value={ 0 }>Not Selected</option>
              {
                selectDictionaries[field.accessor.split('_').shift()].map((item) => (
                  <option value={ item.id }>
                    { item.name }
                  </option>
                ))
              }
            </CustomInput>
          </FormGroup>
        );
        break;
      default:
        break;
    }
  });

  return fields;
};

export const refreh = () => {
  window.location.reload();
};
