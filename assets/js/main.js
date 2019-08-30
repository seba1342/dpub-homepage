//
// On hover image following mouse
//

function revealImageOnHover(spanElement, image) {
  var imageElement = document.getElementById(image)

  imageElement.style.display = 'block'

  spanElement.onmouseout = () => {
    imageElement.style.display = 'none'
  }

  spanElement.onmousemove = () => {
    var mouseX = event.clientX + 10;     // Get the horizontal coordinate
    var mouseY = event.clientY + 10;     // Get the vertical coordinate

    imageElement.style.left = mouseX + 'px'
    imageElement.style.top = mouseY + 'px'
  }
}

//
// Set active link in the navigation bar
//

function extractPageName(hrefString) {
  var arr = hrefString.split('/');
  return (arr.length < 2) ? hrefString : arr[arr.length - 2].toLowerCase() + arr[arr.length - 1].toLowerCase();
}

function setActiveMenu(arr, crtPage) {
  for (var i = 0; i < arr.length; i++) {
    if (extractPageName(arr[i].href) == crtPage) {
      if (arr[i].parentNode.tagName != "DIV") {
        arr[i].className = "current";
        arr[i].parentNode.className = "current";
      }
    }
  }
}

function setPage() {
  hrefString = document.location.href ? document.location.href : document.location;

  if (document.getElementById("nav") != null)
    setActiveMenu(document.getElementById("nav").getElementsByTagName("a"), extractPageName(hrefString));
}

window.onload = function () {
  setPage();
}
