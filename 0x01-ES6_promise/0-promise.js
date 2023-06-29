export default getResponseFromAPI =() =>{
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        const response = "API response";
        resolve(response);
      }, 2000);
    });
  }
  
  