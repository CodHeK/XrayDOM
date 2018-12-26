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
    width: `320px`,
    height: `320px`,
    backgroundColor: `#fff`,
    border: `1px solid black`,
    left: 0,
    top: 0,
    borderRadius: `5px`,
    margin: `1em`,
    ZIndex: 1000,
    position: `fixed`,
    padding: `1em`,
    display: `inline-block`,
  }

  popup.style.width = s.width;
  popup.style.height = s.height;
  popup.style.backgroundColor = s.backgroundColor;
  popup.style.border = s.border;
  popup.style.left = s.left;
  popup.style.top = s.top;
  popup.style.borderRadius = s.borderRadius;
  popup.style.ZIndex = s.ZIndex;
  popup.style.position = s.position;
  popup.style.margin = s.margin;
  popup.style.padding = s.padding;
  popup.style.opacity = s.opacity;
  popup.style.display = s.display;

  var html = `
    <h4 style="font-size: 20px;"><b>CLASSES : </b></h4>
    <hr/>
    <h4 style="font-size: 16px;">${e.path[0].classList.value}</h4>
    <br />
    <h4 style="font-size: 20px;"><b>ENCLOSED TAG :</b></h4>
    <hr/>
    <h4 style="font-size: 16px;">${e.path[0].childNodes[0].nodeName}</h4>
  `

  popup.innerHTML = html;
  document.body.appendChild(popup);

  var classVals = e.path[0].classList.value;


  if(classVals != "") {
    classVals = classVals.split(" ");

    var classString = "";

    for(let i = 0; i < classVals.length; i++) {
      classString += ("." + classVals[i]);
    }
  }

  if(classString != undefined) {
    var element = document.querySelector(classString);
    element.style.border = `3px solid red`;
    element.style.backgroundColor = `rgb(0, 0, 0, 0.1)`;
    setTimeout(function() {
      element.style.border = ``;
      element.style.backgroundColor = ``;
    }, 1000);
  }

});
