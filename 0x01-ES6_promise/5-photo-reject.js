export default function uploadPhoto(filename) {
    const promise = new Promise((resolve, reject) =>{
        reject((error) =>{
            console.error(`$${filename} cannot be processed`)
        })
    })

}