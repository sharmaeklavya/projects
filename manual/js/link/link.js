import {facultyList} from './flist.js';

const onLoad = () =>  tfspeech.classList.add('show-item');

// class selectors - buttons
const linkBtns = document.querySelectorAll('.link-item')
const content = document.querySelectorAll('.content')
const tfspeech = document.getElementById('speech')
const listTable = document.querySelector('.listed')
const hamBtn = document.querySelector('.hamburger')
const links = document.querySelector('.links')

// function default content as page loads
onLoad();
displayFaculty(facultyList)

// Event Listner
linkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnTarget = e.target.dataset.id
        content.forEach(c => {
            if(btnTarget === 'home'){
                onLoad()   
            }
            else if(c.id === btnTarget){
                c.classList.add('show-item')
            }
            else{
                c.classList.remove('show-item')
            }
        })
    
    })
})

hamBtn.addEventListener('click', () => {
    links.classList.toggle('show-grid')
})

// function to display faculty list
function displayFaculty(list){
const details = list.map(f => {
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

    const title = `<tr><th>Sl. No.</th>
    <th>Name</th>
    <th>Status</th>
    <th>Address</th>
    <th>Institution</th>
    <th>Computer Name/ Zoom Account</th>
    <th>Home Studio No</th>
    <th>Location ID</th>
    </tr>`

    listTable.innerHTML = `${title} ${details}`
}







