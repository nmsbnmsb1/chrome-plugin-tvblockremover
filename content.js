// 移除广告拦截检测弹窗的函数
function removeAdBlockModal() {
  let modal = document.querySelector('div[data-dialog-name="gopro"]');
  if (!modal) return;
  if (!modal.parentNode) return;
  //
  modal.parentNode.remove();
  console.log("已移除 AdBlock 检测弹窗");
}
// 设置定时器，每秒检查一次
setInterval(removeAdBlockModal, 1000);

// 保留 MutationObserver 以防需要更多功能
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    removeAdBlockModal();
  });
});
// 开始观察
observer.observe(document.body, { childList: true, subtree: true });
