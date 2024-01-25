let question

document.addEventListener('DOMContentLoaded', function (e) {
  toggleQuestions()
})

function toggleQuestions() {
  document.getElementById('q1').addEventListener('click', function () {
    togglestuff('q1')
  })

  document.getElementById('q2').addEventListener('click', function () {
    togglestuff('q2')
  })

  document.getElementById('q3').addEventListener('click', function () {
    togglestuff('q3')
  })

  document.getElementById('q4').addEventListener('click', function () {
    togglestuff('q4')
  })
}

function togglestuff(question) {
  document.getElementById(`${question}-answer`).classList.toggle('hidden')
  document.getElementById(`${question}-plus`).classList.toggle('hidden')
  document.getElementById(`${question}-minus`).classList.toggle('hidden')
}
