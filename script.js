// ブキ読み込み
const weapons = [
    { no: 0, ja: 'わかばシューター', en: 'Splattershot Jr.', type: 'shooter' },
    { no: 10, ja: 'スプラシューター', en: 'Splattershot Jr.', type: 'shooter' },
    { no: 20, ja: 'ボールドマーカー', en: 'Sploosh-o-matic', type: 'shooter' },
    { no: 30, ja: 'シャープマーカー', en: 'Splash-o-matic', type: 'shooter' },
    { no: 40, ja: 'プロモデラーMG', en: 'Aerospray MG', type: 'shooter' },
    { no: 50, ja: 'N-ZAP85', en: "N-ZAP '85", type: 'shooter' },
    { no: 60, ja: '.52ガロン', en: '.52 Gal', type: 'shooter' },
    { no: 70, ja: '.96ガロン', en: '.96 Gal', type: 'shooter' },
    { no: 80, ja: 'プライムシューター', en: 'Splattershot Pro', type: 'shooter' },
    { no: 90, ja: 'ジェットスイーパー', en: 'Jet Squelcher', type: 'shooter' },
    { no: 100, ja: 'L3リールガン', en: 'L-3 Nozzlenose', type: 'shooter' },
    { no: 110, ja: 'H3リールガン', en: 'H-3 Nozzlenose', type: 'shooter' },
    { no: 120, ja: 'ボトルガイザー', en: 'Squeezer', type: 'shooter' },
    { no: 150, ja: 'スペースシューター', en: 'Splattershot Nova', type: 'shooter' },

    { no: 1000, ja: 'ノヴァブラスター', en: 'Luna Blaster', type: 'blaster' },
    { no: 1010, ja: 'ホットブラスター', en: 'Blaster', type: 'blaster' },
    { no: 1020, ja: 'ロングブラスター', en: 'Range Blaster', type: 'blaster' },
    { no: 1030, ja: 'クラッシュブラスター', en: 'Clash Blaster', type: 'blaster' },
    { no: 1040, ja: 'ラピッドブラスター', en: 'Rapid Blaster', type: 'blaster' },
    { no: 1050, ja: 'Rブラスターエリート', en: 'Rapid Blaster Pro', type: 'blaster' },

    { no: 2000, ja: 'カーボンローラー', en: 'Carbon Roller', type: 'roller' },
    { no: 2010, ja: 'スプラローラー', en: 'Splat Roller', type: 'roller' },
    { no: 2020, ja: 'ヴァリアブルローラー', en: 'Flingza Roller', type: 'roller' },
    { no: 2030, ja: 'ダイナモローラー', en: 'Dynamo Roller', type: 'roller' },
    { no: 2040, ja: 'ワイドローラー', en: 'Big Swig Roller', type: 'roller' },

    { no: 3000, ja: 'パブロ', en: 'Inkbrush', type: 'roller' },
    { no: 3010, ja: 'ホクサイ', en: 'Octobrush', type: 'roller' },

    { no: 4000, ja: 'スクイックリンα', en: 'Classic Squiffer', type: 'charger' },
    { no: 4010, ja: 'スプラチャージャー', en: 'Splat Charger', type: 'charger' },
    { no: 4030, ja: 'リッター4K', en: 'E-liter 4K', type: 'charger' },
    { no: 4050, ja: 'ソイチューバー', en: 'Goo Tuber', type: 'charger' },
    { no: 4060, ja: '14式竹筒銃・甲', en: 'Bamboozler 14 Mk I', type: 'charger' },
    { no: 4070, ja: 'R-PEN/5H', en: 'Snipewriter 5H', type: 'charger' },

    { no: 5000, ja: 'バケットスロッシャー', en: 'Slosher', type: 'slosher' },
    { no: 5010, ja: 'ヒッセン', en: 'Tri-Slosher', type: 'slosher' },
    { no: 5020, ja: 'スクリュースロッシャー', en: 'Sloshing Machine', type: 'slosher' },
    { no: 5030, ja: 'オーバーフロッシャー', en: 'Bloblobber', type: 'slosher' },
    { no: 5040, ja: 'エクスプロッシャー', en: 'Explosher', type: 'slosher' },

    { no: 6000, ja: 'スプラスピナー', en: 'Mini Splatling', type: 'splatling' },
    { no: 6010, ja: 'バレルスピナー', en: 'Heavy Splatling', type: 'splatling' },
    { no: 6020, ja: 'ハイドラント', en: 'Hydra Splatling', type: 'splatling' },
    { no: 6030, ja: 'クーゲルシュライバー', en: 'Ballpoint Splatling', type: 'splatling' },
    { no: 6040, ja: 'ノーチラス47', en: 'Nautilus 47', type: 'splatling' },

    { no: 7000, ja: 'スパッタリー', en: 'Dapple Dualies', type: 'dualies' },
    { no: 7010, ja: 'スプラマニューバー', en: 'Splat Dualies', type: 'dualies' },
    { no: 7020, ja: 'デュアルスイーパー', en: 'Dualie Squelchers', type: 'dualies' },
    { no: 7030, ja: 'ケルビン525', en: 'Glooga Dualies', type: 'dualies' },
    { no: 7040, ja: 'クアッドホッパーブラック', en: 'Dark Tetra Dualies', type: 'dualies' },

    { no: 8000, ja: 'パラシェルター', en: 'Splat Brella', type: 'brella' },
    { no: 8010, ja: 'キャンピングシェルター', en: 'Tenta Brella', type: 'brella' },
    { no: 8020, ja: 'スパイガジェット', en: 'Undercover Brella', type: 'brella' },

    { no: 9000, ja: 'トライストリンガー', en: 'Tri-Stringer', type: 'stringer' },
    { no: 9010, ja: 'LACT-450', en: 'REEF-LUX 450', type: 'stringer' },

    { no: 10000, ja: 'ドライブワイパー', en: 'Splatana Wiper', type: 'wiper' },
    { no: 10010, ja: 'ジムワイパー', en: 'Splatana Stamper', type: 'wiper' },
];
const grizzco_weapons = [
    { no: 20000, ja: 'クマサン印のブラスター', en: 'Grizzco Blaster', type: 'grizzco' },
    { no: 20010, ja: 'クマサン印のシェルター', en: 'Grizzco Brella', type: 'grizzco' },
    { no: 20020, ja: 'クマサン印のチャージャー', en: 'Grizzco Charger', type: 'grizzco' },
    { no: 20030, ja: 'クマサン印のスロッシャー', en: 'Grizzco Slosher', type: 'grizzco' },
    { no: 20040, ja: 'クマサン印のストリンガー', en: 'Grizzco Stringer', type: 'grizzco' },
    { no: 20050, ja: 'クマサン印のワイパー', en: 'Grizzco Splatana', type: 'grizzco' },
];

