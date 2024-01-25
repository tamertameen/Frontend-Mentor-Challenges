document.addEventListener('DOMContentLoaded', function (e) {
  toggleQuestions()
})

function toggleQuestions() {
  document.getElementById('q1').addEventListener('click', function () {
    document.getElementById('q1-answer').classList.toggle('hidden')
    document.getElementById('q1-plus').classList.toggle('hidden')
    document.getElementById('q1-minus').classList.toggle('hidden')
  })
  document.getElementById('q2').addEventListener('click', function () {
    document.getElementById('q2-answer').classList.toggle('hidden')
    document.getElementById('q2-plus').classList.toggle('hidden')
    document.getElementById('q2-minus').classList.toggle('hidden')
  })
  document.getElementById('q3').addEventListener('click', function () {
    document.getElementById('q3-answer').classList.toggle('hidden')
    document.getElementById('q3-plus').classList.toggle('hidden')
    document.getElementById('q3-minus').classList.toggle('hidden')
  })
  document.getElementById('q4').addEventListener('click', function () {
    document.getElementById('q4-answer').classList.toggle('hidden')
    document.getElementById('q4-plus').classList.toggle('hidden')
    document.getElementById('q4-minus').classList.toggle('hidden')
  })
}
