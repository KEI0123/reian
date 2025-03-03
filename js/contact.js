document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Googleフォームの送信URL（フォームIDを正しく設定）
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfB_2i0e8djh-wZmZzTl1gI3OcEoWj60zWXFq2skx1By9qy9A/formResponse';

        // フォームのデータ取得（エントリーIDを変更）
        const formData = new FormData();
        formData.append('entry.836030685', document.getElementById('name').value);    // 名前
        formData.append('entry.863399346', document.getElementById('email').value);   // メール
        formData.append('entry.1180039559', document.getElementById('subject').value); // 件名
        formData.append('entry.1023739284', document.getElementById('message').value); // メッセージ

        // 送信ボタンの無効化（連打防止）
        const submitButton = form.querySelector('.form-submit');
        submitButton.disabled = true;
        submitButton.textContent = '送信中...';

        // フェッチAPIを使用してGoogleフォームにデータ送信
        fetch(googleFormUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'  // CORS回避のため
        }).then(() => {
            showMessage('フィードバックを送信しました。ありがとうございます！', 'success');
            form.reset(); // フォームをリセット
            submitButton.disabled = false;
            submitButton.textContent = '送信する';
        }).catch(error => {
            showMessage('送信に失敗しました。再度お試しください。', 'error');
            submitButton.disabled = false;
            submitButton.textContent = '送信する';
        });
    });

    // メッセージ表示関数
    function showMessage(message, type) {
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) existingAlert.remove();

        const alertElement = document.createElement('div');
        alertElement.className = `alert alert-${type}`;
        alertElement.textContent = message;
        form.parentNode.insertBefore(alertElement, form);

        setTimeout(() => {
            alertElement.remove();
        }, 5000);
    }
});
