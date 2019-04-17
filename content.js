setInterval(function () {
  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    var ariaLabel = links[i].getAttribute("aria-label");
    if (ariaLabel != null && ariaLabel.indexOf("review approvals") >= 0) {
      links[i].classList.add("garc-strong-approved");
    } else if (ariaLabel != null && ariaLabel.indexOf("review approval") >= 0) {
      links[i].classList.add("garc-approved");
    } else if (ariaLabel != null && ariaLabel.indexOf("requesting changes") >= 0) {
      links[i].classList.add("garc-changes-requested");
    }
  }
}, 1000);
