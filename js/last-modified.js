// lastModified.js
function displayLastModified(elementId) {
  const lastModified = new Date(document.lastModified);
  const year = lastModified.getFullYear();
  const month = lastModified.getMonth() + 1;
  const date = lastModified.getDate();
  const hours = lastModified.getHours();
  const minutes = String(lastModified.getMinutes()).padStart(2, '0');
  const seconds = String(lastModified.getSeconds()).padStart(2, '0');

  const formattedDate = 
      `最終更新日：${year}年${month}月${date}日 ${hours}時${minutes}分${seconds}秒`;

  const targetElement = document.getElementById(elementId);
  if (targetElement) {
      targetElement.textContent = formattedDate;
  }
}
