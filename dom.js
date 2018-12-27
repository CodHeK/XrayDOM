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

var lastMx = -1, lastMy = -1;

window.addEventListener('mousemove', function(e) {
  var pos = getCoords(e);
  var x = pos[0], y = pos[1];

  if(Math.abs(x - lastMx) <= 3 && Math.abs(y - lastMy) <= 3) {
    var popup = document.createElement('div');

    var s = {
      width: `200px`,
      height: `auto`,
      backgroundColor: `#000`,
      border: `1px solid black`,
      left: `${x}px`,
      top: `${y - 20}px`,
      borderRadius: `5px`,
      margin: `1em`,
      ZIndex: 1000,
      position: `absolute`,
      padding: `1em`,
      display: `block`,
      color: `#fff`,
      fontWeight: 700,
      opacity: 1,
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
    popup.style.display = s.display;
    popup.style.color = s.color;
    popup.style.fontWeight = s.fontWeight;
    popup.style.opacity = s.opacity;

    // var html = `
    //   <h4 style="font-size: 20px;"><b>CLASSES : </b></h4>
    //   <hr/>
    //   <h4 style="font-size: 16px;">${e.path[0].classList.value}</h4>
    //   <br />
    //   <h4 style="font-size: 20px;"><b>ENCLOSED TAG :</b></h4>
    //   <hr/>
    //   <h4 style="font-size: 16px;">${e.path[0].childNodes[0].nodeName}</h4>
    // `

    var classVals = e.path[0].classList.value;

    popup.innerText = classVals;
    document.body.appendChild(popup);

    setTimeout(function() {
      document.body.removeChild(popup);
    }, 1000);


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
      }, 2000);
    }
  }
  lastMx = x;
  lastMy = y;
});
