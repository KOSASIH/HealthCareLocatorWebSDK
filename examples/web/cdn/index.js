function openNav() {
  document.getElementById("mySidenav").style.left = "0";
  document.querySelector(".menu").style.display = "none";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.querySelector('.closebtn').style.display = "none";
  document.getElementById("mySidenav").style.left = "-350px";
  setTimeout(() => {
    document.querySelector(".menu").style.display = "block";
    document.querySelector('.closebtn').style.display = "block";
  }, 500);
}

function openSettings() {
  document.querySelector('#mySidenav').classList.add('show-settings');
  document.querySelector('settings-panel').addEventListener('backPressed', closeSettings, { once: true });
}

function closeSettings() {
  document.querySelector('#mySidenav').classList.remove('show-settings');
}
