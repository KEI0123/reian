// 年別フィルタリング
function filterNewsByYear() {
    const selectedYear = document.getElementById("yearSelect").value;
    const yearDivs = document.querySelectorAll(".news-year");

    if (selectedYear === "all") {
        yearDivs.forEach((div) => {
            div.style.display = "block";
        });
    } else {
        yearDivs.forEach((div) => {
            if (div.id === `news-${selectedYear}`) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        });
    }
}

// カテゴリーフィルタリング
document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", function () {
        // アクティブボタンの切り替え
        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.classList.remove("active");
        });
        this.classList.add("active");

        const category = this.getAttribute("data-category");
        const newsItems = document.querySelectorAll(".news-item");

        if (category === "all") {
            newsItems.forEach((item) => {
                item.style.display = "block";
            });
        } else {
            newsItems.forEach((item) => {
                if (item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        }
    });
});

let currentPage = 1;  // 初期ページ

document.addEventListener('DOMContentLoaded', function () {
    // ページ番号リンクのクリックイベント
    const pageLinks = document.querySelectorAll('.page-number');

    pageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageNumber = parseInt(this.getAttribute('data-page'));
            changePage(pageNumber);
        });
    });

    // 「次へ」ボタンと「前へ」ボタンの動作
    const nextButton = document.querySelector('.page-next');
    const prevButton = document.querySelector('.page-prev');

    nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        changePage(currentPage + 1);
    });

    prevButton.addEventListener('click', function (e) {
        e.preventDefault();
        changePage(currentPage - 1);
    });

    // ページ変更時に実行される関数
    function changePage(pageNumber) {
        // 現在のページが範囲外でないか確認
        const totalPages = document.querySelectorAll('.page-number').length;

        if (pageNumber < 1 || pageNumber > totalPages) return;

        currentPage = pageNumber;  // 現在のページを更新

        // すべてのページアイテムを非表示にする
        const allNewsItems = document.querySelectorAll('.news-item');
        allNewsItems.forEach(item => {
            if (item.getAttribute('data-page') == currentPage) {
                item.style.display = 'block';  // 表示するページのアイテムを表示
            } else {
                item.style.display = 'none';  // 他のページのアイテムを非表示
            }
        });

        // ページ番号リンクの「active」クラスを更新
        pageLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.getAttribute('data-page')) === currentPage) {
                link.classList.add('active');
            }
        });

        // 「次へ」と「前へ」ボタンの表示制御
        if (currentPage === 1) {
            prevButton.style.display = 'none';  // 最初のページでは「前へ」を非表示
        } else {
            prevButton.style.display = 'inline';  // それ以外では表示
        }

        if (currentPage === totalPages) {
            nextButton.style.display = 'none';  // 最後のページでは「次へ」を非表示
        } else {
            nextButton.style.display = 'inline';  // それ以外では表示
        }
    }

    // 初期表示
    changePage(currentPage);
});
