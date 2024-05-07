function countdownTarget(targetDate) {
  var end = new Date(targetDate).getTime()

  var timer = setInterval(function () {
    var now = new Date().getTime()
    var distance = end - now

    if (distance < 0) {
      clearTimeout(timer)
      document.querySelector('.title').innerText = 'Launch Completed'
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.querySelector('.days-time').innerText = days
    document.querySelector('.hours-time').innerText = hours
    document.querySelector('.minutes-time').innerText = minutes
    document.querySelector('.seconds-time').innerText = seconds
  }, 1000)
}
window.onload = function () {
  countdownTarget('2024-05-09T00:00:00')
}
