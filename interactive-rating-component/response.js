document.getElementById('selectedRating').innerHTML = new URLSearchParams(
  window.location.search,
).get('rating')