// ローカルストレージから読み込み
var mybingo = localStorage.getItem('mybingo');
var bingo_center = localStorage.getItem('bingo_center');
var bingo_size = localStorage.getItem('bingo_size');
var bingo_background = localStorage.getItem('bingo_background');
var bingo_effect = localStorage.getItem('bingo_effect');
var bingo_text = localStorage.getItem('bingo_text');
var bingo_count = 0;



// 中央アイテムセレクタにブキを追加
function add_WeaponsOption() {
    const bingoCenterElement = document.getElementById('bingo-center');

    for (let w in grizzco_weapons) {
        let option = document.createElement('option');
        option.text = grizzco_weapons[w]['ja'];
        option.value = 'weapon' + grizzco_weapons[w]['no'];
        bingoCenterElement.appendChild(option);
    };
    for (let w in weapons) {
        let option = document.createElement('option');
        option.text = weapons[w]['ja'];
        option.value = 'weapon' + weapons[w]['no'];
        bingoCenterElement.appendChild(option);
    };
};


// ビンゴカード生成
function create_BingoCard() {

    let items = weapons.concat();


    bingo_center = document.getElementById('bingo-center').value;
    bingo_size = document.getElementById('bingo-size').value;
    bingo_background = document.getElementById('bingo-background').value;

    localStorage.setItem('bingo_center', bingo_center);
    localStorage.setItem('bingo_size', bingo_size);
    localStorage.setItem('bingo_background', bingo_background);


    let bingo_row = bingo_size
    let bingo_column = bingo_size
    if (bingo_size == 'all') {
        bingo_row = 7
        bingo_column = 8
    }
    for (; items.length < bingo_row*bingo_column - 1;) {
        if (bingo_center == 'squid') items.push({no:'squid', ja:'FREE'})
        else items.push({no:'kuma', ja:'FREE'})
    }
    let center_num = Math.ceil(bingo_row / 2) - 1

    const table = document.getElementById('bingo-card-table');
    table.innerHTML = '';
    document.getElementsByTagName('body')[0].className = bingo_background;
    
    if (items.length < bingo_row*bingo_column) {
        if ( bingo_center == 'random') bingo_center = 'kuma'
        if ( bingo_center.substring(0,6) == 'weapon' ) {
            let weapon_num = bingo_center.substring(6);
            var center_weapon = items[0];
            bingo_center = 'kuma';
            for (let w in grizzco_weapons) {
                if ( grizzco_weapons[w]['no'] == weapon_num ) {
                    bingo_center = 'weapon';
                    center_weapon = grizzco_weapons[w];
                }
            };
        }
    } else if ( bingo_center.substring(0,6) == 'weapon' ) {
        let weapon_num = bingo_center.substring(6);
        var center_weapon = items[0];
        bingo_center = 'weapon';
        for (let w in items) {
            if ( items[w]['no'] == weapon_num ) {
                center_weapon = items.splice(w, 1)[0];
            }
        };
        for (let w in grizzco_weapons) {
            if ( grizzco_weapons[w]['no'] == weapon_num ) {
                center_weapon = grizzco_weapons[w];
            }
        };
    }
    mybingo = [];
    for (let row = 0; row < bingo_row; row++) {
        let tr = document.createElement('div');
        tr.className = 'tr';
        table.appendChild(tr);
        for (let column = 0; column < bingo_column; column++) {
            let td = document.createElement('div');
            td.className = 'td';
            let img = document.createElement('img');
            let br = document.createElement('br');
            let text = document.createElement('span');
            let item = '';
            if ( row == center_num && column == center_num ) {
                switch (bingo_center) {
                    case 'kuma':
                    case 'squid':
                        // td.style.backgroundImage = 'url(./images/'+bingo_center+'.png)';
                        img.src = './images/'+bingo_center+'.png';
                        img.alt = 'FREE';
                        img.title = 'FREE';
                        item = bingo_center;
                        break;
                    case 'random':
                        weapon = items.splice(Math.floor(Math.random() * items.length), 1)[0];
                        // td.style.backgroundImage = 'url(./images/weapons/' + weapon['no'] + '.png)';
                        img.src = './images/weapons/' + weapon['no'] + '.png';
                        img.alt = weapon['ja'];
                        img.title = weapon['ja'];
                        text.innerText = weapon['ja'];
                        item = 'weapon' + weapon['no'];
                        break;
                    case 'weapon':
                        // td.style.backgroundImage = 'url(./images/weapons/' + center_weapon['no'] + '.png)';
                        img.src = './images/weapons/' + center_weapon['no'] + '.png';
                        img.alt = center_weapon['ja'];
                        img.title = center_weapon['ja'];
                        text.innerText = center_weapon['ja'];
                        item = 'weapon' + center_weapon['no'];
                    default:
                }
            } else {
                weapon = items.splice(Math.floor(Math.random() * items.length), 1)[0];
                // td.style.backgroundImage = 'url(./images/weapons/' + weapon['no'] + '.png)';
                img.src = './images/weapons/' + weapon['no'] + '.png';
                img.alt = weapon['ja'];
                img.title = weapon['ja'];
                text.innerText = weapon['ja'];
                // td.style.content = 'url(./images/weapons/' + weapon['no'] + '.png)';
                item = 'weapon' + weapon['no'];
                if (weapon['no'] == 'kuma' || weapon['no'] == 'squid' ) {
                    item = weapon['no'];
                    img.src = './images/' + weapon['no'] + '.png';
                    text.innerText = '';
                }
            };
            td.appendChild(img);
            td.appendChild(br);
            if (text.innerText) td.appendChild(text);
            td.addEventListener('click', function(){
                clickCard(row, column, item);
            });
            td.id = row + '-' + column;
            tr.appendChild(td);
            mybingo.push({row: row, column: column, item: item, done: false});
        };
    };
    localStorage.setItem('mybingo', JSON.stringify(mybingo));
    bingo_count = checkBingo();
};


