// document.querySelectorAll(".question").forEach(function() {
//     button.addEventListener('click', function(event) {
//         document.getElementById("result-number").innerText = event.currentTarget.innerText
//         document.getElementById("submit-rating").addAttribute("disabled")
//     })
// })

const accordion = document.getElementsByClassName('faq');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}