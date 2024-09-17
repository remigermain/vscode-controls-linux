/* eslint-env browser */
(function () {
  // change style
  const style = Object.freeze({
    // button background color
    backgroundColor: "#33373e",
    // button text color
    color: "white",
    // button size
    size: "23px",
    // border radius
    radius: "999px"
  });

  window.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(() => {
      const controls = document.querySelector(".titlebar-container .titlebar-right .window-controls-container")
      const leftTitlebar = document.querySelector(".titlebar-container .titlebar-left")
      // not loaded
      if (!controls || !leftTitlebar) {
        return
      }

      // put close button in first position
      controls.parentNode.removeChild(controls)
      const closeControl = controls.lastChild
      controls.removeChild(closeControl)
      controls.prepend(closeControl)

      controls.style.width = "auto"
      controls.style.gap = controls.style.marginLeft = "8px"
      controls.childNodes.forEach((child) => {
        child.style.borderRadius = style.radius
        child.style.width = child.style.height = style.size
        child.style.color = style.color
        child.style.margin = "auto"
        child.style.cursor = "pointer"
        child.style.backgroundColor = style.backgroundColor
        child.style.fontSize = `${Math.ceil(parseInt(style.size) / 2)}px`
        child.addEventListener("mouseleave", () => child.style.backgroundColor = style.backgroundColor)
        child.addEventListener("mouseenter", () => child.style.backgroundColor = "")
      })
      leftTitlebar.appendChild(controls)
      clearInterval(timer)
    }, 100)
  })
})();