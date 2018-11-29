import { API } from '../../config/api';

export const getList = () => {
  return fetch(`${API}/list`).then((response) => {
    return response.json().then((json) => json.data );
  });
};

export const create = () => {

};

export const update = () => {

};

export const remove = () => {

};

export const find = () => {

};
