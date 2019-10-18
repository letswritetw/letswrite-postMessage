// *** 範例1：iframe頁傳訊息給母頁
// 接到 message 要做什麼事的 function
function receiveMessage(e) {
  // 來源網址（e.origin）不是指定的網域時
  if(e.origin !== 'https://auguston.github.io/') {
    alert('資料來源錯誤');
    return false;
  }
  // 來源網址是指定的網域時
  else {
    // 拿傳來的參數（e.data）
    const height = e.data;
    document.getElementById('iframe').setAttribute('height', height);
  }
}

// 監聽 message 事件
window.addEventListener('message', receiveMessage, false);



// *** 範例2：母頁傳訊息給iframe頁
// 抓到iframe的視窗
const iframe = document.getElementById('iframe2').contentWindow;
document.getElementById('blue').addEventListener('click', () => {
  iframe.postMessage('lightskyblue', 'https://auguston.github.io/');
});
document.getElementById('gold').addEventListener('click', () => {
  iframe.postMessage('gold', 'https://auguston.github.io/');
});
document.getElementById('green').addEventListener('click', () => {
  iframe.postMessage('lightgreen', 'https://auguston.github.io/');
});