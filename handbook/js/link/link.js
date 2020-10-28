import {facultyLDetails} from './flist.js';

const facultyList = facultyLDetails.sort((a,b) => a.homestudio < b.homestudio ? 1 : -1)  

// class selectors - buttons
const linkBtns = document.querySelectorAll('.link-item')
const content = document.querySelectorAll('.content')
const tfspeech = document.querySelectorAll('.content')[0]
const facultyData = document.querySelector('.f-container')
const hamBtn = document.querySelector('.hamburger')
const links = document.querySelector('.links')
const pound =  window.location.hash.replace("#","");
const form = document.querySelector(".search-form");
const choice = document.getElementById('choice')

// function default content as page loads
const home = () => tfspeech.classList.add('show-item');
displayFaculty()
displayContent(pound)

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
const details = facultyList.map(tf => {
    return `   
    <div class="faculty">
        <div class="img">
            <img src="images/avatar.jpg" alt="">
        </div>
        <div class="disc">
            <span class="sub-title">${tf.name}<div class="status">${tf.status}</div></span>
            <span class="para">Add: ${tf.address}</span>
            <span class="para">Phone: ${tf.cell}</span>           
            <span class="para" style="word-break: break-all">Email: ${tf.email}</span>
            <span class="para">Inst: ${tf.institution}</span>            
            <span class="para">H Studio: ${tf.homestudio} | Location ID: ${tf.locationid}</span>             
        </div>
    </div>`    
    }).join('')
    facultyData.innerHTML = `${details}`
}



form.addEventListener('input', (e) => {
    e.preventDefault();
    const searchValue = e.target.value.toLowerCase()
    const choiceValue = choice.value
    const filterValue = facultyList.filter(fl => {
        if (searchValue){
            if (choiceValue == 'all'){
                const value = [fl.name, fl.address, fl.cell, fl.email, fl.institution, fl.homestudio, fl.locationid].toString().toLowerCase()
                return value.includes(searchValue)
            }
            else if (choiceValue == 'name'){
                const value = [fl.name].toString().toLowerCase()
                return value.includes(searchValue)
            }
            else if (choiceValue === 'homestudio'){
                const value = [fl.homestudio].toString().toLowerCase()
                return value.includes(searchValue)
            }
            else if (choiceValue === 'phone'){
                const value = [fl.cell].toString().toLowerCase()
                return value.includes(searchValue)
            } else if (choiceValue === 'email'){
                const value = [fl.email].toString().toLowerCase()
                return value.includes(searchValue)
            }        
        }
    })
   if (searchValue){    
       const display = filterValue.map(tf => {
           return `  <div class="faculty">
           <div class="img">
               <img src="images/avatar.jpg" alt="">
           </div>
           <div class="disc">
               <span class="sub-title">${tf.name}<div class="status">${tf.status}</div></span>
               <span class="para">Add: ${tf.address}</span>
               <span class="para">Phone: ${tf.cell}</span>           
               <span class="para" style="word-break: break-all">Email: ${tf.email}</span>
               <span class="para">Inst: ${tf.institution}</span>            
               <span class="para">H Studio: ${tf.homestudio} | Location ID: ${tf.locationid}</span>             
           </div>
       </div>`
       }).join('')

       facultyData.innerHTML = display

   } else{
    displayFaculty()
   }
})
