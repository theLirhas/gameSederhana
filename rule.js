const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
	const guess = parseInt(document.getElementById("userGuess").value);
	const message = document.getElementById("message");

	if (guess === randomNumber) {
		message.innerHTML = "Selamat, angka yang anda tebak <code>benar!</code>";
	} else if (guess > randomNumber) {
		message.innerHTML = "Angka <code>terlalu besar</code>, coba lagi!";
	} else {
		message.innerHTML = "Angka <code>terlalu kecil</code>, coba lagi!";
	}
}