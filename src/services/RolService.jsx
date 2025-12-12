import Axios from 'axios';

const URL = 'https://ouijagames-back.onrender.com/api/roles';

class RolService{
    
    async getAllRoles(){
        try{
            const response = await Axios.get(URL);            
            return response.data;
            
        }catch(error){
            console.error('Error: ',error)
            throw error;
        }
    }

    async postRol(rol){
        try{
            const response = await Axios.post(URL, rol,{
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

export default new RolService();