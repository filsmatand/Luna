import axios from "axios"


const API_URL = "http://localhost:3001/users"

{/* on recupers tous les utilisateurs */}
export const getUsers = async () => 
{
    const reponse = await axios.get (API_URL)
    return reponse.data
}

{/* on verifie si un e-mail existe deja*/}

export const checkEmailExist = async (email)=>{
    const reponse = await axios.get(` $(API_URL)?email=${email}` ) 
    return reponse.data.length > 0;
};

{/* on verifie si un nom d'utilisateur existe deja */}

export const checkNameExist = async (name) => {
    const reponse = await axios.get (` $(API_URL)?name = {name}`)
    return reponse.data.length > 0;
}


{/* Enregistre un nouveua Users */}

export const newUser = async (newuser) =>{
    const reponse = await axios.post(API_URL,newuser)
    return reponse.data
}

{/* Connexion*/}

export const loginUser = async (email, password)=>{
    const reponse = await axios.get(`${API_URL}?email = ${email} & password= ${password}`)
    return reponse.data
}