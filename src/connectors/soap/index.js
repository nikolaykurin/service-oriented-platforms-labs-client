import soap from 'soap';
import { API } from '../../config/api';

// https://github.com/doedje/jquery.soap
export const getList = () => {
  var url = `${API}/bmicalculator?wsdl`;
  var args = {
    weight: 65.7,
    height: 1.63
  };

  soap.createClient(url, (err, client) => {
    if(err) {
      console.error(err);
    } else {
      client.calculateBMI(args, (err, response) => {
        if(err) {
          console.error(err);
        } else {
          console.log(response);
        }
      })
    }
  });
};

export const getItem = (model, id) => {
    //
};

export const createItem = (model, item) => {
    //
};

export const updateItem = (model, item) => {
    //
};

export const removeItem = (model, id) => {
    //
};

export const search = (str) => {
    //
};
