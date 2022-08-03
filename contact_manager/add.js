const addform=document.querySelector(".add")
const fname=document.getElementById('username')
const email=document.getElementById('useremail')
const phone=document.getElementById('userphone')
addform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const data={
        fname:username.value,
        email:useremail.value,
        phone:userphone.value,
        id:Date.now()
    }
    fetch(" http://localhost:3001/empDetails ",{
            method:'POST',
            body:JSON.stringify(data),
             headers: { 'Content-Type':'application/json' }
            }).then((res)=>{return res.json()}).then((response)=>{Msg.innerHTML="SUCESSFULLY ADDED!"}).catch((err)=>{Msg.innerHTML="UNSUCESSFUL"})
    })

