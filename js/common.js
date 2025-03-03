document.addEventListener('DOMContentLoaded', function () {
    // 現在のページのURLを取得
    const currentPage = window.location.pathname.split('/').pop();

    // メニューリンクを取得してループ
    const menuLinks = document.querySelectorAll('.top-menu ul li a');
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});