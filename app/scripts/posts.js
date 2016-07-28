(function(document) {
  'use strict';

  var postDrawerPanel = document.querySelector('#postDrawerPanel');

  console.log(postDrawerPanel.narrow);
  changeDrawerWidth(postDrawerPanel);

  postDrawerPanel.addEventListener('paper-responsive-change', function(item) {
    console.log(item.detail.narrow);
    changeDrawerWidth(postDrawerPanel);
  })


  function changeDrawerWidth(postDrawerPanel) {
    if (postDrawerPanel.narrow) {
      postDrawerPanel.drawerWidth = "100vw";
    } else {
      postDrawerPanel.drawerWidth = "300px";
    }
  }

})(document);