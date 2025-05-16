const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const username = document.getElementById("username");
	const age = document.getElementById("age");
	const status = document.getElementById("status");
	const intro = document.getElementById("intro");

	const usernameValue = username.value.trim();
	const ageValue = age.value;
	const statusValue = status.value;
	const introValue = intro.value.trim();

	try {
		let hasError = false;

		if (usernameValue === "") {
			hasError = true;
			document.getElementById("error_username").style.display = "block";
		} else {
			document.getElementById("error_username").style.display = "none";
		}

		if (ageValue === "") {
			document.getElementById("error_age").style.display = "block";
			hasError = true;
		} else {
			document.getElementById("error_age").style.display = "none";
		}

		if (statusValue === "") {
			document.getElementById("error_status").style.display = "block";
			hasError = true;
		} else {
			document.getElementById("error_status").style.display = "none";
		}

		if (introValue === "") {
			document.getElementById("error_intro").style.display = "block";
			hasError = true;
		} else {
			document.getElementById("error_intro").style.display = "none";
		}

		if (hasError) return;

		const data = {
			username: username.value,
			age: age.value,
			status: status.value,
			intro: intro.value,
		};

		console.log(JSON.stringify(data, null, 2));
	} catch (error) {
		console.error("通信エラー：", error);
		alert("データの取得に失敗しました");
	}
});
