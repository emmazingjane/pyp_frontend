import react from 'react';
import axios from 'axios';

class CocktailModel {
    static searchAll = () => {
      const request = axios.get(`http://localhost:3001/liquor_types`)
      .then(()=>{
        
      })
    }
    static allTypes = (recipe_id) => {
      const request = axios.get(`http://localhost:8080/api/recipes/${recipe_id}`);
      return request;
    }



}

export default CocktailModel;
