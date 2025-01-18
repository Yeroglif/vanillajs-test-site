// Updated crypted-narrow-hero component to maintain padding and a fixed height
import { store} from '../store.js';

export default (hostComponent) => {
  // data-location="Lochness loch, Scotland"
  //data-date="1933-12-09"
  //data-discoverer="Saint Columba">
    const {imageurl='https://picsum.photos/1600/900', header = "Default Header", text = "", location, date, discoverer } = hostComponent.dataset;
    const render = () => {
        hostComponent.innerHTML = `
      <style>
        .crypted-narrow-hero {
          position: relative;
          width: 100%;
          height: 250px;
        }
        
        .crypted-narrow-hero-overlay {
          position: absolute;
          inset: 0;
          /*
          background-color: rgba(255, 255, 255, 0.7);
          */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          opacity: 0;
          visibility: hidden; /* Prevent interaction when hidden */
          transition-duration: 500ms;
        }
        
        .crypted-narrow-hero-content {
          text-align: center;
          max-width: 600px;
          margin: auto;
          padding: 20px; 
          background: 
        }
        
        .crypted-narrow-hero h1 {
          font-size: 2rem;
          margin: 0;
          color: #333;
          gap: 0.7rem;
        }
        
        .crypted-narrow-hero p {
          font-size: 1.6rem;
          color: #555;
          font-weight: 500;
          margin: 0;
        }

        @media (min-width: 600px){
          .fave-button {
          position: absolute; 
          left: 1rem;
        }
        }
      </style>
      <section class="crypted-narrow-hero">
        <div class="crypted-narrow-hero-overlay">
          <div class="fave-button">
            <button class="transparent squarify">
              <span class="icon">&#10084;</span>
              <span class="text">Favourite</span>
            </button>
          </div>
          <div class="crypted-narrow-hero-content flex flex-col">
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
    //Listen to clicks on fave button
    hostComponent.querySelector(".fave-button button").addEventListener("click", (event) => {
      event.stopPropagation(); // make sure clicking on the hero doesn't trigger the fave button
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
     //Listen to clicks on the narrow-hero
     hostComponent.querySelector(".crypted-narrow-hero-overlay").addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent("SHOW_CRYPTID_INFO", {
        detail: {header: header, location: location, date: date, discoverer: discoverer}
      }));
    });
    };

    //dynamic image
    hostComponent.style.background = `url('${imageurl}') center/cover no-repeat`;

    render();
};
