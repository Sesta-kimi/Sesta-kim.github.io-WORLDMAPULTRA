document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const regionLinks = document.querySelectorAll('.region');

    const countries = {
        africa: ['ナイジェリア', 'エジプト', '南アフリカ', 'ケニア', 'モロッコ'],
        asia: ['中国', 'インド', '日本', '韓国', 'タイ'],
        europe: ['フランス', 'ドイツ', 'イタリア', 'スペイン', 'イギリス'],
        'north-america': ['アメリカ', 'カナダ', 'メキシコ', 'グアテマラ', 'コスタリカ'],
        'south-america': ['ブラジル', 'アルゼンチン', 'コロンビア', 'チリ', 'ペルー'],
        oceania: ['オーストラリア', 'ニュージーランド', 'フィジー', 'パプアニューギニア', 'サモア']
    };

    regionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const region = link.getAttribute('data-region');
            const countryList = countries[region];
            let contentHtml = '<h2>どの国にしますか？</h2><ul>';
            countryList.forEach(country => {
                contentHtml += `<li><a href="#">${country}</a></li>`;
            });
            contentHtml += '</ul>';
            contentDiv.innerHTML = contentHtml;
        });
    });
});
