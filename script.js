// abrir/cerrar sobre y accesibilidad
(function(){
  const envelope = document.getElementById('envelope');
  const openBtn = document.getElementById('openBtn');

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
    if (e.target === openBtn) return;
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
})();