// ビンゴカード復元
function restore_BingoCard() {
    const table = document.getElementById('bingo-card-table');
    document.getElementsByTagName('body')[0].className = bingo_background;

    let row = 0;
    let column = 0;
    let bingo_row = bingo_size
    let bingo_column = bingo_size
    if (bingo_size == 'all') {
        bingo_row = 7
        bingo_column = 8
    }
    for (let mycard in mybingo) {
        if (column == 0) {
            var tr = document.createElement('div');
            tr.className = 'tr';
            table.appendChild(tr);
        }
        let td = document.createElement('div');
        td.className = 'td';
        let img = document.createElement('img');
        let br = document.createElement('br');
        let text = document.createElement('span');

        if ( mybingo[mycard]['item'].substr(0,6) == 'weapon' ) {
            let weapon_num = mybingo[mycard]['item'].substr(6);
            let myweapon = weapons[0];
            for (let w in weapons) {
                if ( weapons[w]['no'] == weapon_num ) {
                    myweapon = weapons[w];
                }
            };
            for (let w in grizzco_weapons) {
                if ( grizzco_weapons[w]['no'] == weapon_num ) {
                    myweapon = grizzco_weapons[w];
                }
            };
            img.src = './images/weapons/' + myweapon['no'] + '.png';
            img.alt = myweapon['ja'];
            img.title = myweapon['ja'];
            text.innerText = myweapon['ja'];
        } else {
            img.src = './images/'+mybingo[mycard]['item']+'.png';
            img.alt = 'FREE';
            img.title = 'FREE';
            // text.innerText = 'FREE';
        }
        if (mybingo[mycard]['done']) {
            td.classList.add('done');
        } else {
            td.classList.remove('done');
        }
        td.appendChild(img);
        td.appendChild(br);
        if (text.innerText) td.appendChild(text);
        td.addEventListener('click', function(){
            clickCard(mybingo[mycard]['row'], mybingo[mycard]['column'], mybingo[mycard]['item']);
        });
        td.id = row + '-' + column;
        tr.appendChild(td);

        
        column++;
        if (column >= bingo_column) {
            column = 0;
            row++;
        }
    };
    bingo_count = checkBingo();
}


