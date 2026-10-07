function removeColor() {
  const select = document.getElementById("colorSelect");
  const selectedIndex = select.selectedIndex;

  // Only remove if a valid option is selected
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}
