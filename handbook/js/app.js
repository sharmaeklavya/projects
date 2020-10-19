// importing data from other file
import {tfHandbook} from './data.js';
const tfManual = tfHandbook.sort((a,b) => b.category < a.category ? 1 : -1)  

// class selectors
const topics = document.querySelector(".topics");
const form = document.querySelector(".search-form");
const navBtns = document.querySelectorAll(".nav-btn");
const ham = document.querySelector('.hamburger')
const links = document.querySelector('.links')
const choice = document.getElementById('choice')

// functions loading
displayQNS(tfManual);
filterChoice()
filterQNS();

// function display - questions and answers
function displayQNS(manual) {  
  const manuals = manual
    .map((tf) => {
      return `<div class="issues-solutions">      
      <p class="issue-item">
      ${tf.question}</p>       
        <i class="fas fa-plus plus"></i>
        <i class="fas fa-minus minus"></i>      
    <p class="category">${tf.category}</p>
    <p class="solution-item">
      ${tf.answer}
    </p>
    <div class="solution-item">
    ${tf.img.map((i) => {      
      return `<a href="${i}" data-lightbox="mygallery"><img src="${i}" class="image-item"/></a>`;
    }).join('')}</div>
    </div>`;
    })
    .join("");
  topics.innerHTML = manuals;
  toggleSolutions();
}

// function show hide answers/ solutions
function toggleSolutions() {
  // class selectors for questions and answers
  const questions = document.querySelectorAll(".issue-item");
  const answers = document.querySelectorAll(".solution-item");
  const plus = document.querySelectorAll('.plus')
  const minus = document.querySelectorAll('.minus')
  // click event listeners on each button
    questions.forEach((q) => {
      q.addEventListener("click", (btn) => {
        const current = btn.currentTarget;
        current.classList.toggle("item-bg");        
        // plus - minus icons hide and show
        plus.forEach(p => p.parentElement === q.parentElement ? p.classList.toggle('hide-item') : p.classList.toggle('show-item') )
        minus.forEach(m => m.parentElement === q.parentElement ? m.classList.toggle('show-item') : m.classList.toggle('hide-item') )        
        // answers hide and show
        answers.forEach((a) => {          
          if (current.parentElement === a.parentElement) {
            a.classList.toggle("show-item");    
          }
        });
      });
    });
  }
  
//function filter categories
function filterQNS() {
  navBtns.forEach((btns) => {    
    btns.addEventListener("click", (btn) => {
      btns.style.transition = '600ms'
      const btnCategory = btn.currentTarget.dataset.id;
      choice.value = btnCategory    
      const itemCategory = tfManual.filter((item) => {
        if (btnCategory === item.category) {
          return item.category;
        }
      }); 
      if (btnCategory === "all") {        
        displayQNS(tfManual);
      } else {
        displayQNS(itemCategory);  
      }
    });
  });
}

//function filter in search bar
function filterChoice(){     
    choice.addEventListener("change", () => {
      const choiceCategory = choice.value       
      const itemCategory = tfManual.filter((item) => {
        if (choiceCategory === item.category) {
          return item.category;
        }
      });
      if (choiceCategory === "all") {      
        displayQNS(tfManual);
      } else {
        displayQNS(itemCategory);  
      }
    });
}

//event listener for hamburger menu
ham.addEventListener('click', ()=> {
  links.classList.toggle('show-grid')   
})

//event listener for search bar
form.addEventListener('input', (e)=> {
  e.preventDefault();  
  const value = e.target.value.toLowerCase() 
  const choiceCategory = choice.value
  let search = tfManual.filter(tf => {
    const itemCategory = tf.category
    let qns = [];
    if (choiceCategory === 'all'){
      qns = [tf.question, tf.answer].toString().toLowerCase()   
      return qns.includes(value)  
    }
    else if (choiceCategory === itemCategory){
      qns = [tf.question, tf.answer].toString().toLowerCase()   
       return qns.includes(value)     
    }
  })
  if (value){  
        search = search.map(sch => {
          return `<div class="issues-solutions">
          <p class="question">
            ${sch.question}
          </p>          
          <p class="answer">
            ${sch.answer}
          </p>
          <div class="answer">
            ${sch.img.map((i) => {
              return `<a href="${i}" data-lightbox="mygallery"><img src="${i}" class="image-item"/></a>`;
            }).join('')}</div>
          </div>`;
          }).join('')
        topics.innerHTML = search
      }
  else{
      displayQNS(tfManual)  
    } 
  })

