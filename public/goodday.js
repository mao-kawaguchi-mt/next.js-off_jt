const greet = (name) => {
	return `こんにちは、${name}さん！`;
};

document.getElementById("show").addEventListener("click", () => {
	const input = document.getElementById("input");
	const inputValue = input.value;

	if (inputValue === "") {
		const error = "名前を入力してください";
		document.getElementById("name").innerText = error;
	} else {
		const message = greet(inputValue);
		document.getElementById("name").innerText = message;
	}
});
