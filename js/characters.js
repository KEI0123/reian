document.addEventListener("DOMContentLoaded", () => {
    const characters = [
        {
            name: "東野 真赤",
            desc: "道なき道の測量士。レガシィユニットは方位磁石。幼少のころに親と別れ、アデニウムと暮らしていたことから彼女とは無二の親友である。その影響なのか、食べるものに目がない。その割にはスタイルが変わらないのは地図作りのためにあちこちを歩き回っているからである。よって町の人間にも親しまれている。なぜこの世界、この土地で暮らすようになったのかはよく覚えていない。友達思いなのもあって、今回の事件を発端とする大きな渦に巻き込まれることとなる。",
            image: "assets/images/characters/character01_large.png"
        },
        {
            name: "否幕 夜途",
            desc: "漆黒の追跡者。レガシィユニットは警官バッジ。保安官という立場ではあるが、結構暇を持ち余している模様。真赤とは結構仲が良く、時々射撃練習を一緒にしている。制服だからと黒っぽい服を着てはいるが、もともと派手好きな性格は直らなかったらしく、警告灯を服に大量につけているためどこにいるか分かりやすい。それでも有能さを買われ、町の警官の中でも高い地位についている。",
            image: "assets/images/characters/character02_large.png"
        },
        {
            name: "アルバ・キャンデル",
            desc: "町を暖める小さな灯。レガシィユニットは石油ランタン。町の燃料関係のインフラ設備担当。幼い年齢や見た目に合わず、アンティーク調の品物を好む傾向にある。本人曰く、温かみのあるものはいつの時代も求められるらしい。真赤に妹のようにかわいがられており、仕事が終わったら彼女のところに遊びに行くのが日課。",
            image: "assets/images/characters/character03_large.png"
        },
        {
            name: "アデニウム・デザート",
            desc: "オアシスの番人。レガシィユニットはワインオープナー。町にてバーを営んでおり、真赤とは親友。いつも店で提供するための新作料理を考えるのが癖になっている。極端に酒に弱いことが悩みだったがこの店を経営することで食べているため、現在はそこまで気にしていない。幽霊などオカルト的存在をいまだに信じていることを真赤にしょっちゅう馬鹿にされるが、怖がりなのは生まれつきだと開き直っている。",
            image: "assets/images/characters/character04_large.png"
        },
        {
            name: "定条 遥",
            desc: "重力超過のメイドロイド。レガシィユニットはホワイトブリム。スティルによって製作されたメイド用アンドロイド。型番SMD-02c 。体内の各部に武装が施され、下半身は人型を逸脱したスラスターを装備する。主人である彩月には、忠誠心というよりもかつて自らを助けてくれた恩を感じて仕えているところがある。同型機が1機のみ存在するが行方知れずで、当人はそれの存在そのものを知らない。他人には高飛車な態度をとりがち。",
            image: "assets/images/characters/character05_large.png"
        },
        {
            name: "スティル・トレイラー",
            desc: "命吹き込むレッカー。レガシィユニットはレッカー車。ブレーンシティに住んでいる、数少ない工学系の技術者。制作活動のためにジャンク品を集めることが多く、自分の体についているクレーンを、ガラクタを運ぶことに重宝している。そのため普段はチェーンを体に括り付けており、初対面の人から怪しまれるのが悩み。アンドロイドの定条遥を開発し、友人の袖笠彩月に譲渡した。胡乱な性格は若い頃から。",
            image: "assets/images/characters/character06_large.png"
        },
        {
            name: "袖笠 彩月",
            desc: "小さな大出力発電機。レガシィユニットは水力発電ダム。外見は真赤たちと比べ若干幼く見えるが、町の送電と水の供給を担う実力者。自らダムの整備などを行っておりスティルとは技術者つながりで仲がいい。これは遥が作られて間もないころに、彼女をメイドとして雇ったことがきっかけである。本来は人に迷惑をかけることを嫌うとても良い性格の持ち主であるが、今回はある理由で自らダムの操業を止め、事件を起こしてしまう。",
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
