async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  /*
    ❗ Read the README.md first! Below is a strategy you can follow to tackle the challenge

    ❗ If you don't like spoilers, feel free to ignore the strategy and come up with your own

    * Fetch learners using Axios or fetch
        * Fetch mentors using Axios or fetch
            * Create a variable to hold the combined data
            * Combine the learners and the mentors to form an array like so:
                [etc
                  {
                    id: 22,
                    email:"mickey.mouse@example.com",
                    fullName: "Mickey Mouse",
                    mentors: ['James Gosling', 'Mary Shaw'] // ❗ actual names instead of IDs!
                  },
                etc]
            * Loop over the array holding the formatted data
                * For each object, make a `div.card` with all its children elements, put it in the DOM
                * Add a click handler to each `div.card`:
                    * If the clicked card does not have a class of 'selected':
                        * Remove that class from any card that has it and add it to the clicked one
                        * Set the correct text in the `div.info`
                    * If the clicked card has a class of 'selected':
                        * Remove the class of 'selected'
                        * Reset the message of the `div.info`

    ❗ Stretch goals (NOT REQUIRED)
        * Make the mentors list expand and collapse like in the mock
        * Make the selected card show the learner ID next to their name
  */

  // fetching the data
  const learnersRes = await axios.get('http://localhost:3003/api/learners')
  const mentorsRes = await axios.get('http://localhost:3003/api/mentors')
  const learners = learnersRes.data
  const mentors = mentorsRes.data
  // setting the info message
  const info = document.querySelector('.info')
  info.textContent = 'No learner is selected'
  // formatting the data so the learners contain the mentor names
  const formattedData = []
  learners.forEach(learner => {
    const result = {
      ...learner,
      mentors: learner.mentors.map(mID => {
        const mentor = mentors.find(mentorObj => mentorObj.id == mID)
        return mentor.firstName + ' ' + mentor.lastName
      })
    }
    formattedData.push(result)
  })
  // looping over the data generating cards
  formattedData.forEach(learner => {
    // creating the elements
    const card = document.createElement('div')
    const name = document.createElement('h3')
    const email = document.createElement('div')
    const mentors = document.createElement('h4')
    const mentorsList = document.createElement('ul')
    // creating the hierarchy of elements
    card.appendChild(name)
    card.appendChild(email)
    card.appendChild(mentors)
    card.appendChild(mentorsList)
    learner.mentors.forEach(mentorName => {
      const li = document.createElement('li')
      li.textContent = mentorName
      mentorsList.appendChild(li)
    })
    // adding initial class names
    card.classList.add('card')
    mentors.classList.add('closed')
    // adding text content of the remaining elements
    name.textContent = learner.fullName
    email.textContent = learner.email
    mentors.textContent = 'Mentors'
    // appending to the DOM
    document.querySelector('.cards').appendChild(card)
    card.addEventListener('click', evt => {
      if (!card.classList.contains('selected')) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'))
        card.classList.add('selected')
        info.textContent = `The selected learner is ${learner.fullName}`
      } else {
        info.textContent = 'No learner is selected'
        card.classList.remove('selected')
      }
    })
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
