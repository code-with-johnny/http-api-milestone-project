import { API_URL } from "../constants.js";

const subscribeForm = document.getElementById("subscribe-form");
const contactForm = document.getElementById("contact-form");

subscribeForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = this.email.value;

  /* Send a post request to the /email-subscribe endpoint */

  alert(
    `Thank you for subscribing! A welcome email has been sent to ${email}.`
  );

  this.reset();
});

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  /* Send a post request to the /contact endpoint */

  alert(
    `Thank you for contacting me, ${name}! I will reply to ${email} as soon as I can.`
  );

  this.reset();
});
