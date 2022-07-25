const {default : axios}=require("axios");

const addTask=(a)=>{
    let url="http://localhost:4000/tasks"
    // return fetch(url,{
    //     method:"Post",
    //     headers :{
    //         'Content-type':"application/json"
    //     },
    //     body:JSON.stringify(a)
    // })
    return axios.post(url,a)
}
module.exports={
    addTask
}