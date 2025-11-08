// Apertura de sobre + control de música YouTube (cuco - Lover Is a Day)
(function(){
  const envelope = document.getElementById('envelope');
  const openBtn = document.getElementById('openBtn');
  const musicBtn = document.getElementById('musicBtn');
  const ytPlayer = document.getElementById('ytPlayer');
  let musicPlaying = false;

  function setOpen(open){
    if(open){
      envelope.classList.add('open');
      envelope.setAttribute('aria-pressed','true');
      openBtn.textContent = 'Cerrar';
    } else {
      envelope.classList.remove('open');
      envelope.setAttribute('aria-pressed','false');
      openBtn.textContent = 'Abrir';
    }
  }

  envelope.addEventListener('click', (e) => {
    if (e.target === openBtn || e.target === musicBtn) return;
    const isOpen = envelope.classList.contains('open');
    setOpen(!isOpen);
  });

  openBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = envelope.classList.contains('open');
    setOpen(!isOpen);
  });

  envelope.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      const isOpen = envelope.classList.contains('open');
      setOpen(!isOpen);
    }
  });

  // ID obtenido de la URL que me diste
  const VIDEO_ID = '9wiEM0s4aCQ';

  function playMusic(){
    if(!VIDEO_ID){
      alert('No hay ID de vídeo configurado.');
      return;
    }
    const src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&rel=0`;
    ytPlayer.src = src;
    musicBtn.textContent = 'Pausar canción';
    musicBtn.setAttribute('aria-pressed','true');
    musicPlaying = true;
  }

  function stopMusic(){
    ytPlayer.src = '';
    musicBtn.textContent = 'Reproducir canción';
    musicBtn.setAttribute('aria-pressed','false');
    musicPlaying = false;
  }

  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if(musicPlaying) stopMusic();
    else playMusic();
  });

})();