function makeDraggable(element) {
  let startX = 0, startY = 0;
  let currentX = 0, currentY = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(event) {
    event.preventDefault();
    startX = event.clientX;
    startY = event.clientY;

    document.onmouseup = closeDragEvent;
    document.onmousemove = elementDrag;
  }

  function elementDrag(event) {
    event.preventDefault();

    currentX = event.clientX - startX;
    currentY = event.clientY - startY;
    startX = event.clientX;
    startY = event.clientY;

    element.style.top = (element.offsetTop + currentY) + "px";
    element.style.left = (element.offsetLeft + currentX) + "px";

    const dragEvent = new CustomEvent("dragging", {
      detail: { top: element.offsetTop, left: element.offsetLeft }
    })

    element.dispatchEvent(dragEvent)
  }

  function closeDragEvent() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const child = document.getElementById("child");
makeDraggable(child);


