//buttons and counter

const counter= document.querySelector('#Counter')
const btns = document.querySelectorAll('.btn')

let count=0;

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList

    if (styles.contains('increase')) {
      count++
    } else if(styles.contains('decrease')){
      count--
    } else  {
      count=0
    }

     if (count > 0)
      counter.style.color = 'green'

    if (count < 0)
      counter.style.color = 'red'

    if (count === 0)
      counter.style.color = 'grey'

    counter.textContent = count
  })
})


 const faqs = document.querySelectorAll(".faq");

  for (const item of faqs) {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");
    const icon = question.querySelector(".icon-main i");

    question.addEventListener("click", function () {
      // Toggle visibility of the answer
      answer.classList.toggle("non-active");

      // Toggle the icon between plus and cross
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-xmark");

      console.log(icon); // For debugging
    });
  }
