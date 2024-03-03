(function() {
  const refs = {
    openModalBtn: document.getElementById("openModalBtn"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    modal: document.getElementById("modal"),
   
  };

  // Lista de efecte de tranziție posibile
  const transitionEffects = ['scale', 'translate', 'opacity'];
  
  

  refs.openModalBtn.addEventListener("click", () => toggleModal(true));
  refs.closeModalBtn.addEventListener("click", () => toggleModal(false));

  function toggleModal(isOpen) {
    
    const randomEffect = transitionEffects[Math.floor(Math.random() * transitionEffects.length)];
    
    
    refs.modal.classList.add(`transition-${randomEffect}`);
    
    
    if (isOpen) {
      refs.modal.classList.remove("is-hidden");
      
    } else {
      
      setTimeout(() => {
        refs.modal.classList.add("is-hidden");
        
        setTimeout(() => {
          refs.modal.classList.remove(`transition-${randomEffect}`);
        }, 300);
      }, 300);
    }
  }
})();

