let count = 0;

document.getElementById("plusButton").addEventListener("click", () => {
	count++;
	document.getElementById("count").innerText = `${count}`;
});

document.getElementById("minusButton").addEventListener("click", () => {
	count--;
	document.getElementById("count").innerText = `${count}`;
});

document.getElementById("reset").addEventListener("click", () => {
	count = 0;
	document.getElementById("count").innerText = `${count}`;
});
