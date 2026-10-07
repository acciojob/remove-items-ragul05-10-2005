//your JS code here. If required.
document.getElementById("removeBtn").addEventListener("click", function() {
  const select = document.getElementById("colorSelect");
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
});
