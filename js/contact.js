function submitForm(event) {
    event.preventDefault();

    // フォームデータの取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // ここで実際にはサーバーにデータを送信する処理を行う
    // 現在はモックアップとしてアラートを表示

    alert(`フィードバックを受け付けました。\n\nお名前: ${name}\nメールアドレス: ${email}\n件名: ${subject}`);

    // フォームをリセット
    document.getElementById('feedbackForm').reset();

    return false;
}