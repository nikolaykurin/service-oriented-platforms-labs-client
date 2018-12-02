import { API } from '../../config/api';

export const getList = () => {
  return fetch(`${API}/soap`)
    .then((response) => {
      return response.json().then(json => json )
    });
};

export const getItem = (model, id) => {
  return fetch(`${API}/soap/${model}/${id}`)
    .then((response) => {
      return response.json().then(json => json );
    });
};

export const createItem = (model, item) => {
  let data = {
    model,
    item
  };

  return fetch(`${API}/soap`,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return true
    });
};

export const updateItem = (model, item) => {
  let data = {
    model,
    item
  };

  return fetch(`${API}/soap`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then((response) => {
      return true;
    });
};

export const removeItem = (model, id) => {
  return fetch(`${API}/soap/${model}/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then((response) => {
      return true;
    });
};

export const search = (str) => {
  return fetch(`${API}/soap?search=${str}`)
    .then((response) => {
      return response.json().then(json => json )
    });
};
