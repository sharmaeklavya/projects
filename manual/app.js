const tfManual = [
  {
    id: 1,
    question: `A stduent doesn’t have UCOMMONS set up yet. Can he/she join the lecture?`,
    answer: `Student should first contact their Program Coordinator. They MUST have UCommons credentials to join a class. This is covered in the student orientation. 
      <br /> <br /> OR: If instructor wants to allow students to audit the class, instructors need to clear this with Course Support/Vicky prior to class. TFs cannot give this permission.
      <br/> <br /> Note: giving student direct link will cause security issues and instructors should not share the zoom link with students. Once know a link is shared, report to @Eli to change zoom settings.`,
    img: [""],
    category: "ucommons",
  },
  {
    id: 2,
    question: `Students can't find documents on Ucommons?`,
    answer: `Students can access all course materials from the following steps:
    <br /> Step 1: They are logged into UCommons
    <br /> Step 2: They click the title of the lesson (as shown below)
    <br /> Step 3: The link will take students into the Modules page in Canvas (https://ucommons.instructure.com/). Ask them to click on “Directions” and look for the materials there.
    <br /> Step 4: Other materials may be found in folders. In the same Canvas view, click on “Files,” then open the folder for this lesson and then the “live lecture resources” folder.
    <br /> Step 5: Course level materials that are related to multiple lessons can be found in some courses (faculty option) by clicking on “Modules” and scrolling to the top of the page.
    <br /> <br />Alternatively, students should be able to quickly find lecture slides and handouts after clicking the “join lecture” button on UCOMMONS. Slides can be found on the Slides tab if the
    faculty has loaded them in the “slides” folder in Canvas files. Handouts are linked under “Class Resources” if they are in the “live lecture resources” folder in Canvas, and published.
    <br /> <br />If all students cannot locate materials, escalate to TF Managers (Ben, Alec, Dylan) – the reason is that it’s not published or not in Canvas at all.`,
    img: [
      "images/questiontwo1.jpg",
      "images/questiontwo2.jpg",
      "images/questiontwo3.jpg",
      "images/questiontwo4.jpg",
      "images/questiontwo5.jpg",
      "images/questiontwo6.jpg",
    ],
    category: "ucommons",
  },
  {
    id: 3,
    question: `Students not showing up in Home Studio?`,
    answer: `Check the participant list on zoom to make sure there are students in the meeting.
    <br /> <br />OR: Students may be in wrong lecture.
    <br /> <br />OR: Students/Instructors may need to refresh [exit and re-join the lecture].
    <br /> <br />OR: Students did not join zoom through UCOMMONS or joined zoom with different account. Ask to refresh page, then ask them to leave Zoom, click “Join Lecture” and “Join Zoom” button.
    <br /> <br />OR: If instructors cannot see all students in Home Studio, it might because the Home Studio is launched to the wrong course (in situations where the instructor is teaching two different courses). The TF who launched the HomeStudio will need to end the first session and then launch the second session. Please note, the start and end times for each lesson is in director. Remember to come back and end a session. At the end of the class session (or your shift) remember to end all non-running live lectures.`,
    img: ["images/questionthree1.jpg"],
    category: "homestudio",
  },
  {
    id: 4,
    question: `Students cannot hear the audio?`,
    answer: `The instructor needs to share screen and check the box “share computer sound”`,
    img: ["images/questionfour1.jpg"],
    category: "zoom",
  },
  {
    id: 5,
    question: `Students cannot view the slide being shared by professor?`,
    answer: `Double check with the instructor that he/she has shared screen with the students. Remind the instructor to move the documents/slide to the shared screen.`,
    img: [""],
    category: "zoom",
  },
  {
    id: 6,
    question: `Students or Professors cannot login into UCOMMONS?`,
    answer: `Navigate to the Ucommons login page and click on the “Contact Technical Support” - just beneath the login button;
    <br /> <br /> A form should appear for you entitled “Contact Support” in which you must fill in your name, email, location, help request type, and then a small detailed write-up of the issue, as well as any screenshot’s that might help identify the issue.
    <br /> <br /> Once that information is all set scroll to the bottom and submit.`,
    img: ["images/questionsix1.jpg"],
    category: "ucommons",
  },
  {
    id: 7,
    question: `Students’ video do not enlarge when they speak?`,
    answer: `Instructor needs to click on the 'Automatic' while in Lecture Mode.`,
    img: ["images/questionseven1.jpg"],
    category: "ucommons",
  },
  {
    id: 8,
    question: `If an instructor asks, "How do I find roster"?`,
    answer: `Go to dashboard in UCommons (Join UCommons or leave Live Lecture to see dashboard) and then select “Course Roster” on the Course Card.`,
    img: ["images/questioneight1.jpg"],
    category: "ucommons",
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
function displayQNS(tfManual) {
  const manuals = tfManual
    .map((tf) => {
      return `<div class="issues-solutions">
      <p class="issue-item">
      ${tf.question}<i class="fas fa-plus"></i>
      <i class="fas fa-minus"></i>
    </p>
    <p class="solution-item">
      ${tf.answer}
    </p>
    <div class="solution-item">
    ${tf.img.map((i) => {
      return `<img src="${i}" class="image-item"/>`;
    })}</div>
    </div>`;
    })
    .join("");
  topics.innerHTML = manuals;
  
}
displayQNS(tfManual);

// class selectors
const questions = document.querySelectorAll(".issue-item");
const answers = document.querySelectorAll(".solution-item");
const questionAnswers = document.querySelectorAll(".issues-solutions");

//function filter questions
function filterCategory(navs) {
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
filterCategory(navBtns);

// function show hide solutions
function toggleSolutions(questions) {
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
toggleSolutions(questions);


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