// ビンゴクリック
function clickCard(row, column, item) {
    let bingo_row = bingo_size
    let bingo_column = bingo_size
    if (bingo_size == 'all') {
        bingo_row = 7
        bingo_column = 8
    }

    let mycard = document.getElementById(row + '-' + column);
    if (mycard.classList.contains('done')) {
        mycard.classList.remove('done');
        mybingo[row * bingo_column + column]['done'] = false;
    } else {
        mycard.classList.add('done');
        mybingo[row * bingo_column + column]['done'] = true;
    }

    // 花吹雪
    let bingo_num = checkBingo();
    if (bingo_effect == 'on' && bingo_num > bingo_count) {
        confetti({
            angle: (Math.random() * (100 - 80) + 80),
            particleCount: (Math.random() * (150 - 80) + 80),
            spread: (Math.random() * (70 - 50) + 50),
            origin: { y: 0.6 }
          });
    }
    bingo_count = bingo_num;
    localStorage.setItem('mybingo', JSON.stringify(mybingo));
}


// ビンゴになったかチェック
function checkBingo() {
    for (let k in mybingo) {
        let mycard = document.getElementById(mybingo[k]['row'] + '-' + mybingo[k]['column']);
        if (mycard) {
            mycard.classList.remove('reach');
            mycard.classList.remove('bingo');
        }
    }

    let bingo_row = bingo_size
    let bingo_column = bingo_size
    if (bingo_size == 'all') {
        bingo_row = 7
        bingo_column = 8
    }

    let bingo_num = 0;
    let reach_num = 0;
    for (let row = 0; row < bingo_row; row++) {
        var done_num = 0;
        for (let column = 0; column < bingo_column; column++) {
            if (mybingo[row * bingo_column + column]['done']) {
                done_num++;
            }
        }
        if (done_num == bingo_column-1) {
            console.log('リーチ');
            reach_num++;
            for (let column = 0; column < bingo_column; column++) {
                let mycard = document.getElementById(row + '-' + column);
                if (!mycard.classList.contains('done')) {
                    mycard.classList.add('reach');
                }
            }
        } else if (done_num == bingo_column) {
            console.log('ビンゴ');
            bingo_num++;
            for (let column = 0; column < bingo_column; column++) {
                let mycard = document.getElementById(row + '-' + column);
                mycard.classList.add('bingo');
            }
        }
    }
    for (let column = 0; column < bingo_column; column++) {
        var done_num = 0;
        for (let row = 0; row < bingo_row; row++) {
            if (mybingo[row * bingo_column + column]['done']) {
                done_num++;
            }
        }
        if (done_num == bingo_row-1) {
            console.log('リーチ');
            reach_num++;
            for (let row = 0; row < bingo_row; row++) {
                let mycard = document.getElementById(row + '-' + column);
                if (!mycard.classList.contains('done')) {
                    mycard.classList.add('reach');
                }
            }
        } else if (done_num == bingo_row) {
            console.log('ビンゴ');
            bingo_num++;
            for (let row = 0; row < bingo_row; row++) {
                let mycard = document.getElementById(row + '-' + column);
                mycard.classList.add('bingo');
            }
        }
    }

    if (bingo_size != 'all') {
        var done_num = 0;
        for (let row = 0; row < bingo_row; row++) {
            if (mybingo[row * bingo_column + row]['done']) {
                done_num++;
            }
        }
        if (done_num == bingo_size-1) {
            console.log('リーチ');
            reach_num++;
            for (let row = 0; row < bingo_size; row++) {
                let mycard = document.getElementById(row + '-' + row);
                if (!mycard.classList.contains('done')) {
                    mycard.classList.add('reach');
                }
            }
        } else if (done_num == bingo_size) {
            console.log('ビンゴ');
            bingo_num++;
            for (let row = 0; row < bingo_size; row++) {
                let mycard = document.getElementById(row + '-' + row);
                mycard.classList.add('bingo');
            }
        }
        var done_num = 0;
        for (let row = 0; row < bingo_size; row++) {
            if (mybingo[row * bingo_size + (bingo_size - 1 - row)]['done']) {
                done_num++;
            }
        }
        if (done_num == bingo_size-1) {
            console.log('リーチ');
            reach_num++;
            for (let row = 0; row < bingo_size; row++) {
                let mycard = document.getElementById(row + '-' + (bingo_size - 1 - row));
                if (!mycard.classList.contains('done')) {
                    mycard.classList.add('reach');
                }
            }
        } else if (done_num == bingo_size) {
            console.log('ビンゴ');
            bingo_num++;
            for (let row = 0; row < bingo_size; row++) {
                let mycard = document.getElementById(row + '-' + (bingo_size - 1 - row));
                mycard.classList.add('bingo');
            }
        }
    }

    const bingo_ele = document.getElementById('is-bingo-message');
    if (bingo_num > 0) {
        if (bingo_num == 1) {
            bingo_ele.innerHTML = 'BINGO !!';
        } else {
            bingo_ele.innerHTML = bingo_num + ' BINGO !!!';
        }
    } else {
        bingo_ele.innerHTML = '';
    }
    const reach_ele = document.getElementById('is-reach-message');
    if (reach_num > 0) {
        if (reach_num == 1) {
            reach_ele.innerHTML = 'リーチ';
        } else {
            reach_ele.innerHTML = reach_num + ' リーチ !';
        }
    } else {
        reach_ele.innerHTML = '';
    }
    return bingo_num;
}


