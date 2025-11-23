import Axios from 'axios';

const URL = 'https://ouijagames-back.onrender.com/api/products';

class ProductServices{
    
    async getAllProducts(){
        try{
            const response = await Axios.get(URL);            
            return response.data;
            
        }catch(error){
            console.error('Error: ',error)
            throw error;
        }
    }

    async postProduct(product){
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

export default new ProductServices();