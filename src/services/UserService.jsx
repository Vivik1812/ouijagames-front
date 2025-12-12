import Axios from "axios";

const URL = "https://ouijagames-back.onrender.com/api/users";

class UserService {
  async  login(email, password) {
    try {
      const response = await Axios.get(URL);

      const users = response.data
        
      const encontrado = users.find(u => u.email === email);

      if(!encontrado) return null;

      if(encontrado.password !== password) return null;

      return encontrado;

    }catch(e){
        console.error('Error:',e);
        return null;
    }
  }

  async getAllUsers() {
    try {
      const response = await Axios.get(URL);
      return response.data;
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    }
  }

  async postUser(user) {
    try {
      const response = await Axios.post(URL, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  }

  async deleteUser(id){
        try{
            const response = await Axios.delete(`${URL}/${id}`)
            return response.data
        }catch(error){
            console.error("Error:", error);
            throw error;
        }
         
    }
}

export default new UserService();
