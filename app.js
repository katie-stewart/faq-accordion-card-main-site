// document.querySelectorAll(".question").forEach(function() {
//     button.addEventListener('click', function(event) {
//         document.getElementById("result-number").innerText = event.currentTarget.innerText
//         document.getElementById("submit-rating").addAttribute("disabled")
//     })
// })

const accordion = document.getElementsByClassName('faq');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        var isActive = this.classList.contains('active')
        document.querySelectorAll('.faq').forEach(function(element) {
            element.classList.remove('active')
        })
        if (isActive) {
            this.classList.remove('active')
        } else {
            this.classList.add('active')
        }
    })
}