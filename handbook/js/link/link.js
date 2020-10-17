import {facultyList} from './flist.js';

// class selectors - buttons
const linkBtns = document.querySelectorAll('.link-item')
const content = document.querySelectorAll('.content')
const tfspeech = document.querySelectorAll('.content')[0]
const table = document.querySelector('.table')
const hamBtn = document.querySelector('.hamburger')
const links = document.querySelector('.links')
const hash =  window.location.hash.replace("#","");

// function default content as page loads
const home = () => tfspeech.classList.add('show-item');
displayFaculty()
displayContent(hash)

// Event Listner for navigating link tabs
linkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnTarget = e.target.dataset.id
        displayContent(btnTarget)
    })
})

// Event Listner for navigating toggle on mobile device
hamBtn.addEventListener('click', () => {
    links.classList.toggle('show-grid')
})

// function to display relevant content on clicking tabs
function displayContent (input){   
    content.forEach(c => {        
        if (input === 'home' || input === ''){
            home()
        }
        else if(c.id === input){
            c.classList.add('show-item')
        }
        else {
            c.classList.remove('show-item')
        }
    })
}

// function to display faculty list
function displayFaculty(){
const title = `<tr><th>Sl. No.</th>
    <th>Name</th>
    <th>Status</th>
    <th>Address</th>
    <th>Institution</th>
    <th>Computer Name/ Zoom Account</th>
    <th>Home Studio No</th>
    <th>Location ID</th>
    </tr>`

const details = facultyList.map(f => {
    return `<tr>
    <th>${f.id}</th>
      <th>${f.name}</th>
      <th>${f.status}</th>
      <th>${f.address} <br />
      ${f.cell} <br />
      ${f.email}</th>
      <th>${f.institution}</th>
      <th>${f.zoom}</th>
      <th>${f.homestudio}</th>
      <th>${f.locationid}</th>
    </tr>`
    }).join('')

    table.innerHTML = `${title} ${details}`
}