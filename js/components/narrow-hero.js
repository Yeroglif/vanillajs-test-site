// Updated narrow-hero component to maintain padding and a fixed height

export default (hostComponent) => {
    const {imageurl='https://picsum.photos/1600/900', header = "Default Header", text = "" } = hostComponent.dataset;
    const render = () => {
        hostComponent.innerHTML = `
      <style>
        .narrow-hero {
          position: relative;
          width: 100%;
          height: 250px; 
        }
        
        .narrow-hero-overlay {
          position: absolute;
          inset: 0;
          /*
          background-color: rgba(255, 255, 255, 0.7);
          */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .narrow-hero-content {
          text-align: center;
          max-width: 600px;
          margin: auto;
          padding: 20px; 
          background: rgba(255, 255, 255, 0.7);
        }
        
        .narrow-hero h1 {
          font-size: 2rem;
          margin: 0;
          color: #333;
        }
        
        .narrow-hero p {
          font-size: 1rem;
          color: #555;
        }

        @media (min-width: 600px){
          .fave-button {
          position: absolute; 
          left: 1rem;
        }
        }
      </style>

      <section class="narrow-hero">
        <div class="narrow-hero-overlay">
          <div class="fave-button">
            <button class="transparent squarify">
              <span class="icon">&#10084;</span>
              <span class="text">Favourite</span>
            </button>
          </div>
          <div class="narrow-hero-content">
            <h1>${header}</h1>
            <p>${text}</p>
          </div>
        </div>
      </section>
      
    `;
    hostComponent.style.background = `url('${imageurl}') center/cover no-repeat`;
    };

    render();
};
