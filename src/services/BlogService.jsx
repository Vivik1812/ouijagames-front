import Axios from 'axios';

const URL = 'https://ouijagames-back.onrender.com/api/news';

class BlogService{
    
    async getAllBlogs(){
        try{
            const response = await Axios.get(URL);            
            return response.data;
            
        }catch(error){
            console.error('Error: ',error)
            throw error;
        }
    }

    async postBlog(product){
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

export default new BlogService();