// ビンゴ演出オンオフ
function changeEffect() {
    if (document.getElementById('bingo-effect').checked) {
        bingo_effect = 'on';
    } else {
        bingo_effect = 'off'
    }
    localStorage.setItem('bingo_effect', bingo_effect);
}


// ローカルストレージから値を取得してフォームに反映
function loadLocalStorage() {
    if (bingo_center) {
        document.getElementById('bingo-center').value = bingo_center;
    };

    if (bingo_size) {
        document.getElementById('bingo-size').value = bingo_size;
    };

    if (bingo_background) {
        document.getElementById('bingo-background').value = bingo_background;
    };
    document.getElementById('bingo-background').addEventListener('change', change_background);

    if (bingo_effect == 'off') {
        document.getElementById('bingo-effect').checked = false;
    } else {
        bingo_effect = 'on';
    };
    document.getElementById('bingo-effect').addEventListener('change', changeEffect);

    if (bingo_text == 'on') {
        document.getElementById('bingo-text').checked = true;
        document.getElementById('bingo-card-table').className = 'text-on';
    } else {
        document.getElementById('bingo-text').checked = false;
    };
    document.getElementById('bingo-text').addEventListener('change', change_text_on);

    if (mybingo) {
        mybingo = JSON.parse(mybingo);
        restore_BingoCard();
    } else {
        create_BingoCard();
    };
};


