// import apiUrl  from "./config";
// // import axios from 'axios';

const apiUrl = 'http://localhost:5000';
export const getProduct = async (id) =>{
    try {
        const response = await fetch(`${apiUrl}/api/products/${id}`,{
            // url: `${apiUrl}/api/products/${id}`,
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response.ok){
            throw new Error(`${response.status}`);
        }
        return response.json();

    } catch(err){
console.log(err);
return { error: err.message};
    }
};

export const signinapi = async({email,password}) =>{
    try{
        const response = await fetch( `${apiUrl}/api/users/signin` ,{
            method: 'POST',
            header:{
                'Content-Type': 'application/json',
            },
            data:{
                email,
                password,
            },
        });
        if(!response.ok){
            throw new Error(`${response.status}`);
        }
        return response.json();

    } catch(err){
console.log(err);
return { error: err.message};
    }
}