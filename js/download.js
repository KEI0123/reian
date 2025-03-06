function download(version, platform) {
    //　const downloadLink = `path_to_downloads/version_${version}_${platform}bit.zip`;
    const downloadLink = `https://github.com/reian-game/reian/raw/main/assets/sample.zip`;

    // Google Analytics にイベントを送信
    gtag('event', 'download', {
        'event_category': 'Download',
        'event_label': `Version ${version} - ${platform}bit`,
        'value': 1
    });

    // ダウンロードを実行
    window.location.href = downloadLink;
}
