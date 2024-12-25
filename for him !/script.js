const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
   question.innerHTML = " knew it 3ares bia silly :D!!";
   gif.src =
     "https://i.pinimg.com/originals/8f/a0/18/8fa0180e7f07c6c1013777d6f6eac7d4.gif";
 });

 noBtn.addEventListener("mouseover", () => {
   const noBtnRect = noBtn.getBoundingClientRect();
   const maxX = window.innerWidth - noBtnRect.width;
   const maxY = window.innerHeight - noBtnRect.height;

   const randomX = Math.floor(Math.random() * maxX);
   const randomY = Math.floor(Math.random() * maxY);

   noBtn.style.left = randomX + "px";
   noBtn.style.top = randomY + "px";
 });
