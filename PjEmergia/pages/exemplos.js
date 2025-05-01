//função que inicializa o carrossel manualmente após o HTML estar presente no DOM
function initCarrossel() {
  const examples = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/250px-Natura_Logo.png',
      title: 'Natura',
      text: 'A Natura usa a ideia de "energia total" de um jeito legal, tipo abraçando toda a força da natureza que entra nos seus produtos e como eles são feitos. Eles pegam coisas da Amazônia de forma esperta e usam coisas velhas de um jeito novo. A empresa cuida das florestas, como se estivesse dando um super alimento pra terra. Eles querem que a energia que usam seja como um abraço, que cuida do meio ambiente. Eles mostram que pensar em toda a energia (a tal da "energia total") ajuda a ter um negócio que é amigo da natureza e que se importa com as pessoas de lá..'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ambev_logo.svg/1200px-Ambev_logo.svg.png',
      title: 'Ambev',
      text: 'A Ambev pensa na "energia total" como se fosse um jogo de videogame, onde eles precisam gastar menos energia para ganhar. Eles estão tentando diminuir o estrago que fazem na natureza. Desde 2020, eles estão usando energia do sol e do vento, como se fossem superpoderes, para fazer as coisas nas fábricas. Isso ajuda a soltar menos fumaça ruim no ar. Eles também querem usar embalagens que podem voltar para eles, como se fossem bumerangues, e até 2025 querem que todas sejam assim. Isso ajuda a não gastar tantas coisas da natureza'
    },
    {
      image: 'https://www.infomoney.com.br/wp-content/uploads/2024/04/2024-04-17T213037Z_1_LYNXNPEK3G0Y9_RTROPTP_4_ENERGIA-PETROBRAS-PIETRO-DEVOLTA.jpg?fit=1296%2C809&quality=50&strip=all',
      title: 'Petrobras',
      text: 'A Petrobras está usando a ideia de "energia total" como se estivesse jogando um jogo de quebra-cabeça, onde eles precisam encaixar as peças para usar a energia de forma esperta e cuidar do planeta. Desde 2020, eles estão usando coisas novas para soltar menos fumaça, fazer gasolina e diesel mais limpos e usar mais energia do sol e do vento. A empresa também pega coisas velhas e transforma em novas, cuida das florestas do Brasil e ajuda as pessoas. Eles querem que toda a energia que usam seja como um abraço para o planeta'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwFf0uKh-BC2su1kpUHi_sclj-bZ4goj_MQ&s',
      title: 'Instituto Mauá de Tecnologia',
      text: 'O Instituto Mauá de Tecnologia ensina as pessoas a cuidarem do planeta como se fossem detetives da natureza, procurando formas de usar a energia de forma esperta e sem desperdiçar nada. Eles têm um curso que ensina a cuidar das fábricas, a usar as coisas de um jeito circular e a diminuir o estrago que fazemos no meio ambiente. Eles fazem pesquisas e ensinam as pessoas a inventarem coisas novas e a serem responsáveis com o planeta. O Mauá está preparando os alunos para criarem coisas que sejam boas para o mundo, usando a "energia total" de forma inteligente.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
      title: 'Google',
      text: ' 2017, eles estão usando energia do sol e do vento para compensar toda a energia que gastam, como se estivessem plantando árvores para respirar. Eles querem usar energia limpa o tempo todo até 2030, como se estivessem trocando as pilhas velhas por novas. Isso quer dizer que o Google não só usa energia limpa, mas também se importa com toda a "energia total" que entra nos seus computadores, criando um ciclo que é bom para o planeta.'
    }
  ];

  let currentIndex = 0;

  const image = document.getElementById('carouselImage');
  const title = document.getElementById('carouselTitle');
  const text = document.getElementById('carouselText');
  const content = document.getElementById('carouselContent');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (!image || !title || !text || !content || !nextBtn || !prevBtn) {
    console.error('Elementos do carrossel não encontrados');
    return;
  }

  function showExample(index) {
    image.src = examples[index].image;
    title.textContent = examples[index].title;
    text.textContent = examples[index].text;
  }

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

  showExample(currentIndex);
  nextBtn.addEventListener('click', nextExample);
  prevBtn.addEventListener('click', prevExample);
}