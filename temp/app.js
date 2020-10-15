const database = [
    {
      id: 1,
      question: `Maecenas luctus purus in enim vestibulum pretium. Nam in turpis nec? `,
      answer: `Maecenas luctus purus in enim vestibulum pretium. Aliquam erat volutpat. Vivamus auctor euismod metus nec convallis. Nam in turpis nec tortor porta pretium non vel nunc. Praesent varius ac enim eget viverra. Donec et volutpat diam, id hendrerit lacus. Suspendisse feugiat viverra mattis. Etiam pulvinar dolor id consectetur pretium.`,
      img: [""],
      category: "newdelhi",
    },
    {
      id: 2,
      question: `Donec et volutpat diam, id hendrerit lacus. Etiam pulvinar dolor id consectetur pretium.?`,
      answer: `Cras pellentesque sem lectus, ut accumsan velit venenatis nec. Sed condimentum eleifend eros in tincidunt. Suspendisse sit amet sapien nec velit rhoncus vestibulum. Vivamus accumsan lorem ac est ultrices, at sagittis neque hendrerit. Sed lacinia pellentesque arcu, ut tristique neque maximus nec. Maecenas pretium lobortis purus eget vehicula. Mauris scelerisque massa eget lorem dignissim, vitae rhoncus dui viverra. Integer sed nisi ac nisi posuere luctus rutrum at velit. Proin pellentesque scelerisque consectetur. Morbi ullamcorper elit sit amet diam euismod, ac eleifend tellus viverra. Sed aliquam ipsum vel est sagittis ullamcorper. Sed blandit nec augue vel varius. Nullam hendrerit quam vitae sem interdum, eu interdum enim finibus. Praesent maximus lacus ac nulla tristique, in luctus ligula tempor. Ut lacinia mauris id risus ultrices faucibus. Phasellus nec erat odio.`,
      img: [""],
      category: "washington",
    },
    {
      id: 3,
      question: `Sed aliquam ipsum vel est sagittis ullamcorper. Sed blandit nec augue vel varius?`,
      answer: `Vivamus accumsan lorem ac est ultrices, at sagittis neque hendrerit. Sed lacinia pellentesque arcu, ut tristique neque maximus nec. Maecenas pretium lobortis purus eget vehicula. Mauris scelerisque massa eget lorem dignissim, vitae rhoncus dui viverra. Integer sed nisi ac nisi posuere luctus rutrum at velit. Proin pellentesque scelerisque consectetur. Morbi ullamcorper elit sit amet diam euismod, ac eleifend tellus viverra. Sed aliquam ipsum vel est sagittis ullamcorper. Sed blandit nec augue vel varius. Nullam hendrerit quam vitae sem interdum, eu interdum enim finibus. Praesent maximus lacus ac nulla tristique, in luctus ligula tempor. Ut lacinia mauris id risus ultrices faucibus. Phasellus nec erat odio.`,
      img: [""],
      category: "london",
    },
    {
      id: 4,
      question: `Curabitur augue risus, pulvinar in elementum vitae?`,
      answer: `Vivamus mattis commodo felis, sed scelerisque turpis auctor in. Nulla facilisi. Etiam id rhoncus eros. Integer eu sollicitudin nisi. Aliquam ut massa nec sem laoreet tempor non eu augue. Sed gravida ultrices porta. Ut vel metus tempor, convallis urna at, vehicula lectus.`,
      img: [""],
      category: "canberra",
    },
    {
      id: 5,
      question: `Proin aliquam pretium congue. Sed fringilla venenatis dictum?`,
      answer: `Nam interdum viverra purus quis sagittis. Nunc sed euismod quam, non volutpat diam. Fusce turpis metus, iaculis nec ultrices et, fringilla a felis. In vestibulum, quam eget fermentum ornare, enim ante vehicula est, vel pulvinar odio enim in nibh. Integer eget purus augue.`,
      img: [""],
      category: "newdelhi",
    },
    {
      id: 6,
      question: `Aenean sed metus sapien. In vulputate interdum est, ac iaculis leo pharetra vitae?`,
      answer: `Quisque non libero quis lorem dapibus varius sit amet non velit. Phasellus sed massa vitae nisl bibendum facilisis. Curabitur augue risus, pulvinar in elementum vitae, malesuada et lacus. Ut id ante id neque semper interdum. Proin euismod dolor nec dapibus tempus. Suspendisse et eros non turpis feugiat sodales. Curabitur nec posuere sem.`,
      img: [""],
      category: "washington",
    },
    {
      id: 7,
      question: `Fusce eget purus odio. In dictum tortor at est lobortis accumsan?`,
      answer: `Praesent rutrum, purus eget mollis semper, nisl mauris mollis urna, bibendum vehicula lorem magna non lacus. Aliquam erat volutpat. Vivamus rutrum porta ornare. Nam sem purus, rhoncus sed accumsan vel, venenatis ac sapien. Quisque sodales nisl eget metus convallis tincidunt.`,
      img: [""],
      category: "london",
    },
    {
      id: 8,
      question: `Nullam a purus ac felis aliquam eleifend?`,
      answer: `Curabitur augue risus, pulvinar in elementum vitae, malesuada et lacus. Ut id ante id neque semper interdum. Proin euismod dolor nec dapibus tempus. Suspendisse et eros non turpis feugiat sodales. Curabitur nec posuere sem.`,
      img: [""],
      category: "canberra",
    },
  ];
  
  // class selectors
  const commonIssues = document.querySelector(".common-issues");
  const topics = document.querySelector(".topics");
  const form = document.querySelector(".search-form");
  const input = document.getElementById("search");
  const navBtns = document.querySelectorAll(".nav-btn");
  const icons = document.querySelectorAll(".a-icons");
  
  // function displayManual
  function displayQNS(arrayData) {
    const manuals = arrayData
      .map((ad) => {
        return `<div class="issues-solutions">
        <p class="issue-item">
        ${ad.question}<i class="fas fa-plus"></i>
        <i class="fas fa-minus"></i>
      </p>
      <p class="solution-item">
        ${ad.answer}
      </p>
      <div class="solution-item">
      ${ad.img.map((i) => {
        return `<img src="${i}" class="image-item"/>`;
      })}</div>
      </div>`;
      })
      .join("");
    topics.innerHTML = manuals;
    toggleSolutions();
  }
  displayQNS(database);
  
  // class selectors
  const questions = document.querySelectorAll(".issue-item");
  const answers = document.querySelectorAll(".solution-item");
  const questionAnswers = document.querySelectorAll(".issues-solutions");
  
  //function filter questions
  function filterCategory(navs) {
    navs.forEach((btns) => {
      btns.addEventListener("click", (btn) => {
        const btnCategory = btn.currentTarget.dataset.id;
        const itemCategory = database.filter((item) => {
          if (btnCategory === item.category) {
            return item.category;
          }
        });
        if (btnCategory === "all") {
          displayQNS(database);        
        } else {
          displayQNS(itemCategory);  
        }
      });
    });
  }
  filterCategory(navBtns);
  
  // function show hide solutions
  function toggleSolutions() {
    questions.forEach((q) => {
      q.addEventListener("click", (btn) => {
        const current = btn.currentTarget;
        current.classList.toggle("item-bg");
        current.childNodes[1].classList.toggle("hide-item");
        current.childNodes[3].classList.toggle("show-item");      
        answers.forEach((a) => {
          if (current.parentElement === a.parentElement) {
            a.classList.toggle("show-item");          
          }
        });
      });
    });
  }
  toggleSolutions()
  
  
  // // function search texts
  // function filteredItems() {
  //   const value = input.value;
  //   let paragraph;
  //   answers.forEach((a) => {
  //     paragraph = a.textContent;
  //     const regex = new RegExp(value);
  //     paragraph.match(regex, "gi");
  //   });
  //   topics.innerHTML = `<p class="item">${paragraph} </p>`;
  // }
  
  // // event listerns
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   filteredItems();
  // });
  