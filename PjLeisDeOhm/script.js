function loadContent(section) {
    const content = document.getElementById("content");
    
    const url = `secoes/${section}.html`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o conteúdo.");
            }
            return response.text();
        })
        .then(html => {
            content.innerHTML = html;
            content.className = "";
            content.classList.add("content", section);
        })
}