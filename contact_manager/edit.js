const editform=document.querySelector(".edit")
const fname=document.getElementById('u_name')
const email=document.getElementById('uu_email')
const phone=document.getElementById('uu_phone')
let msgcont=document.getElementById('Msg')
editform.addEventListener('click',(e)=>{
    e.preventDefault()
    const parentElement=e.target.parentElement
    const uid=parentElement.id
    console.log(e)
     if(e.target.id==='sub-btn'){
         const parent=e.target.parentElement
         let fname=parent.dataset.fname
         let email=parent.dataset.email
         let phone=parent.dataset.phone
         let userid=parent.dataset.id
             u_name.value=fname
             uu_email.value=email
             uu_phone.value=phone
         editform.addEventListener('submit',(e)=>{
         console.log("isnide edit event")
         e.preventDefault()
         if(e.target.id==='upd-btn'){
         const data={
             fname:u_name.value,
             email:uu_email.value,
             phone:uu_phone.value
         }
         fetch(`http://localhost:3001/empDetails/${userid}`,{
         method:'PUT',
         body:JSON.stringify(data),
         headers:{
             'Content-Type':'application/json'
         }
         }).then((res)=>{return res.json()}).then((res)=>location.reload()).catch((err)=>console.log(err))
        }
     })
     
     }
    })