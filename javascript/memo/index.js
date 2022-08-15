const input = document.getElementById('input');
const btn = document.getElementById('btn');
const memo_box = document.getElementById('memo_box');


btn.addEventListener('click', (e) => {
    const value = input.value;

    if (!value) {
        console.log('値が入力されていません。');
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const rm_btn = document.createElement('button');
    span.textContent = value;
    rm_btn.textContent = '削除';
    rm_btn.addEventListener('click', (e) => {
        memo_box.removeChild(e.target.parentNode);
    });
    li.appendChild(span);
    li.appendChild(rm_btn);
    memo_box.appendChild(li);
});


