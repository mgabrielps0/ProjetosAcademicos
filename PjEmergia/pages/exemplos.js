// Lista de exemplos para mostrar no carrossel
const examples = [
    { image: 'https://via.placeholder.com/600x400.png?text=Projeto+1', title: 'Projeto 1: Fazenda Sustentável', text: 'Uso de emergia para otimização de energia na agricultura familiar em Minas Gerais.' },
    { image: 'https://via.placeholder.com/600x400.png?text=Projeto+2', title: 'Projeto 2: Comunidade Costeira', text: 'Comunidade costeira utilizando emergia para gestão de recursos naturais em Santa Catarina.' },
    { image: 'https://via.placeholder.com/600x400.png?text=Projeto+3', title: 'Projeto 3: Parque Urbano', text: 'Reestruturação de parques urbanos com conceitos de emergia em São Paulo.' }
  ];
  
  // Controle do índice atual do carrossel
  let currentIndex = 0;
  
  // Referências aos elementos HTML
  const image = document.getElementById('carouselImage');
  const title = document.getElementById('carouselTitle');
  const text = document.getElementById('carouselText');
  const content = document.getElementById('carouselContent');
  
  // Atualiza o carrossel para o exemplo atual
  function showExample(index) {
    image.src = examples[index].image;
    title.textContent = examples[index].title;
    text.textContent = examples[index].text;
  }
  
  // Avançar para próximo exemplo
  function nextExample() {
    content.classList.add('slide-left-out');
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % examples.length;
      showExample(currentIndex);
      content.classList.remove('slide-left-out');
      content.classList.add('slide-left-in');
      setTimeout(() => content.classList.remove('slide-left-in'), 600);
    }, 600);
  }
  
  // Voltar para exemplo anterior
  function prevExample() {
    content.classList.add('slide-right-out');
    setTimeout(() => {
      currentIndex = (currentIndex - 1 + examples.length) % examples.length;
      showExample(currentIndex);
      content.classList.remove('slide-right-out');
      content.classList.add('slide-right-in');
      setTimeout(() => content.classList.remove('slide-right-in'), 600);
    }, 600);
  }
  
  // Inicializa mostrando o primeiro exemplo
  showExample(currentIndex);
  
  // Configura eventos de clique nos botões
  document.getElementById('nextBtn').addEventListener('click', nextExample);
  document.getElementById('prevBtn').addEventListener('click', prevExample);
  
  // Sidebar: Minimizar ou Expandir
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleSidebar");
    const sidebar = document.querySelector(".sidebar");
  
    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("minimized");
    });
  });
  