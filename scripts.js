// Array de vídeos
const videos = [
    {
      title: 'Curso de JavaScript',
      url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk'
    },
    {
      title: 'Curso de React',
      url: 'https://www.youtube.com/watch?v=DLX62G4lc44'
    },
  ];
  
  // Função para renderizar vídeos na página
  function renderVideos(videoArray) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Limpa a lista antes de renderizar novamente
  
    videoArray.forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.classList.add('video-item');
      videoItem.innerHTML = `
        <img src="https://via.placeholder.com/250x100?text=Thumbnail" alt="Thumbnail">
        <h3>${video.title}</h3>
        <a href="${video.url}" target="_blank">Assistir</a>
      `;
      videoList.appendChild(videoItem);
    });
  }
  
  // Função para adicionar vídeo
  function addVideo(event) {
    event.preventDefault();
    const title = document.getElementById('video-title').value;
    const url = document.getElementById('video-url').value;
  
    if (title && url) {
      videos.push({ title, url });
      renderVideos(videos);
    }
    document.getElementById('add-video-form').reset(); // Limpa o formulário
  }
  
  // Função para buscar vídeos
  function searchVideos(event) {
    const query = event.target.value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
    renderVideos(filteredVideos);
  }
  
  // Eventos
  document.getElementById('add-video-form').addEventListener('submit', addVideo);
  document.getElementById('search').addEventListener('input', searchVideos);
  
  // Renderiza os vídeos ao carregar a página
  renderVideos(videos);
  