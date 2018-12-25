function getCoords(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    //IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return [pageX, pageY];
}

window.addEventListener('mousemove', function(e) {
  var pos = getCoords(e);
  var x = pos[0], y = pos[1];
  var popup = document.createElement('div');
  var s = {
    width: `250px`,
    height: `80px`,
    backgroundColor: `#fff`,
    border: `1px solid black`,
    boxShadow: `0px 5px 3px -3px rgba(0,0,0,0.4)`,
    left: 0,
    top: 0,
    borderRadius: `5px`,
    margin: `1em`,
    ZIndex: 100,
    position: `fixed`,
    padding: `1em`,
  }

  popup.style.width = s.width;
  popup.style.height = s.height;
  popup.style.backgroundColor = s.backgroundColor;
  popup.style.border = s.border;
  //popup.style.boxShadow = s.boxShadow;
  popup.style.left = s.left;
  popup.style.top = s.top;
  popup.style.borderRadius = s.borderRadius;
  popup.style.ZIndex = s.ZIndex;
  popup.style.position = s.position;
  popup.style.margin = s.margin;
  popup.style.padding = s.padding;

  popup.innerText = e.path[0].classList.value;
  document.body.appendChild(popup);
});
