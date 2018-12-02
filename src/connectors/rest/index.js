import { API } from '../../config/api';

export const getList = () => {
  return fetch(`${API}/rest`)
    .then((response) => {
      return response.json().then(json => json.data );
    });
};

export const getItem = (model, id) => {
  return fetch(`${API}/rest/${model}/${id}`)
    .then((response) => {
      return response.json().then((json) => json.data );
    });
};

export const createItem = (model, item) => {
  let data = {
    model,
    item
  };

  return fetch(`${API}/rest`,
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

  return fetch(`${API}/rest`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then((response) => {
      console.log(response);

      return true;
    });
};

export const removeItem = (model, id) => {
  return fetch(`${API}/rest/${model}/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then((response) => {
      console.log(response);

      return true;
    });
};

export const search = (str) => {
  return fetch(`${API}/rest?search=${str}`)
    .then((response) => {
      return response.json().then((json) => json.data );
    });
};
