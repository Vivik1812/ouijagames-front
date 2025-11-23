import Axios from 'axios';

const URL = 'https://ouijagames-back.onrender.com/api/categories';

class CategoriesServices{
    
    async getAllCategories(){
        try{
            const response = await Axios.get(URL);            
            return response.data;
            
        }catch(error){
            console.error('Error: ',error)
            throw error;
        }
    }

    async postCategory(product){
        try{
            const response = await Axios.post(URL, product,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        }catch(error){
            console.log('Error: ',error)
            throw error;
        }
    }


}

export default new CategoriesServices();