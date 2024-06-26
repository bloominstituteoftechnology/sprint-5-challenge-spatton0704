async function sprintChallenge5() { // Note the async keyword so you can use `await` inside sprintChallenge5
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇

  // 👇 ==================== TASK 1 START ==================== 👇

  // 🧠 Use Axios to GET learners and mentors.
  // ❗ Use the variables `mentors` and `learners` to store the data.
  // ❗ Use the await keyword when using axios.

  let mentors = [ { id: 12,
    firstName: "Ada",
    lastName: "Lovelace"
  },
  {
    id: 78,
    firstName: "Bill",
    lastName: "Gates"
  },
  {
    id: 63,
    firstName: "Brendan",
    lastName: "Eich"
  },
  {
    id: 42,
    firstName: "Brian",
    lastName: "Kernighan"
  },
  {
    id: 94,
    firstName: "Dan",
    lastName: "Ingalls"
  },
  {
    id: 17,
    firstName: "Grace",
    lastName: "Hopper"
  },
  {
    id: 7,
    firstName: "Guido",
    lastName: "van Rossum"
  },
  {
    id: 83,
    firstName: "James",
    lastName: "Gosling"
  },
  {
    id: 51,
    firstName: "Linus",
    lastName: "Torvalds"
  },
  {
    id: 67,
    firstName: "Margaret",
    lastName: "Hamilton"
  },
  {
    id: 60,
    firstName: "Mark",
    lastName: "Zuckerberg"
  },
  {
    id: 25,
    firstName: "Martin",
    lastName: "Fowler"
  },
  {
    id: 88,
    firstName: "Mary",
    lastName: "Shaw"
  },
  {
    id: 71,
    firstName: "Mitchell",
    lastName: "Hashimoto"
  },
  {
    id: 95,
    firstName: "Rasmus",
    lastName: "Lerdorf"
  },
  {
    id: 14,
    firstName: "Robert",
    lastName: "Martin"
  },
  {
    id: 32,
    firstName: "Sergey",
    lastName: "Brin"
  },
  {
    id: 49,
    firstName: "Sheryl",
    lastName: "Sandberg"
  },
  {
    id: 58,
    firstName: "Yukihiro",
    lastName: "Matsumoto"
  }
];

  let learners = [{
    id: 6,
    fullName: "Bob Johnson",
    email: "bob.johnson@example.com",
    mentors: [78, 17]
  },
  {
    id: 52,
    fullName: "Samantha Richards",
    email: "samantha.richards@example.com",
    mentors: [12, 83]
  },
  {
    id: 84,
    fullName: "Harry Potter",
    email: "harry.potter@example.com",
    mentors: [71, 95]
  },
  {
    id: 18,
    fullName: "Gina Smith",
    email: "gina.smith@example.com",
    mentors: [32]
  },
  {
    id: 77,
    fullName: "Max Power",
    email: "max.power@example.com",
    mentors: [51, 94]
  },
  {
    id: 68,
    fullName: "Daisy Duke",
    email: "daisy.duke@example.com",
    mentors: [58, 83, 49]
  },
  {
    id: 1,
    fullName: "Jack Sparrow",
    email: "jack.sparrow@example.com",
    mentors: [12, 67]
  },
  {
    id: 48,
    fullName: "Homer Simpson",
    email: "homer.simpson@example.com",
    mentors: [42]
  },
  {
    id: 97,
    fullName: "Luna Lovegood",
    email: "luna.lovegood@example.com",
    mentors: [12, 17, 25, 58]
  },
  {
    id: 3,
    fullName: "Joe Bloggs",
    email: "joe.bloggs@example.com",
    mentors: [83]
  },
  {
    id: 35,
    fullName: "Bilbo Baggins",
    email: "bilbo.baggins@example.com",
    mentors: [51, 60, 95]
  },
  {
    id: 29,
    fullName: "Marge Simpson",
    email: "marge.simpson@example.com",
    mentors: [78, 14]
  },
  {
    id: 8,
    fullName: "Peter Parker",
    email: "peter.parker@example.com",
    mentors: [51, 83, 88]
  },
  {
    id: 57,
    fullName: "Betty Boop",
    email: "betty.boop@example.com",
    mentors: [17, 71, 42]
  },
  {
    id: 22,
    fullName: "Mickey Mouse",
    email: "mickey.mouse@example.com",
    mentors: [83]
  },
  {
    id: 91,
    fullName: "Daffy Duck",
    email: "daffy.duck@example.com",
    mentors: [63, 71]
  }
];


  // 👆 ==================== TASK 1 END ====================== 👆

  // 👇 ==================== TASK 2 START ==================== 👇

  // 🧠 Combine learners and mentors.
  // ❗ At this point the learner objects only have the mentors' IDs.
  // ❗ Fix the `learners` array so that each learner ends up with this exact structure:
  // {
  //   id: 6,
  //   fullName: "Bob Johnson",
  //   email: "bob.johnson@example.com",
  //   mentors: [
  //     "Bill Gates",
  //     "Grace Hopper"
  //   ]`
  // }
  const combinedData = {
    mentors: [
      { id: 12, firstName: "Ada", lastName: "Lovelace" },
      { id: 78, firstName: "Bill", lastName: "Gates" },
      { id: 63, firstName: "Brendan", lastName: "Eich" },
      { id: 42, firstName: "Brian", lastName: "Kernighan" },
      { id: 94, firstName: "Dan", lastName: "Ingalls" },
      { id: 17, firstName: "Grace", lastName: "Hopper" },
      { id: 7, firstName: "Guido", lastName: "van Rossum" },
      { id: 83, firstName: "James", lastName: "Gosling" },
      { id: 51, firstName: "Linus", lastName: "Torvalds" },
      { id: 67, firstName: "Margaret", lastName: "Hamilton" },
      { id: 60, firstName: "Mark", lastName: "Zuckerberg" },
      { id: 25, firstName: "Martin", lastName: "Fowler" },
      { id: 88, firstName: "Mary", lastName: "Shaw" },
      { id: 71, firstName: "Mitchell", lastName: "Hashimoto" },
      { id: 95, firstName: "Rasmus", lastName: "Lerdorf" },
      { id: 14, firstName: "Robert", lastName: "Martin" },
      { id: 32, firstName: "Sergey", lastName: "Brin" },
      { id: 49, firstName: "Sheryl", lastName: "Sandberg" },
      { id: 58, firstName: "Yukihiro", lastName: "Matsumoto" }
    ],
    learners: [
      {
        id: 6,
        fullName: "Bob Johnson",
        email: "bob.johnson@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 78),
          combinedData.mentors.find(mentor => mentor.id === 17)
        ]
      },
      {
        id: 52,
        fullName: "Samantha Richards",
        email: "samantha.richards@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 12),
          combinedData.mentors.find(mentor => mentor.id === 83)
        ]
      },
      {
        id: 84,
        fullName: "Harry Potter",
        email: "harry.potter@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 71),
          combinedData.mentors.find(mentor => mentor.id === 95)
        ]
      },
      {
        id: 18,
        fullName: "Gina Smith",
        email: "gina.smith@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 32)
        ]
      },
      {
        id: 77,
        fullName: "Max Power",
        email: "max.power@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 51),
          combinedData.mentors.find(mentor => mentor.id === 94)
        ]
      },
      {
        id: 68,
        fullName: "Daisy Duke",
        email: "daisy.duke@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 58),
          combinedData.mentors.find(mentor => mentor.id === 83),
          combinedData.mentors.find(mentor => mentor.id === 49)
        ]
      },
      {
        id: 1,
        fullName: "Jack Sparrow",
        email: "jack.sparrow@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 12),
          combinedData.mentors.find(mentor => mentor.id === 67)
        ]
      },
      {
        id: 48,
        fullName: "Homer Simpson",
        email: "homer.simpson@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 42)
        ]
      },
      {
        id: 97,
        fullName: "Luna Lovegood",
        email: "luna.lovegood@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 12),
          combinedData.mentors.find(mentor => mentor.id === 17),
          combinedData.mentors.find(mentor => mentor.id === 25),
          combinedData.mentors.find(mentor => mentor.id === 58)
        ]
      },
      {
        id: 3,
        fullName: "Joe Bloggs",
        email: "joe.bloggs@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 83)
        ]
      },
      {
        id: 35,
        fullName: "Bilbo Baggins",
        email: "bilbo.baggins@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 51),
          combinedData.mentors.find(mentor => mentor.id === 60),
          combinedData.mentors.find(mentor => mentor.id === 95)
        ]
      },
      {
        id: 29,
        fullName: "Marge Simpson",
        email: "marge.simpson@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 78),
          combinedData.mentors.find(mentor => mentor.id === 14)
        ]
      },
      {
        id: 8,
        fullName: "Peter Parker",
        email: "peter.parker@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 51),
          combinedData.mentors.find(mentor => mentor.id === 83),
          combinedData.mentors.find(mentor => mentor.id === 88)
        ]
      },
      {
        id: 57,
        fullName: "Betty Boop",
        email: "betty.boop@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 17),
          combinedData.mentors.find(mentor => mentor.id === 71),
          combinedData.mentors.find(mentor => mentor.id === 42)
        ]
      },
      {
        id: 22,
        fullName: "Mickey Mouse",
        email: "mickey.mouse@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 83)
        ]
      },
      {
        id: 91,
        fullName: "Daffy Duck",
        email: "daffy.duck@example.com",
        mentors: [
          combinedData.mentors.find(mentor => mentor.id === 63),
          combinedData.mentors.find(mentor => mentor.id === 71)
        ]
      }
    ]
  };
  // 👆 ==================== TASK 2 END ====================== 👆

  const cardsContainer = document.querySelector('.cards')
  const info = document.querySelector('.info')
  info.textContent = 'No learner is selected'


  // 👇 ==================== TASK 3 START ==================== 👇

  for (let learner of learners) { // looping over each learner object

    // 🧠 Flesh out the elements that describe each learner
    // ❗ Give the elements below their (initial) classes, textContent and proper nesting.
    // ❗ Do not change the variable names, as the code that follows depends on those names.
    // ❗ Also, loop over the mentors inside the learner object, creating an <li> element for each mentor.
    // ❗ Fill each <li> with a mentor name, and append it to the <ul> mentorList.
    // ❗ Inspect the mock site closely to understand what the initial texts and classes look like!

    const card = document.createElement('div');
    card.classList.add('learner-card');
  
    const heading = document.createElement('h3');
    heading.classList.add('learner-name');
    heading.textContent = learner.name;
    card.appendChild(heading);
  
    const email = document.createElement('div');
    email.classList.add('learner-email');
    email.textContent = learner.email;
    card.appendChild(email);
  
    const mentorsHeading = document.createElement('h4');
    mentorsHeading.classList.add('mentors-heading');
    mentorsHeading.textContent = 'Mentors:';
    card.appendChild(mentorsHeading);
  
    const mentorsList = document.createElement('ul');
    mentorsList.classList.add('mentor-list');
    for (let mentor of learner.mentors) {
      const mentorItem = document.createElement('li');
      mentorItem.classList.add('mentor-name');
      mentorItem.textContent = mentor;
      mentorsList.appendChild(mentorItem);
    }
    card.appendChild(mentorsList);
  }

    // 👆 ==================== TASK 3 END ====================== 👆

    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    card.appendChild(mentorsList)
    card.dataset.fullName = learner.fullName
    cardsContainer.appendChild(card)

    card.addEventListener('click', evt => {
      const mentorsHeading = card.querySelector('h4')
      // critical booleans
      const didClickTheMentors = evt.target === mentorsHeading
      const isCardSelected = card.classList.contains('selected')
      // do a reset of all learner names, selected statuses, info message
      document.querySelectorAll('.card').forEach(crd => {
        crd.classList.remove('selected')
        crd.querySelector('h3').textContent = crd.dataset.fullName
      })
      info.textContent = 'No learner is selected'
      // conditional logic
      if (!didClickTheMentors) {
        // easy case, no mentor involvement
        if (!isCardSelected) {
          // selecting the card:
          card.classList.add('selected')
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      } else {
        // clicked on mentors, we toggle and select no matter what
        card.classList.add('selected')
        if (mentorsHeading.classList.contains('open')) {
          mentorsHeading.classList.replace('open', 'closed')
        } else {
          mentorsHeading.classList.replace('closed', 'open')
        }
        if (!isCardSelected) {
          // if card was not selected adjust texts
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      }
    })
  }

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`


// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
