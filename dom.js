var lastMx = 0, lastMy = 0, lastEvent, element = null, popup = null;
var positionInfo, width, height, font, color, bgColor;

function showBox(x, y, e) {
  if(e != undefined) {
    popup = document.createElement('div');
    popup.classList.add('pops');

    var s = {
      width: `200px`,
      height: `auto`,
      backgroundColor: `#000`,
      border: `1px solid black`,
      left: `${x + 10}px`,
      top: `${y + 10}px`,
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


    var classVals = e.path[0].classList.value;
    classFixed = classVals;

    if(classVals != "") {
      classVals = classVals.split(" ");

      var classString = "";

      for(let i = 0; i < classVals.length; i++) {
        classString += ("." + classVals[i]);
      }
    }

    if(classString != undefined) {
      element = document.elementFromPoint(x, y);
      element.style.cursor = `pointer`;
      element.style.border = `3px solid red`;
      element.style.backgroundColor = `rgb(0, 0, 0, 0.1)`;
      positionInfo = element.getBoundingClientRect();
      height = positionInfo.height;
      width = positionInfo.width;
      font = css(element, 'font-family');
      color = css(element, 'color');
      bgColor = css(element, 'background-color');
    }

    var value;
    if(classVals != "" && classVals != undefined) {
      value = classString;
    }
    else {
      value = e.path[0].nodeName;
      if(value === "BODY")
        color = bgColor;
    }

    var html = `
      ${value}
      <br />
      <table>
        <tr>
          <td><div style="width: 10px;height: 10px;background-color: ${color};border: 0;margin-right: 4px;"></div></td>
          <td>${color}</div>
        </tr>
      </table>
      <hr style="opacity: 0.5;" />
      ${font}
      <hr style="opacity: 0.5;" />
      ${width} x ${height} px
    `;

    popup.innerHTML = html;
    document.body.appendChild(popup);
  }
}

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}

function init() {
  this.addEventListener("mousemove", resetTimer, false);
  this.addEventListener("mousedown", resetTimer, false);
  this.addEventListener("keypress", resetTimer, false);
  this.addEventListener("DOMMouseScroll", resetTimer, false);
  this.addEventListener("mousewheel", resetTimer, false);
  this.addEventListener("touchmove", resetTimer, false);
  this.addEventListener("MSPointerMove", resetTimer, false);
  startTimer();
}

function resetTimer(e) {
  window.clearTimeout(timeout);
  var x = e.pageX, y = e.pageY;
  lastEvent = e;
  lastMx = x;
  lastMy = y;
  if(popup != null && element != null && lastEvent != undefined) {
    $(".pops").remove();
    element.style.border = ``;
    element.style.backgroundColor = ``;
  }
  startTimer();
}

function startTimer() {
    timeout = window.setTimeout(CursorInactive, 400);
}

function CursorInactive() {
    showBox(lastMx, lastMy, lastEvent);
}

init();
