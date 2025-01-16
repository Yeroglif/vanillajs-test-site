// Updated narrow-hero component to maintain padding and a fixed height
import { store} from '../store.js';

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
        }
        
        .narrow-hero h1 {
          font-size: 2rem;
          margin: 0;
          color: #333;
        }
        
        .narrow-hero p {
          font-size: 1.6rem;
          color: #555;
          font-weight: 500;
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
    //Check whether the button has been favourited
    if(store.isCryptidFave(header)){
      hostComponent.querySelector('.fave-button button').style = "color: var(--primary-color); background-color: white;";
    }else {
      hostComponent.querySelector('.fave-button button').style = "color: default; background-color: default;";
    }

    hostComponent.querySelector(".fave-button button").addEventListener("click", () => {
      if(store.isCryptidFave(header)){
        store.setCryptidFave((mySet) => {
          const updatedSet = new Set(mySet);
          updatedSet.delete(header);
          return updatedSet;
        })
        hostComponent.querySelector('.fave-button button').style = "color: default; background-color: default;";
      }else {
        store.setCryptidFave((mySet) => {
          const updatedSet = new Set(mySet);
          updatedSet.add(header);
          return updatedSet;
        })
        hostComponent.querySelector('.fave-button button').style = "color: var(--primary-color); background-color: white;";
      }
     });
    };

    //dynamic image
    hostComponent.style.background = `url('${imageurl}') center/cover no-repeat`;

    render();
};
