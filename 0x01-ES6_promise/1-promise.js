export default function getFullResponseFromAPI(success) {
    const response = new Promise ((resolve, reject)=>{
        
            if (success){
                reolsve({
                    status: 200,
                    body: 'Success',
                });
            }
    

        })
    
            reject(new Error('The fake API is not working currently'));
}