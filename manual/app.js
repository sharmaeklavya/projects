const tfManual = [
  {
    id: 1,
    question: `A student does not have Ucommons set up yet. Can he/she join the lecture?`,
    answer: `Student should first contact their Program Coordinator. They MUST have UCommons credentials to join a class. This is covered in the student orientation. 
      <br /> <br /> OR: If instructor wants to allow students to audit the class, instructors need to clear this with Course Support/Vicky prior to class. TFs cannot give this permission.
      <br/> <br /> Note: giving student direct link will cause security issues and instructors should not share the zoom link with students. Once know a link is shared, report to @Eli to change zoom settings.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 2,
    question: `Students cannot find documents on Ucommons?`,
    answer: `Students can access all course materials from the following steps:
    <br /> Step 1: They are logged into UCommons
    <br /> Step 2: They click the title of the lesson (as shown below)
    <br /> Step 3: The link will take students into the Modules page in Canvas (https://ucommons.instructure.com/). Ask them to click on “Directions” and look for the materials there.
    <br /> Step 4: Other materials may be found in folders. In the same Canvas view, click on "Files", then open the folder for this lesson and then the “live lecture resources” folder.
    <br /> Step 5: Course level materials that are related to multiple lessons can be found in some courses (faculty option) by clicking on “Modules” and scrolling to the top of the page.
    <br /> <br />Alternatively, students should be able to quickly find lecture slides and handouts after clicking the “join lecture” button on Ucommons. Slides can be found on the Slides tab if the
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
    <br /> <br />OR: Students did not join zoom through Ucommons or joined zoom with different account. Ask to refresh page, then ask them to leave Zoom, click “Join Lecture” and “Join Zoom” button.
    <br /> <br />OR: If instructors cannot see all students in Home Studio, it might because the Home Studio is launched to the wrong course (in situations where the instructor is teaching two different courses). The TF who launched the HomeStudio will need to end the first session and then launch the second session. Please note, the start and end times for each lesson is in director. Remember to come back and end a session. At the end of the class session (or your shift) remember to end all non-running live lectures.`,
    img: ["images/questionthree1.jpg"],
    category: "homestudio",
  },
  {
    id: 4,
    question: `Students cannot hear the audio?`,
    answer: `The instructor needs to share screen and check the box "share computer sound"`,
    img: ["images/questionfour1.jpg"],
    category: "zoom",
  },
  {
    id: 5,
    question: `Students cannot view the slide being shared by professor?`,
    answer: `Double check with the instructor that he/she has shared screen with the students. Remind the instructor to move the documents/slide to the shared screen.`,
    img: [],
    category: "zoom",
  },
  {
    id: 6,
    question: `Students or Professors cannot login into Ucommons?`,
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
    answer: `Go to dashboard in UCommons (Join UCommons or leave Live Lecture to see dashboard) and then select "Course Roster" on the Course Card.`,
    img: ["images/questioneight1.jpg"],
    category: "ucommons",
  },
  {
    id: 9,
    question: `Instructor not seeing hand-raises?`,
    answer: `Students or instructor may be in wrong lecture.
    <br /> <br /> OR: Students or instructor may need to refresh Ucommons. 
    <br /> <br /> OR: Student is raised hand through Zoom not Ucommons.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 10,
    question: `Poll/Short answers-questions can’t run?`,
    answer: `Something not ended, ask the instructor to go to "all" and look for the red square. End running question. It should be able run new poll/short answers now.    
    <br /> <br /> OR: If the current session doesn’t have a question running, it is likely that something not ended in the previous sessions. The instructor should go to "Ucommons" then	"last lecture review" (if it was earlier lecture, click "prev lesson")	and end the open question.`,
    img: ["images/questionten1.jpg",
    "images/questionten2.jpg"],
    category: "ucommons",
  },
  {
    id: 11,
    question: `ADD Poll/Short Answer questions during live lecture?`,
    answer: `Step 1:	Direct the instructor to leave lecture.
    <br /> <br />Step 2: Select "Preview Lecture Content".
    <br /> <br />Step 3:	Create new or edit Poll or Short Answers.
    <br /> <br />Step 4	Return to "Dashboardd"
    <br /> <br />Step 5: Rejoin live lecture`,
    img: [],
    category: "ucommons",
  },
  {
    id: 12,
    question: `EDIT Poll/Short answer?`,
    answer: `Step 1: Go to Poll or Short answer tab.
    <br /> <br />Step 2: Click on the poll or short answer to be edited.
    <br /> <br />Step 3:	Click the “Edit” button.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 13,
    question: `Sharing Poll/short answer results with students?`,
    answer: `Move the entire Chrome browser to the "Share" screen, or choose the Chrome browser to "Share" with Zoom. Results do not go to students' desktop.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 14,
    question: `Don't have control of white board (cannot find toolbar or move pages)?`,
    answer: `Check if the instructor has logged in with own account and not as a guest.`,
    img: [],
    category: "whiteboard",
  },
  {
    id: 15,
    question: `When the instructor switch pages, students don’t follow?`,
    answer: `Make sure the button in the upper right corner of the page is checked by the instructor. The icon should have a raised baton.`,
    img: [],
    category: "whiteboard",
  },
  {
    id: 16,
    question: `Claim Host/Breakout Room - instructors don’t have access to breakout rooms?`,
    answer: `The instructor needs to "Claim Host":
    <br/> i.	Tell the instructor you will put the answer in chat in Zoom.
    <br/> ii.	Start a PRIVATE CHAT in Zoom, and remind them...
    <br/> iii.	To go to participants and "Claim Host" using either the Host key 020202 (if they do not have a live home studio) or their 2 digit Home Studio number + 1234.
    <br/> <br/> NOTE: the Home studio number should be on a label affixed to the front of their Home Studio. If it is not, ask them to look at the back of the machine for a two digit number. The first home studios have it written by hand on a piece of masking tape.`,
    img: [],
    category: "zoom",
  },
  {
    id: 17,
    question: `Breakout rooms – in-class assignment?`,
    answer: `if the instructor didn't pre-assign breakout rooms, they can randomly assign during the class from zoom.
    <br /> <br />Note that in a large class, it's better to choose "automatically" to save time. For a smaller class, one can use "manually" and select the students to go into each breakout room. 
    <br /> <br />Note that there is no way to "save" room assignments from one Zoom session to the next.`,
    img: [],
    category: "zoom",
  },
  {
    id: 18,
    question: `Breakout rooms – Pre-assignment?`,
    answer: `Instructors who wish to pre-assign students to Zoom breakout rooms should make a list of the rooms, and create the rooms manually after Zoom starts (they must “claim host”) but before class starts. Then during the lesson they must take the time to move students into the rooms. Students cannot be pre-assigned to a room before they join Zoom. They must be logged into Zoom already before they can be assigned.      
    <br /> <br />Students who do not join from the Zoom downloadable desktop app, but come in through a browser or phone app will not be able to join Zoom. Ask the students to join via the Zoom app.`,
    img: [],
    category: "zoom",
  },
  {
    id: 19,
    question: `Breakout rooms – not urgent issue (e.g. professor say ok, I don’t have to use it for this lecture)?`,
    answer: `TFs can provide resources and links to Zoom basics (1-12 list) 
    <br /> https://support.zoom.us/hc/en-us/articles/206476093-Getting-Started-with-Video-Breakout-Rooms`,
    img: [],
    category: "zoom",
  },
  {
    id: 20,
    question: `When UCommons is maximized, there is no access to the help button or some other resources located at the periphery of the screen; sometimes it's also not possible to scroll to see the entire frame. Is this something that can be fixed?`,
    answer: `Let the instructor know they can reduce the size of the Chrome window by holding down the Control button (or the Command button for Mac) and hitting the minus sign. Ctrl – will zoom out so you can see more of your screen. 
    <br /> <br />They can also go to the Chrome menu and choose Zoom In or Zoom out.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 21,
    question: `Instructor only wants to see gallery mode in Home Studio?`,
    answer: `They can enter into Manual mode and select the Rear Camera. This will create that setting for them.`,
    img: [],
    category: "homestudio",
  },
  {
    id: 22,
    question: `Instructor needs to change course material (For escalating to Course Support)?`,
    answer: `Please comment HANDOFF and tag @Vicki Rath, @Jonathan Davis, @faith.li, and @Eli.
    <br /> <br />Course support email: course.support@idesignedu.org.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 23,
    question: `Instructor wants last minute changes to PPT?`,
    answer: `Say, unfortunately I cannot help with this immediately, you would need to email course.support@idesignedu.org to update the material. We would recommend you to share the updated PPT (on Zoom) during this class and tell students that the new slides will be uploaded after the class. 
    <br /> <br />Note: provide course.support@idesignedu.org to the instructor through private zoom chat only.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 24,
    question: `Instructor wants to change wording of an assignment?`,
    answer: `Say, "Have you tried to edit it directly in Canvas? As an instructor you will have an "Edit" button on almost every page, with edit tools very similar to any word processing program. After you edit, you will need to save your changes." 
    <br /> <br /> If they cannot find it, Say, unfortunately I cannot help with this immediately. The course support team will be able to help after class. Please contact course.support@idesignedu.org.
    <br /> <br />Note: provide course.support@idesignedu.org to the instructor through private zoom chat only.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 25,
    question: `Instructor asks, "How can I see if a student has completed post/pre work"?`,
    answer: `Say, unfortunately I cannot help with this immediately, you would need to email course.support@idesignedu.org to update the material. We would recommend you to share the updated PPT (on Zoom) during this class and tell students that the new slides will be uploaded after the class. 
    <br /> <br />Note: provide course.support@idesignedu.org to the instructor through private zoom chat only.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 26,
    question: `Instructor can't find today's lecture or  Course card is gone?`,
    answer: `Follow instructions for "Instructor can't find today's lecture – blue Join Lecture button not active. Still no course card?
    <br /> <br />Escalate to TF Managers (Ben, Alec, Dylan).
    <br /> <br />In emergency, Escalate to Curriculum Design (@vickirath in SLACK).`,
    img: [],
    category: "ucommons",
  },
  {
    id: 27,
    question: `Instructor can't find today's lecture – blue Join button not active?`,
    answer: `Check class calendar (have instructor share screen, click Class Calendar as shown). After updating, ask instructor to refresh browser.
    <br /> <br />Edit class to the correct date and time and submit.
    <br /> <br />If this does not work, escalate to TF Managers (@Ben/Alec/Dylan in Slack)`,
    img: [],
    category: "ucommons",
  },
  {
    id: 28,
    question: `Home Studio set-up or launching failure?`,
    answer: `Home Studio might be launched to the wrong course (in situations where the instructor is teaching two different courses). The TF who launched the Home Studio will need to end the first session and then launch the second session. Please note, the start and end times for each lesson is in director. Remember to come back and end a session. At the end of the class session (or your shift) remember to end all non-running live lectures.
    <br /> <br />OR: The instructor might launched the Home Studio too late. Recommend the instructors to have their studios on 90 minutes at least, prior to class. Escalate this to TF managers to relaunch the Home Studio for the instructor.
    <br /> <br />OR: if TF has access to Director/LogMeIn, Log-out of Director. Refresh. Log-in to Director & LogMeIn. Relaunch. If all fail, escalate to TF Manager.`,
    img: [],
    category: "homestudio",
  },
  {
    id: 29,
    question: `Home Studio needs to be relaunched?`,
    answer: `TF can refresh through "Re-start Apps" button.`,
    img: [],
    category: "homestudio",
  },
  {
    id: 30,
    question: `Home Studio is on sleep mode or Home Studio requires a password on Instructor's computer?`,
    answer: `Use LogMeIn to go in and unlock it (or escalate to TF responsible for launching by tagging them).
    <br /> <br />-	Navigate to the Windows Settings page and click the "System" Option on the top left of the window.
    <br /> <br />-	Next Select the “Power & Sleep” Option from the list on the left side of the window.
    <br /> <br />-	Within the Power & Sleep window, there is a drop down menu for “Screen” and “Sleep”. Make sure “Never”	is selected for both. This will ensure the pc sleep function is deactivated.`,
    img: [],
    category: "homestudio",
  },
  {
    id: 31,
    question: `Home Studio is making noise or Instructor hearing feedback?`,
    answer: `End the lecture in Director. Use LogMeIn to disable the audio settings in the Home Studio. Re-launch in Director.
    <br /> <br />Escalate the problem to the TF that is responsible for the lecture.`,
    img: [],
    category: "homestudio",
  },
  {
    id: 32,
    question: `Home Studio computer is turned on but TF can't see it as active in LogMeIn?`,
    answer: `Ask instructor to run a speedtest Fast.com (often instructors have the studio on but not connected to internet).`,
    img: [],
    category: "homestudio",
  },
  {
    id: 33,
    question: `UCommons is slow loading?`,
    answer: `We will escalate this to the technical team. Please also contact Help Desk on UCommons. There is a link on every page of UCommons, including the login page. Unfortunately this will be solved by the next day, please use zoom without Ucommons today.`,
    img: [],
    category: "ucommons",
  },
  {
    id: 34,
    question: `Zoom issues i.e. server down/ can not access any service?`,
    answer: `When problems arise and could not be fixed from our end, it might be caused by Zoom.
    <br /> <br />Here are two links to check Zoom’s status:
    <br /> https://status.zoom.us
    <br /> https://downdetector.com/status/zoom/
    <br /> <br />If so, explain to the instructor that this is a zoom issue and should be resolved by Zoom soon.`,
    img: [],
    category: "zoom",
  },
];

// class selectors
const topics = document.querySelector(".topics");
const form = document.querySelector(".search-form");
const input = document.getElementById("search");
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
      ${tf.question}<i class="fas fa-plus"></i>
      <i class="fas fa-minus"></i>
    </p>
    <p class="solution-item">
      ${tf.answer}
    </p>
    <div class="solution-item">
    ${tf.img.map((i) => {
      return `<img src="${i}" class="image-item"/>`;
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
      current.childNodes[3].classList.toggle("show-item");      
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
