// HTMLの要素取得
const form = document.getElementById("myForm");

// 送信の動作
form.addEventListener("submit", (e) => {
	e.preventDefault();//ページのリロード防止

  try{
    // エラーメッセージ初期化
    ["name", "age", "job", "intro"].forEach(id => {
      const errorElement = document.getElementById(`error_${id}`);
      if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
      }
    });

    // バリデーション結果の配列を作成
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