// 横幅最大をWindowの縦サイズにする
function setWindowSize() {
    let windowsize = window.innerHeight;
    document.getElementById('contents').style.cssText = 'max-width : ' + (windowsize * 0.9) + 'px;';
}


// 画像として書き出す (html2canvas)
function save_img() {
    let img_area = document.createElement('div');
    img_area.id = 'save-img-area';
    let card = document.getElementById('bingo-card-box').cloneNode(true);
    card.className = 'saved-card';
    img_area.appendChild(card);
    document.getElementsByTagName('body')[0].appendChild(img_area);
    html2canvas(img_area, {backgroundColor:null}).then(canvas => { 
        let downloadEle = document.createElement("a");
        downloadEle.href = canvas.toDataURL("image/png");
        downloadEle.download = "bingo.png";
        downloadEle.click();
    });
    img_area.remove();
}


function change_background(){
    bingo_background = document.getElementById('bingo-background').value;
    localStorage.setItem('bingo_background', bingo_background);
    document.getElementsByTagName('body')[0].className = bingo_background;
}

function change_text_on() {
    bingo_text_element = document.getElementById('bingo-text');
    if (bingo_text_element.checked) {
        localStorage.setItem('bingo_text', 'on');
        document.getElementById('bingo-card-table').className = 'text-on';
    } else  {
        localStorage.setItem('bingo_text', 'off');
        document.getElementById('bingo-card-table').className = '';
    }
}

// 実行
window.onload = function() {
    setWindowSize();
    add_WeaponsOption();
    loadLocalStorage();
    // window.addEventListener('resize', setWindowSize);
};