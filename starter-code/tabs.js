const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabList.addEventListener("keydown", (e) => {
  const keyDownLeft = 37;
  const keyDownRight = 39;

  //change the tabindex of the current tab to --1
  if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  // if the right key is pushed, move to the next tab on the right
  if (e.keyCode === keyDownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
    console.log(tabFocus);
  }

  // if the left key is pushed, move to the next tab on the left
  if (e.keyCode === keyDownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
    console.log(tabFocus);
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
});
