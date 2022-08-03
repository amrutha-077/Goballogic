const searchform=document.querySelector(".search")
const fname=document.getElementById("uname")
searchform.addEventListener('submit',(event)=>{
    event.preventDefault()
    let searchs=fname.value 
    fetch(`http://localhost:3001/empDetails/?fname=${searchs}`).then((res)=>{return res.json()}).then((response)=>UI(response)).catch((err)=>(console.log(err)))

})

function UI(data)
{
let op=''
data.map((item)=>{
    op+=`<div class="col-sm-3">
            <div class="card"> 
            <div class="card-body"> 
                <h3>${item.fname}</h3>
                <p>${item.email}</p>
                <p>${item.phone}</p>
                <button>delete</button>
            </div>
            </div>
            </div>`

})
searchform.innerHTML=op
}