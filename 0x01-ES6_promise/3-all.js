export default function handleProfileSignup(firstName, lastName){
    const promise = new Promise((resolve, reject) =>{
        const names = {
            firstName,
            lastName
        }
        resolve(names.firstName);
        resolve(names.lastName);
    })
    promise.all(console.log('body firstName lastName'))
    reject('Signup system offline ')
    
}