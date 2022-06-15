function OnBodyLoad() {
  AlternateCollapse();
}

function AlternateCollapse() {
  var collapsibleSections = document.getElementsByClassName('collapse-button');

  for (var i = 0; i < collapsibleSections.length; i++) {
    collapsibleSections[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  }
}
