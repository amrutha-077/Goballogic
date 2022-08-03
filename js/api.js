// // // console.log("fetch method")
// // fetch(" http://localhost:3001/empDetails ").then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
// const response=user("http://localhost:3001/empDetails");
// function user(url)
// {
//     const res= fetch(url);
//     // var data = await res.json();
//     // console.log(data);
//     if (res=="city:delhi"){
//         console.log(city);  
//     }
    
// }


//**************************************************************************** */

// to fetch all data
function all()
{
fetch(" http://localhost:3001/empDetails ").then((res)=>{return res.json()}).then((res)=>console.log(res)).catch((Err)=>console.log(Err))
}
all()


// post method

// function postreq()
// {
//     let url="http://localhost:3001/empDetails"
//     const data={
//         id:4,
//         fname:"anjana",
//         email:"anjana@gmail.com"
//     }
//     fetch(url,
//         {
//         method:'POST',
//         body:JSON.stringify(data),
//         headers: { 'Content-Type':'application/json' }
//          }).then((res)=>{return res.json()}).then((response)=>console.log(response)).catch((err)=>console.log(err))
// }
// postreq()


// patch method


// function patchreq(){
//     const url="http://localhost:3001/empDetails/3"
//     const data={
//         fname:"amrutha",
//         email: "amrutha077@gmail.com",
//     }
//     fetch(url,{
//         method:'PATCH',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
// }
// patchreq()


// put method

// function putreq(){
//     const url="http://localhost:3001/empDetails/2"
//     const data={
//         fname: "druthi",
//         email:"druthi@gmail.com"
//     }
//     fetch(url,{
//         method:'PUT',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }).then((res)=>{return res.json()}).then((serverres)=>console.log(serverres)).catch((err)=>console.log(err))
// }
// putreq()


