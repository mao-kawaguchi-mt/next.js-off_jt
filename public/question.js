// HTMLの要素取得
const form = document.getElementById("myForm");

// 送信の動作
form.addEventListener("submit", (e) => {
	e.preventDefault();//ページのリロード防止

  try{
    // バリデ結果の配列を作成
    const results = [
      {
        id: "name",
        isValid: true,
        message: "名前を入力してください",
      },
      {
        id: "age",
        isValid: true,
        message: "年齢を入力してください",
      },
      {
        id: "job",
        isValid: true,
        message: "職業を選択してください",
      },
      {
        id: "intro",
        isValid: true,
        message: "自己紹介を入力してください",
      }
    ];

    //resultsの値をresultに一つずつ格納って意味？
    for (const result of results) {
      // DOMの値を取得する
      const element = document.getElementById(result.id);
      // フォームの値を取得する
      const value = element.value;
      // id毎に空欄チェック
      result.isValid = value.trim() !== "";
    }

    // 全てのチェックが終わったら、それぞれのisValidをチェックする
    const allValid = results.every((result) => result.isValid);
    //どれか一つでも引っかかった場合
    if (!allValid) {
      // catchにそれぞれの項目のメッセージとIDを渡す
      const errorObject = {};
      results
        // 引っかかった項目だけ抽出
        .filter(result => !result.isValid)
        // idとメッセージ組み合わせ
        .forEach(result => {
          errorObject[result.id] = result.message;
        });
      // 処理が止まる
      throw new Error(JSON.stringify(errorObject));
    }
    
    //dataを定義
		const data = {
			username: username.value,
			age: age.value,
			status: job.value,
			intro: intro.value,
		};

    const jsonOutput = JSON.stringify(data, null, 2);
		console.log(jsonOutput);
		} catch (error) {
    // 文字列をオブジェクトに変換する
    const errorObject = JSON.parse(error.message);
    // エラーメッセージを表示する
    for (const [id, message] of Object.entries(errorObject)) {
      const errorElement = document.getElementById(`error_${id}`);
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
      }
    }
  }
});

/*
//<head> タグや HTML の先頭で読み込むときDOMの準備ができてから処理を実行//
document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("myform");
 
	form.addEventListener("submit", (e) => {
		e.preventDefault(); //ページのリロード防止
		try {
			// それぞれのフォームのバリデーションを通過したら、フォームを送信
			// それぞれの結果を別々に保持する
			const results = [
				{
					id: "name",
					isValid: true,
					message: "名前を入力してください。",
				},
				{
					id: "age",
					isValid: true,
					message: "18歳以上の年齢を入力してください。",
				},
				{
					id: "job",
					isValid: true,
					message: "職業を選択してください。",
				},
				{
					id: "self",
					isValid: true,
					message: "自己紹介を入力してください。",
				},
			];
 
			for (const result of results) {
				// DOMの値を取得する
				const element = document.getElementById(result.id);
				// フォームの値を取得する
				const value = element.value;
				// id毎にバリデーションチェック
				if (result.id === "age") {
					result.isValid =
						!Number.isNaN(value) && Number.parseInt(value, 10) >= 18;
				} else {
					result.isValid = value.trim() !== "";
				}
			}
 
			// 全てのチェックが終わったら、それぞれのisValidをチェックする
			const allValid = results.every((result) => result.isValid);
			if (!allValid) {
				// catchにそれぞれの項目のメッセージとIDを渡す
				const errorMessage = results
					.filter((result) => !result.isValid)
					.map((result) => `${result.id}: ${result.message}`)
					.join("\n");
				throw new Error(errorMessage);
			}
			// フォームが有効な場合、データを JSON 形式で出力
			const data = {
				username: inputname.value,
				age: inputage.value,
				job: jobselect.value,
				selfintroduction: selftextarea.value,
			};
			const jsonOutput = JSON.stringify(data, null, 2);
			console.log(jsonOutput);
		} catch (error) {
			// 文字列をオブジェクトにに変換する
			const errorObject = JSON.parse(error.message);
			// エラーメッセージを表示する
			for (const [id, message] of Object.entries(errorObject)) {
				const errorElement = document.getElementById(`${id}-error`);
				errorElement.textContent = message;
				errorElement.style.display = "block";
			}
		}
	});
});
*/