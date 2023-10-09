const subscribeForm = document.getElementById("subscribe-form");
const contactForm = document.getElementById("contact-form");

subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.email.value;
  alert(
    `Thank you for subscribing! A welcome email has been sent to ${email}.`
  );
  this.reset();
});

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  alert(
    `Thank you for contacting me, ${name}! I will reply to ${email} as soon as I can.`
  );
  this.reset();
});
