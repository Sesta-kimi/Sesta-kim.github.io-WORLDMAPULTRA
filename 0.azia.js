const quiz = [
    {
        question: 'イスラエルの観光名所として正しいのは？',
        correct: '嘆きの壁',
        answers: [
            '嘆きの壁',
            'ビガン歴史都市',
            'ブルーモスク',
            'コモド国立公園'
        ]
    },
    {
        question: 'イスラエルでは〇曜の日没から土曜の日没までなにもしてはいけない決まりがある。〇に入るのは何か？',
        correct: '金',
        answers: [
            '水',
            '木',
            '金',
            '日'
        ]
    },
    {
        question: 'フィリピンの観光名所として正しいのは？',
        correct: 'マクタン島',
        answers: [
            'バリ島',
            'スマトラ島',
            'マクタン島',
            'ナザレ'
        ]
    },
    {
        question: 'フィリピンで横断歩道を優先されるのはどれか？',
        correct: '車',
        answers: [
            '歩行者',
            '自転車',
            '車',
            'セグウェイ'
        ]
    },
    {
        question: 'カタールの観光名所として正しいのは？',
        correct: 'ブルーモスク',
        answers: [
            'マカティ',
            'イスタンブール',
            'カッパドキア',
            'ブルーモスク'
        ]
    },
    {
        question: 'カタールでは何の肉が禁止されているか？',
        correct: '豚肉',
        answers: [
            '牛肉',
            '豚肉',
            '鶏肉',
            '鹿肉'
        ]
    },
    {
        question: 'インドネシアの観光名所として正しいのはどれか？',
        correct: 'スマトラ島',
        answers: [
            'スマトラ島',
            'カタール国立博物館',
            'マクタン島',
            '死海'
        ]
    },
    {
        question: 'インドネシアでは、体のどの部分が神聖とされ、触ってはいけないか？',
        correct: '頭',
        answers: [
            '左手',
            '胸',
            '頭',
            '右足'
        ]
    },
    {
        question: 'トルコの観光名所として正しいのはどれか？',
        correct: 'パムッカレ',
        answers: [
            'バリ島',
            'マカティ',
            'マサダ',
            'パムッカレ'
        ]
    },
    {
        question: 'トルコでは食事中に何をすることが失礼か？',
        correct: '鼻をかむ',
        answers: [
            '目をこする',
            '鼻をかむ',
            '口元を隠す',
            '耳に触れる'
        ]
    }
]
 
let quiznow = 0;  // 現在の問題番号
let ans = 0;      // 正解数
const A = [document.querySelector("#A1"),
            document.querySelector("#A2"),
            document.querySelector("#A3"),
            document.querySelector("#A4")];
 
// 出題数を指定（例えば5問）
const quizLength = 5;
 
// 配列をシャッフルする関数
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // 要素を交換
    }
}
 
// シャッフルされた問題を表示する関数
function quiz_start() {
    document.querySelector("#Q").textContent = quiz[quiznow].question;
    for (let i = 0; i <= 3; i++) {
        A[i].textContent = quiz[quiznow].answers[i];
    }
}
 
// ボタンが押されたときの処理
function quiz_judge() {
    for (let c = 0; c <= 3; c++) {  // 4つの選択肢に対してクリックイベントを設定
        A[c].addEventListener('click', function () {
            if (A[c].textContent === quiz[quiznow].correct) {
                window.alert("正解");
                ans = ans + 1;
            } else {
                window.alert("不正解");
            }
 
            // 次の問題に進む
            quiznow = quiznow + 1;
 
            if (quiznow === quizLength) {  // 出題数分進んだら
                // クイズ終了
                if (ans === quizLength) {
                    document.querySelector("#Q").textContent = "やりますねぇ！";
                } else {
                    document.querySelector("#Q").textContent = "あなたは " + quiznow + " 問中 " + ans + " 問正解でした。";
                }
 
                // 結果表示後、選択肢を隠す
                for (let i3 = 0; i3 < 4; i3++) {
                    A[i3].style.display = 'none';
                }
 
                //戻るボタンを表示
                document.querySelector("#backButton").style.display = 'block';
            } else {
                // 次の問題を表示
                quiz_start();
            }
        });
    }
}
 
// クイズをシャッフルして表示
function startQuiz() {
    shuffleArray(quiz); // 最初に問題をシャッフル
 
    // 最初の問題を表示
    quiz_start();
    quiz_judge();
}
 
// クイズスタート
startQuiz();