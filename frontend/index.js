
async function sprintChallenge5() { // Note the async keyword so you can use `await` inside sprintChallenge5
    // 👇 WORK ONLY BELOW THIS LINE 👇
    // 👇 WORK ONLY BELOW THIS LINE 👇
    // 👇 WORK ONLY BELOW THIS LINE 👇
  
    // 👇 ==================== TASK 1 START ==================== 👇
  
    // 🧠 Use Axios to GET learners and mentors.
    // ❗ Use the variables `mentors` and `learners` to store the data.
    // ❗ Use the await keyword when using axios.
  
 let mentors, learners; 

    try {
      const mentorsResponse = await axios.get('http://localhost:3003/api/mentors');
      const learnersResponse = await axios.get('http://localhost:3003/api/learners');
      mentors = mentorsResponse.data;
      learners = learnersResponse.data;
  } catch (error) {
      console.error("Error fetching data: ", error);
  }


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
    const mentorMap = mentors.reduce((map, mentor) => {
      map[mentor.id] = mentor.name;
      return map;
  }, {});

  
  learners = learners.map(learner => ({
      ...learner,
      mentors: learner.mentors.map(mentorId => mentorMap[mentorId])
  }));


    // 👆 ==================== TASK 2 END ====================== 👆
  
    const cardsContainer = document.querySelector('.cards');
    const info = document.querySelector('.info');
    info.textContent = 'No learner is selected';
  
    // 👇 ==================== TASK 3 START ==================== 👇
  
    for (let learner of learners) { 
  
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
      heading.textContent = learner.fullName;
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
    
      // 👆 ==================== TASK 3 END ====================== 👆
  
      // 👆 WORK ONLY ABOVE THIS LINE 👆
      // 👆 WORK ONLY ABOVE THIS LINE 👆
      // 👆 WORK ONLY ABOVE THIS LINE 👆
      card.appendChild(mentorsList)
      card.dataset.fullName = learner.fullName
      cardsContainer.appendChild(card)
  
      card.addEventListener('click', evt => {
        const mentorsHeading = card.querySelector('h4')
        
        const didClickTheMentors = evt.target === mentorsHeading
        const isCardSelected = card.classList.contains('selected')
        
        document.querySelectorAll('.card').forEach(crd => {
          crd.classList.remove('selected')
          crd.querySelector('h3').textContent = crd.dataset.fullName
        })
        info.textContent = 'No learner is selected'
        
        if (!didClickTheMentors) {
          
          if (!isCardSelected) {
            
            card.classList.add('selected')
            heading.textContent += `, ID ${learner.id}`
            info.textContent = `The selected learner is ${learner.fullName}`
          }
        } else {
          
          card.classList.add('selected')
          if (mentorsHeading.classList.contains('open')) {
            mentorsHeading.classList.replace('open', 'closed')
          } else {
            mentorsHeading.classList.replace('closed', 'open')
          }
          if (!isCardSelected) {
            
            heading.textContent += `, ID ${learner.id}`
            info.textContent = `The selected learner is ${learner.fullName}`
          }
        }
      })
    }
    const footer = document.querySelector('footer')
    const currentYear = new Date().getFullYear()
    footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  
}
  // ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
  if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
  else sprintChallenge5()
