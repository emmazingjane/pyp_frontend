import axios from 'axios';

class CocktailModel {
    // Missing recipe argument in searchAll()
    static searchAll = (recipe) => {
      const request = axios.get(`http://localhost:3001/liquor_recipes/${recipe.type}`);
      return request;
    }


}

export default CocktailModel
