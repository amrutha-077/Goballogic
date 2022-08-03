let contact=document.querySelector('.contact-container')
let addform=document.querySelector('.add')
const searchform=document.querySelector(".search")
const fname=document.getElementById('userfname')
const email=document.getElementById('useremail')
const phone=document.getElementById('userphone')
let msgcont=document.getElementById('msg-cont')
fetch('http://localhost:3001/empDetails').then((res)=>{return res.json()}).then((res)=>{console.log(res)
    UI(res)}).catch((Err)=>console.log(Err))

function UI(data){
  let output=''
data.map((item)=>{
 output+=`<div class="col-sm-3">
  <div class="card">
    <div class="card-body" id=${item.id} data-id=${item.id} data-fname=${item.fname} data-email=${item.email} data-phone=${item.phone}>
      <h3 id='ui-uname'>${item.fname}</h3>
      <p id='ui-email'>${item.email}</p>
      <p id='ui-phone'>${item.phone}</p>
      <!-- approach 1 to get id
      <button id=${item.id} onClick="deleteUser(this.id)">delete</button>-->
      <button id='delete-btn'>delete</button>
      <button id='edit-btn'>edit</button>
    </div>
  </div>
  </div>`
})
contact.innerHTML=output
}





addform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data={
      id:Date.now(),
      fname:userfname.value,
      email:useremail.value,
      phone:userphone.value
  } 
  fetch("http://localhost:3001/empDetails",{
  method:'POST',
  body:JSON.stringify(data),
  headers:{
      'Content-Type':'application/json'
  }
  }).then((res)=>{
    console.log("api is hit")
    return res.json()}).then((res)=location.reload()
  ).catch((err)=>{
  msgcont.innerHTML="Sorry ! Try Again "
  })
  })
  contact.addEventListener('click',(e)=>{
   e.preventDefault()
    const parentElement=e.target.parentElement
   const uid=parentElement.id
   console.log(e)
    if(e.target.id==='delete-btn'){
        fetch(`http://localhost:3001/empDetails/${uid}`,{
            method:'DELETE'
           }).then((res)=>{return res.json}).then((res)=>location.reload()).catch((err)=>console.log(err))
    }
    if(e.target.id==='edit-btn'){
        const parent=e.target.parentElement
        let fname=parent.dataset.fname
        let email=parent.dataset.email
        let phone=parent.dataset.phone
        let userid=parent.dataset.id
            userfname.value=fname
            useremail.value=email
            userphone.value=phone
       addform.addEventListener('submit',(e)=>{
        console.log(e)
        e.preventDefault()
        const data={
            fname:userfname.value,
            email:useremail.value,
            phone:userphone.value
        }
        fetch(`http://localhost:3001/empDetails/${userid}`,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
        }).then((res)=>{return res.json()}).then((res)=>location.reload()).catch((err)=>console.log(err))
       })
    }
    })
