import {facultyList} from './flist.js';

// class selectors - buttons
export const linkBtns = document.querySelectorAll('.link-item')
export const content = document.querySelectorAll('.content')
const tfspeech = document.getElementById('speech')
const table = document.querySelector('.table')
const hamBtn = document.querySelector('.hamburger')
const links = document.querySelector('.links')

const onLoad = () =>  tfspeech.classList.add('show-item');

// function default content as page loads

displayFaculty()

// Event Listners
linkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnTarget = e.target.dataset.id
        content.forEach(c => {            
            if(btnTarget === 'home'){
                onLoad()   
            }
            else if(c.id === btnTarget){
                c.classList.remove('hide-item')    
            }
            else {
                c.classList.add('hide-item')
            }
        })
    
    })
})


hamBtn.addEventListener('click', () => {
    links.classList.toggle('show-grid')
})

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




