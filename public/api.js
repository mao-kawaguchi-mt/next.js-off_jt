document.getElementById("loadButton").addEventListener("click", () => {
	fetchData();
});

function fetchData() {
	const list = document.getElementById("userList");
	list.innerHTML = "読み込み中...";

	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.json())
		.then((users) => {
			list.innerHTML = "";
			users.forEach((user) => {
				const li = document.createElement("li");
				li.innerText = user.name;
				list.appendChild(li);
			});
		})
		.catch((error) => {
			console.error("通信エラー:", error);
			alert("データの取得に失敗しました");
		});
}
