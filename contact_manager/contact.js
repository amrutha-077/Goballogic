
let contact=document.querySelector('.contact-container')
let addform=document.querySelector('.add')
const fname=document.getElementById('username')
const email=document.getElementById('useremail')
const phone=document.getElementById('userphone')
const searchform=document.querySelector(".search")
let msgcont=document.getElementById('msg-cont')
fetch('http://localhost:3001/empDetails').then((res)=>{return res.json()}).then((res1)=>{console.log(res1)
    UI(res1)}).catch((Err)=>console.log(Err))

function UI(data){
     let output=''
    data.map((item)=>{
    output+=`<div class="col-sm-3">
    <div class="card">
        <div class="card-body" id=${item.id} data-id=${item.id} data-fname=${item.fname} data-email=${item.email} data-phone=${item.phone}>
        <h3 id='ui-uname'>${item.fname}</h3>
        <p id='ui-email'>${item.email}</p>
        <p id='ui-phone'>${item.phone}</p>
        <button id='delete-btn'>Delete</button>
        <button id='edit-btn'>Edit</button>
        </div>
    </div>
    </div>`
})
contact.innerHTML=output
}

searchform.addEventListener('submit',(event)=>{
    event.preventDefault()
    let searchs=fname.value 
    fetch(`http://localhost:3001/empDetails/?fname=${searchs}`).then((res)=>{return res.json()}).then((res1)=>UI(res1)).catch((err)=>(console.log(err)))
    function UI(data){
        let output=''
        data.map((item)=>{
        output+=`<div class="col-sm-3">
            <div class="card">
            <div class="card-body" id=${item.id} data-id=${item.id} data-fname=${item.fname} data-email=${item.email} data-phone=${item.phone}>
                <h3 id='ui-uname'>${item.fname}</h3>
                <p id='ui-email'>${item.email}</p>
                <p id='ui-phone'>${item.phone}</p>
                <button id='delete-btn'>Delete</button>
                <button id='edit-btn'>Edit</button>
            </div>
            </div>
            </div>`
      })
      contact.innerHTML=output
   }
 })


contact.addEventListener('click',(e)=>{
    e.preventDefault()
    const parentElement=e.target.parentElement
    const uid=parentElement.id
    console.log(e)
     if(e.target.id==='delete-btn')
     {
         fetch(`http://localhost:3001/empDetails/${uid}`,{
             method:'DELETE'
            }).then((res)=>{return res.json}).then((res1)=>location.reload()).catch((err)=>console.log(err))
     }
     if(e.target.id==='edit-btn')
     {
         const parent=e.target.parentElement
         let fname=parent.dataset.fname
         let email=parent.dataset.email
         let phone=parent.dataset.phone
         let userid=parent.dataset.id
             username.value=fname
             useremail.value=email
             userphone.value=phone
        addform.addEventListener('submit',(e)=>{
            console.log(e)
                e.preventDefault()
                const data={
                    fname:username.value,
                    email:useremail.value,
                    phone:userphone.value
                }
                fetch(`http://localhost:3001/empDetails/${userid}`,{
                method:'PUT',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
                }).then((res)=>{return res.json()}).then((res)=>location.reload()).catch((err)=>console.log(err))
               })
            //  if(e.target.id === 'upd-btn') 
            // {
            //     const obj={
            //         fname:u_name.value,
            //         email:uu_email.value,
            //         phone:uu_phone.value,
                    
            //     }
            //     fetch(` http://localhost:3001/empDetails/${userid}`,{
            //         method:'PUT',
            //         body:JSON.stringify(obj),
            //         headers:{
            //             'Content-Type':'application/json'
            //         }
            //     }).then((res)=>{return res.json()}).then((serverres)=>location.reload()).catch((err)=>console.log(err))
            // }
            //  if(e.target.id === 'sub-btn') 
            //  {
            //     const obj={
            //         id:Date.now(),
            //         fname:u_name.value,
            //         email:uu_email.value,
            //         phone:uu_phone.value,
            //     }
            //     fetch(" http://localhost:3001/empDetails", {
            //         method:'PUT',
            //         body:JSON.stringify(obj),
            //         headers:{'Content-Type':'application/json'}
            //     }).then((res)=>{return res.json()}).then((res1)=location.reload())
            //     .catch((err)=>{console.log(err)})
            // }     
                
                
        }
    })
