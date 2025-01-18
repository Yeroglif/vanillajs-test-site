// /js/components/cryptid-info-popup.js

export default (hostComponent) => {
  
    // CSS for the modal (Instagram Style)
    const cookieModalStyles = `
  <style>
  #nikos-modal-background {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.5);
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 1000;
     opacity: 0;
     visibility: hidden;
     transition: opacity 0.3s ease-in-out;
}
 #nikos-modal-background.show {
     opacity: 1;
     visibility: visible;
}
 #nikos-modal {
     padding: 1rem 2rem;
     width: 90%;
     max-width: 400px;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     border-radius: 10px;
     background-color: var(--bg-color);
     border: 1px solid var(--border-color);
}
 #nikos-modal-label {
     font-size: 18px;
     font-weight: bold;
     margin-bottom: 1rem;
}
 .info-table {
     width: 100%;
     border-collapse: collapse;
}
 .info-table th {
     text-align: left;
     font-weight: bold;
     padding: 0.5rem;
     color: #333;
}
 .info-table td {
     padding: 0.5rem;
     color: #555;
}
  </style>
  `;
  
    // HTML for the modal
    const cookieModalHTML = `
    <div id="nikos-modal-background">
    <div id="nikos-modal">
       <p id="nikos-modal-label">Cryptid details:</p>
       <table class="info-table">
          <tr id="cryptid-name">
             <th>Name:</th>
             <td></td>
          </tr>
          <tr id="cryptid-date">
             <th>Date of Discovery:</th>
             <td></td>
          </tr>
          <tr id="cryptid-location">
             <th>Location:</th>
             <td></td>
          </tr>
          <tr id="cryptid-discoverer">
             <th>Discoverer:</th>
             <td></td>
          </tr>
       </table>
    </div>
 </div>
  `;
  
    // Append styles and HTML to the host component
    hostComponent.innerHTML = cookieModalStyles + cookieModalHTML;
  
    // Reference to the modal background for event listeners
    const modalBackground = hostComponent.querySelector('#nikos-modal-background');
  
    // Fade in animation
    const showCryptidInfo = () => {
        setTimeout(() => {
          modalBackground.classList.add('show');
        }, 50);
    }
    //event to display the popup
    document.addEventListener("SHOW_CRYPTID_INFO", (event) => {
      hostComponent.querySelector("#cryptid-name td").innerText = event.detail.header;
      hostComponent.querySelector("#cryptid-date td").innerText = event.detail.date;
      hostComponent.querySelector("#cryptid-location td").innerText = event.detail.location;
      hostComponent.querySelector("#cryptid-discoverer td").innerText = event.detail.discoverer;
      showCryptidInfo();
    });
    // Close modal when clicking outside of it
    modalBackground.addEventListener('click', (event) => {
      if (event.target === modalBackground) {
        fadeOutAndRemove();
      }
    });
  
    // Close modal when pressing 'Escape'
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        fadeOutAndRemove();
      }
    });
  
    // Fade out and remove the modal
    function fadeOutAndRemove() {
      modalBackground.classList.remove('show');
      setTimeout(() => {
        // modalBackground.remove();
      }, 300);
    }
  };
  