document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        {
            name: "キャラ名1",
            desc: "ストーリーや能力の詳細をここに書く。",
            image: "assets/images/characters/character01_large.png"
        },
        {
            name: "キャラ名2",
            desc: "キャラ2の詳細な説明。",
            image: "assets/images/characters/character02_large.png"
        },
        {
            name: "キャラ名3",
            desc: "キャラ3の詳細な説明。",
            image: "assets/images/characters/character03_large.png"
        },
        {
            name: "キャラ名4",
            desc: "キャラ4の詳細な説明。",
            image: "assets/images/characters/character04_large.png"
        },
        {
            name: "キャラ名5",
            desc: "キャラ5の詳細な説明。",
            image: "assets/images/characters/character05_large.png"
        },
        {
            name: "キャラ名6",
            desc: "キャラ6の詳細な説明。",
            image: "assets/images/characters/character06_large.png"
        },
        {
            name: "キャラ名7",
            desc: "キャラ7の詳細な説明。",
            image: "assets/images/characters/character07_large.png"
        }
    ];

    const characterIcons = document.querySelectorAll(".character-icon");
    const characterImage = document.getElementById("character-image");
    const characterName = document.getElementById("character-name");
    const characterDesc = document.getElementById("character-desc");

    characterIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const index = icon.getAttribute("data-index");
            characterImage.src = characters[index].image;
            characterName.textContent = characters[index].name;
            characterDesc.textContent = characters[index].desc;
        });
    });
});
