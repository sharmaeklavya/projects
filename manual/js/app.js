import {tfManual} from './data.js';

// class selectors
const topics = document.querySelector(".topics");
const form = document.querySelector(".search-form");
const navBtns = document.querySelectorAll(".nav-btn");

// functions loading
displayQNS(tfManual);
filterQNS(navBtns);
searchBarQNS();

// function display - questions and answers
function displayQNS(tfManual) {
  const manuals = tfManual
    .map((tf) => {
      return `<div class="issues-solutions">
      <p class="issue-item">
      ${tf.question}
      <i class="fas fa-plus"></i>
      <i class="fas fa-minus"></i>
    </p>
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

//function filter questions and answers
function filterQNS(navs) {
  navs.forEach((btns) => {
    btns.addEventListener("click", (btn) => {
      const btnCategory = btn.currentTarget.dataset.id;
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

// function show hide answers/ solutions
function toggleSolutions() {
// class selectors
const questions = document.querySelectorAll(".issue-item");
const answers = document.querySelectorAll(".solution-item");

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

// search bar questions and answers
function searchBarQNS(){
form.addEventListener('input', (e)=> {
  e.preventDefault();
  const value = e.target.value.toLowerCase()
  let search = tfManual.filter(tf => {
    const qns = [tf.question, tf.answer].toString().toLowerCase()   
    return qns.includes(value)      
  })
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
    return `<img src="${i}" class="image-item"/>`;
  }).join('')}</div>
  </div>`;
  }).join('')
  topics.innerHTML = search
})
}
