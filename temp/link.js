import {contactList} from './list.js';

// class selectors - buttons
const linkBtns = document.querySelectorAll('.link-item')
const content = document.querySelectorAll('.content')
const hamBtn = document.querySelector('.hamburger')
const links = document.querySelector('.links')
const hyperBtns = document.querySelectorAll('.hyperlink')


// function default content as page loads

// Event Listner
hyperBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {   
        let btnTarget = e.currentTarget.hash
        btnTarget = btnTarget.replace('#', '')
        content.forEach(c => {    
            if(c.id !== btnTarget){
                c.classList.add('hide-item')    
            }
            else if (c.id === btnTarget){
                c.classList.add('show-item')
            }
        })
    
    })
})

hamBtn.addEventListener('click', () => {
    links.classList.toggle('show-grid')
})



// function to display faculty list
function displayContact(){
    const title = `<tr><th>Sl. No.</th>
        <th>Name</th>
        <th>Status</th>
        <th>Address</th>
        <th>Institution</th>
        <th>Computer Name/ Zoom Account</th>
        <th>Home Studio No</th>
        <th>Location ID</th>
        </tr>`
    
    const details = contactList.map(c => {
        return `<tr>
        <th>${c.id}</th>
          <th>${c.name}</th>
          <th>${c.company}</th>
          <th>${c.address} <br />
          ${c.city} <br />
          ${c.county}</th>
          <th>${c.state}</th>          
          <th>${c.phone}</th> 
          <th>${c.email}</th> 
        </tr>`
        }).join('')
    
        table.innerHTML = `${title} ${details}`
    }

    displayContact()