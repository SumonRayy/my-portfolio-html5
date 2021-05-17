document.querySelector(".contact-form").addEventListener("submit", submitForm);


function submitForm(e) {

	let name = document.querySelector(".c-name").value;
	let email = document.querySelector(".c-email").value;
	let message = document.querySelector(".c-message").value;

	sendEmail(name, email, message);

}

function sendEmail(name, email, message) {
	Email.send({
		Host: "smtp.gmail.com",
		Username: "sumonrayy@gmail.com",
		Password: "jtjxhrgillpdbxdb",
		To: "sumonrayy@gmail.com",
		From: "sumonrayy@gmail.com",
		Subject: `Website Message from ${name}`,
		Body: `Name: ${name} <br />Email: ${email} <br />Message: ${message}`,
	}).then((message) => console.log("It is working 😁"));
}
