import axios from 'axios';

class CocktailModel {
    static searchAll = () => {
      const request = axios.get(`http://localhost:3001/liquor_types`);
      return request;
    }



}

export default CocktailModel