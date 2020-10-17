// importing data from other file
import {tfManual} from './data.js';


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
  const sort = manual.sort((a,b) => a.category < b.category ? -1 : 1)  
  const manuals = sort
    .map((tf) => {
      return `<div class="issues-solutions">
      <p class="issue-item">
      ${tf.question}
      <i class="fas fa-plus"></i>
      <i class="fas fa-minus"></i>
    </p>
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

//function filter categories
function filterQNS() {
  navBtns.forEach((btns) => {    
    btns.addEventListener("click", (btn) => {
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

// function show hide answers/ solutions
function toggleSolutions() {
// class selectors for questions and answers
const questions = document.querySelectorAll(".issue-item");
const answers = document.querySelectorAll(".solution-item");
// click event listeners on each button 
  questions.forEach((q) => {
    q.addEventListener("click", (btn) => {
      const current = btn.currentTarget;
      current.classList.toggle("item-bg");
      current.childNodes[1].classList.toggle("hide-item");   
      answers.forEach((a) => {
        if (current.parentElement === a.parentElement) {
          a.classList.toggle("show-item");          
        }
      });
    });
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

