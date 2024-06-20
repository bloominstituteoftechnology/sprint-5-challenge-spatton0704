const { screen, fireEvent, within } = require('@testing-library/dom')
require('@testing-library/jest-dom')
const { version } = require('./package.json')
const { server } = require('./backend/mock')
const { learners, mentors } = require('./backend/data')
const { sprintChallenge5 } = require('./frontend/index')

const waitForOptions = { timeout: 150 } // so Codegrade does not take forever
const queryOptions = { exact: false }

beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
beforeEach(async () => {
  document.querySelector('body').innerHTML = `
<header>
  <h1>Sprint 5 Challenge Submission</h1>
  <h2>Learner Cards</h2>
  <p class="info">Fetching learner cards...</p>
</header>
<section>
  <div class="cards">
    <!-- Learner cards are injected here by index.js script -->
  </div>
</section>
<footer></footer>`
  await sprintChallenge5()
})

async function firstCardRender() {
  const bob = await screen.findByText('Bob Johnson', queryOptions, waitForOptions)
  expect(bob).toBeInTheDocument()
}

describe('Sprint Challenge 5', () => {
  describe('Sprint setup', () => {
    test('👉 [1] Version of challenge is valid', () => {
      const versions = ['1.0.0']
      expect(versions.indexOf(version)).toBeGreaterThan(-1)
    })
    test('👉 [2] The sprintChallenge5 function does not crash', async () => {
      await expect(sprintChallenge5()).resolves.not.toThrowError()
    })
    test('👉 [3] The code inside the script is clean', () => {
      expect(window.aidgfuioghausfdu).not.toBeDefined()
    })
  })
  describe('Initial HTML', () => {
    test('👉 [4] <h1> text is "Sprint 5 Challenge Submission"', () => {
      screen.getByText('Sprint 5 Challenge Submission')
    })
    test('👉 [5] <h2> text is "Learner Cards"', () => {
      screen.getByText('Learner Cards')
    })
    test('👉 [6] <footer> text is "© BLOOM INSTITUTE OF TECHNOLOGY"', async () => {
      screen.getByText('© BLOOM INSTITUTE OF TECHNOLOGY', queryOptions)
    })
  })
  describe('Successful Axios requests and DOM manipulation', () => {
    test('👉 [7] <p class="info"> text is "No learner is selected" after rendering cards', async () => {
      await firstCardRender()
      screen.getByText('No learner is selected')
    })
    test('👉 [8] <div class="cards"> container holds 16 cards', async () => {
      await firstCardRender()
      expect(document.querySelector('.cards').children).toHaveLength(16)
    })
    test('👉 [9] <div class="card"> each card has a single class name "card"', async () => {
      await firstCardRender()
      expect(document.querySelectorAll('.card')).toHaveLength(16)
      expect(document.querySelectorAll('.card.selected')).toHaveLength(0)
    })
    test('👉 [10] <h3> inside each card displays the proper name', async () => {
      await firstCardRender()
      const h3 = document.querySelectorAll('.card h3')
      learners.forEach((l, idx) => {
        l.fullName === h3[idx].textContent
      })
    })
    test('👉 [11] <div> inside each card displays the proper email', async () => {
      await firstCardRender()
      const div = document.querySelectorAll('.card div')
      learners.forEach((l, idx) => {
        l.email === div[idx].textContent
      })
    })
    test('👉 [12] <h4> inside each card displays the text "Mentors"', async () => {
      await firstCardRender()
      const h4 = document.querySelectorAll('.card h4')
      h4.forEach(h => {
        expect(h.textContent).toBe('Mentors')
      })
    })
    test('👉 [13] <ul> inside each card displays the correct number of mentors', async () => {
      await firstCardRender()
      const unorderedLists = document.querySelectorAll('.card ul')
      unorderedLists.forEach((ul, idx) => {
        const lis = ul.querySelectorAll('li')
        const ids = learners[idx].mentors
        expect(lis.length).toBe(ids.length)
      })
    })
    test('👉 [14] <li>s inside each card contain the correct mentor names', async () => {
      await firstCardRender()
      const unorderedLists = document.querySelectorAll('.card ul')
      unorderedLists.forEach((ul, idx) => {
        const lis = ul.querySelectorAll('li')
        const ids = learners[idx].mentors
        const objs = ids.map(id => mentors.find(m => m.id == id))
        const namesFromDOM = Array.from(lis).map(l => l.textContent)
        const namesFromData = objs.map(o => `${o.firstName} ${o.lastName}`)
        expect(namesFromDOM.sort()).toMatchObject(namesFromData.sort())
      })
    })
    test('👉 [15] <ul> the mentors are hidden on page load', async () => {
      await firstCardRender()
      const cards = document.querySelectorAll('.card')
      cards.forEach(c => {
        const ul = c.querySelector('ul')
        const h4 = c.querySelector('h4')
        expect(ul).not.toBeVisible()
        expect(h4.className).toBe('closed')
      })
    })
  })
  describe('Card Interactivity', () => {
    test('👉 [16] <div class="card selected"> clicking on a card toggles a class of "selected" on it', async () => {
      await firstCardRender()
      const card = document.querySelector('.card:nth-child(1)')
      expect(card.classList.contains('selected')).toBe(false)
      fireEvent.click(card)
      expect(card.classList.contains('selected')).toBe(true)
      fireEvent.click(card)
      expect(card.classList.contains('selected')).toBe(false)
    })
    test('👉 [17] <p class="info"> selecting a card displays the text "The selected learner is <name>"', async () => {
      await firstCardRender()
      const card1 = document.querySelector('.card:nth-child(1)')
      const card2 = document.querySelector('.card:nth-child(2)')
      const card3 = document.querySelector('.card:nth-child(3)')
      fireEvent.click(card1)
      expect(screen.queryByText('The selected learner is Bob Johnson')).toBeVisible()
      fireEvent.click(card2)
      expect(screen.queryByText('The selected learner is Bob Johnson')).not.toBeInTheDocument()
      expect(screen.queryByText('The selected learner is Samantha Richards')).toBeVisible()
      fireEvent.click(card3)
      expect(screen.queryByText('The selected learner is Samantha Richards')).not.toBeInTheDocument()
      expect(screen.queryByText('The selected learner is Harry Potter')).toBeVisible()
    })
    test('👉 [18] <p class="info"> de-selecting all cards displays the text "No learner is selected"', async () => {
      await firstCardRender()
      const card = document.querySelector('.card:nth-child(1)')
      fireEvent.click(card)
      fireEvent.click(card)
      expect(screen.queryByText('No learner is selected')).toBeVisible()
    })
    test('👉 [19] <div class="card"> clicking on a card de-selects any other card that may be selected', async () => {
      await firstCardRender()
      const card1 = document.querySelector('.card:nth-child(1)')
      const card2 = document.querySelector('.card:nth-child(2)')
      const card3 = document.querySelector('.card:nth-child(3)')
      fireEvent.click(card1)
      fireEvent.click(card2)
      expect(card1.classList.contains('selected')).toBe(false)
      expect(card2.classList.contains('selected')).toBe(true)
      fireEvent.click(card3)
      expect(card2.classList.contains('selected')).toBe(false)
      expect(card3.classList.contains('selected')).toBe(true)
    })
  })
  // describe('Optional goals', () => {
  //   test('👉 [20] <h3> selecting a card causes the learner ID to display next to the name', async () => {
  //     await firstCardRender()
  //     const card = document.querySelector('.card:nth-child(1)')
  //     expect(within(card).queryByText('Bob Johnson, ID 6')).not.toBeInTheDocument()
  //     fireEvent.click(card)
  //     expect(within(card).queryByText('Bob Johnson, ID 6')).toBeInTheDocument()
  //     fireEvent.click(card)
  //     expect(within(card).queryByText('Bob Johnson, ID 6')).not.toBeInTheDocument()
  //   })
  //   test('👉 [21] <h4 class="open"> clicking on "Mentors" heading toggles visibility of list of mentors', async () => {
  //     // Repeatedly clicking on the h4 of a card causes the unordered list of mentors to switch
  //     // from visible to invisible or vice-versa.
  //     await firstCardRender()
  //     const h4 = document.querySelector('.card:nth-child(4) h4')
  //     fireEvent.click(h4)
  //     expect(h4.classList.contains('closed')).toBe(false)
  //     expect(h4.classList.contains('open')).toBe(true)
  //     expect(h4.nextElementSibling).toBeVisible()
  //     fireEvent.click(h4)
  //     expect(h4.classList.contains('closed')).toBe(true)
  //     expect(h4.classList.contains('open')).toBe(false)
  //     expect(h4.nextElementSibling).not.toBeVisible()
  //   })
  //   test('👉 [22] <h4 class="open"> clicking on "Mentors" heading can select a card, but not deselect it', async () => {
  //     // This means for example that, when clicking on the h4 of a de-selected card, it becomes selected and at the
  //     // same time the visibility of the mentors list switches (from visible to invisible or vice-versa). However,
  //     // when clicking again on the h4, the visibility of mentors switches, but the card does not become de-selected.
  //     await firstCardRender()
  //     const card = document.querySelector('.card:nth-child(8)')
  //     const h4 = card.querySelector('h4')
  //     fireEvent.click(h4)
  //     expect(card.classList.contains('selected')).toBe(true)
  //     fireEvent.click(h4)
  //     expect(card.classList.contains('selected')).toBe(true)
  //   })
  //   test('👉 [23] <ul> the visibility of the mentors list is preserved on the old card, when selecting a new one', async () => {
  //     // This means for example that, when selecting a new card by clicking on its h4, the visibility of the mentors
  //     // list on the new card switches (from visible to invisible or vice-versa), but the visibility of the mentors
  //     // list on the old card stays the way we left it
  //     await firstCardRender()
  //     const cardA = document.querySelector('.card:nth-child(8)')
  //     const cardB = document.querySelector('.card:nth-child(2)')
  //     const h4A = cardA.querySelector('h4')
  //     const h4B = cardB.querySelector('h4')
  //     const ulA = cardA.querySelector('ul')
  //     const ulB = cardB.querySelector('ul')
  //     fireEvent.click(h4A)
  //     expect(cardA.classList.contains('selected')).toBe(true)
  //     expect(ulA).toBeVisible()
  //     fireEvent.click(h4B)
  //     expect(cardA.classList.contains('selected')).not.toBe(true)
  //     expect(cardB.classList.contains('selected')).toBe(true)
  //     expect(ulA).toBeVisible()
  //     expect(ulB).toBeVisible()
  //     fireEvent.click(h4A)
  //     expect(cardA.classList.contains('selected')).toBe(true)
  //     expect(cardB.classList.contains('selected')).not.toBe(true)
  //     expect(ulA).not.toBeVisible()
  //     expect(ulB).toBeVisible()
  //     fireEvent.click(h4B)
  //     expect(cardA.classList.contains('selected')).not.toBe(true)
  //     expect(cardB.classList.contains('selected')).toBe(true)
  //     expect(ulA).not.toBeVisible()
  //     expect(ulB).not.toBeVisible()
  //     fireEvent.click(cardA)
  //     expect(cardA.classList.contains('selected')).toBe(true)
  //     expect(cardB.classList.contains('selected')).not.toBe(true)
  //     expect(ulA).not.toBeVisible()
  //     expect(ulB).not.toBeVisible()
  //   })
  // })
})
