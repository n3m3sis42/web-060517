let API_BASE_URL = 'https://opentdb.com/api.php?amount=10&type=boolean'

let store = {games: [], questions: []}
let game_id = 0
let question_id = 0

function render(template, selector) {
  $(selector).empty()
  $(selector).html(template)
}

// The object that is solely concerned with making/handling our request and request logic
// How do we build the adapter?

$(function() {
  // document.body.addEventListener('click', function(event) {
  //   if (event.target.id === 'new-game') {
  //     // Fetch my data
  //   } else if (event.target.className === 'question-answer') {
  //     // Answer question
  //   }
  // })

  $('body').on('click', '#easy-game', function(event) {
    // Event delegation

    // Get data from user
    // Update model / get information
    // Render
    fetch(API_BASE_URL + '&difficulty=easy')
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        render(new Game(data.results).template(), '#main-page')
      })
  })

  $('body').on('click', '#medium-game', function(event) {
    // Event delegation
    fetch(API_BASE_URL  + '&difficulty=medium')
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        render(new Game(data.results).template(), '#main-page')
      })
  })

  $('body').on('click', '#hard-game', function(event) {
    // Event delegation
    fetch(API_BASE_URL + '&difficulty=hard')
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        render(new Game(data.results).template(), '#main-page')
      })
  })

  $('body').on('click', '.question-answer', function(event) {
    // Event delegation
    const questionId = parseInt(this.dataset.id)
    const questionVal = !!this.dataset.val
    const question = Question.find(questionId)

    question.answered(question.answer === questionVal)
  })
})

class Game {
  constructor(results) {
    this.id = ++game_id
    this.questions = Question.build(results)
    store.games.push(this)
  }

  el() {
    return $(`#game-${this.id}`)
  }

  template() {
    return `
    <div class="game" id="game-${this.id}">
      <h1>Game ${this.id}</h1>
      ${this.questions.map(question => question.template()).join("\n")}
      <button id="easy-game">Start easy Game</button>
      <button id="medium-game">Start medium Game</button>
      <button id="hard-game">Start hard Game</button>
    </div>
    `
  }
}

class Question {
  static build(questions) {
    return questions.map(function(question) {
      return new Question(
        question.question,
        question.category,
        question.difficulty,
        question.correct_answer,
      )
    })
  }

  static find(id) {
    return store.questions.filter(function(question) {
      return question.id === id
    })[0]
  }

  constructor(text, category, difficulty, correctAnswer) {
    this.id = ++question_id
    this.text = text
    this.category = category
    this.difficulty = difficulty
    this.answer = correctAnswer === 'True' ? true : false
    store.questions.push(this)
  }

  el() {
    return $(`#question-${this.id}`)
  }

  answered(val) {
    this.correct = val
    this.el().addClass(`correct-answer-${val}`)
    this.el().find('button').attr('disabled', 'disabled')
  }

  template() {
    return `
      <div class="question" id="question-${this.id}">
        <h2 class="question-title">${this.text}</h2>
        <h3 class="question-category">${this.category}</h3>
        <h4 class="question-difficulty">${this.difficulty}</h4>

        <button class="question-answer question-true" data-id="${this.id}" data-val="1">True</button>
        <button class="question-answer question-false" data-id="${this.id}" data-val="0">False</button>
      </div>
    `
  }
}
