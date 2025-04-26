document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.querySelector(".sidebar");
  
    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("minimized");
    });
  });
  // Carregar páginas dinamicamente
function loadContent(page) {
  const content = document.getElementById("content");
  const url = `pages/${page}.html`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o conteúdo.");
      }
      return response.text();
    })
    .then(html => {
      content.innerHTML = html;
      // Se for a página de exemplos, carrega o script específico
      if (page === "exemplos") {
        const script = document.createElement('script');
        script.src = 'pages/exemplos.js';
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch(error => {
      content.innerHTML = "<h2>Erro ao carregar a página.</h2>";
      console.error(error);
    });
}