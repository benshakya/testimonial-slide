const testimonials = [
  {
    name: "Benish",
    imgUrl: "images/benish.jpg",
    text: `Since I invested in Sony I made over 100,000 dollars profits. 
        Sony is worth much more than I paid. Sony is the real deal!`,
  },
  {
    name: "Ujjala",
    imgUrl: "images/ujjala.jpg",
    text: `It fits our needs perfectly.`,
  },
  {
    name: "Bijendra",
    imgUrl: "images/bijendra.jpg",
    text: `Buy this now. We can't understand how we've been living without Sony. Great job, I will definitely be ordering again! 
        Man, this thing is getting better and better as I learn more about it.`,
  },
];

const textEl = document.querySelector(".text");
const authorEl = document.querySelector(".author");
const imgEl = document.querySelector("img");

let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const name = testimonials[idx].name;
  const imgUrl = testimonials[idx].imgUrl;
  const text = testimonials[idx].text;

  imgEl.src = imgUrl;
  textEl.innerText = text;
  authorEl.innerText = name;
  idx++;
  setTimeout(updateTestimonial, 8000);

  if (idx >= testimonials.length) {
    idx = 0;
  }
}
