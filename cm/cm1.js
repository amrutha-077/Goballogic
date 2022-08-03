let contact=document.querySelector('.contact-container')
let addform=document.querySelector('.add')
const fname=document.getElementById('u_name')
const email=document.getElementById('uu_email')
const phone=document.getElementById('uu_phone')
const searchform=document.querySelector(".search")
let msgcont=document.getElementById('msg-cont')
fetch(" http://localhost:3001/empDetails").then((res)=>{return res.json()}).then((res1)=>{
    console.log(res1)
    UI(res1)
}).catch((err)=>{console.log(err)})
function UI(data) {
    let content = ``
    for(let i = 0; i < data.length; i++) {
        let item = data[i];
        content += `
    <div class="col-sm-3">
      <div class="card"  style="margin: 5px;">
      <div class="card-body"  data-id=${item.id} data-fname=${item.fname} data-email=${item.email} data-phone=${item.phone}>
        <h3>${item.fname}</h3>
        <p>${item.email}</p>
        <p>${item.phone}</p>
        <button id="del-btn">Delete</button>
        <button id="edit-btn">Edit</button>
      </div>
      </div>
    </div>
    `
    }
    contact.innerHTML = content
}

contact.addEventListener('click', (e)=>{
    e.preventDefault()
    const parentElement=e.target.parentElement
    const uid=parentElement.dataset.id
    if(e.target.id ==='del-btn') {
        fetch(` http://localhost:3001/empDetails/${uid}`,{
        method:'DELETE'
    }).then((res)=>{return res.json()}).then((res1)=>location.reload()).catch((Err)=>console.log(Err))
    }
    if(e.target.id ==='edit-btn') {
        const parent=e.target.parentElement
        let fname=parent.dataset.fname
        let email=parent.dataset.email
        let phone=parent.dataset.phone
        let userid=parent.dataset.id
        u_name.value=fname
        uu_email.value=email
        uu_phone.value=phone
        contact.addEventListener('click',(e)=>{
            e.preventDefault()
            console.log(e.target.id)
            if(e.target.id ==='upd-btn') 
            {
                const obj={
                    id:Date.now(),
                    fname:u_name.value,
                    email:uu_email.value,
                    phone:uu_phone.value,
                    
                }
                fetch(" http://localhost:3001/empDetails", {
                    method:'PUT',
                    body:JSON.stringify(obj),
                    headers:{'Content-Type':'application/json'}
                }).then((res)=>{return res.json()}).then((res1)=location.reload())
                .catch((err)=>{console.log(err)})
            }
            
    })
}
})

searchform.addEventListener('submit',(event)=>{
    event.preventDefault()
    let searchs=fname.value 
    fetch(`http://localhost:3001/empDetails/?fname=${searchs}`).then((res)=>{return res.json()}).then((response)=>UI(response)).catch((err)=>(console.log(err)))
    function UI(data){
        let output=''
        data.map((item)=>{
        output+=`<div class="col-sm-3">
            <div class="card">
            <div class="card-body" id=${item.id} data-id=${item.id} data-fname=${item.fname} data-email=${item.email} data-phone=${item.phone}>
                <h3 id='ui-uname'>${item.fname}</h3>
                <p id='ui-email'>${item.email}</p>
                <p id='ui-phone'>${item.phone}</p>
                <button id='delete-btn'>delete</button>
                <button id='edit-btn'>Edit</button>
            </div>
            </div>
            </div>`
      })
      contact.innerHTML=output
   }
 })