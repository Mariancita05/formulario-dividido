export const createLocal = () => {
    return new Promise((resolve,reject) => {
        if(localStorage.getItem('users') === null){
           let users = JSON.stringify([])
            localStorage.setItem('users', users)
            resolve('LocalStorage creado => users') 
        }else{
            reject('Base dato users => ya existe')
        }
    })
}