import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup(firstName, lastName){

    const promise1 = new Promise((resolve, reject) =>{
        resolve(firstName);
    });

    const promise2 = new Promise((resolve, reject) =>{
        resolve(lastName);
    });
    promise.all(promise1, promise2)
    .then((message) =>{
        console.log('body firstName lastName' +message)
    }).catch((error)=>{
        console.log(error)
    })
    
}