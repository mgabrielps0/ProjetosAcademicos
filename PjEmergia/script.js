document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.querySelector(".sidebar");
  
    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("minimized");
    });
  });
  