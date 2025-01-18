export default (hostComponent) => {
    // Define HTML structure with data attributes directly in the template
    const indexHTML = `
    <style>
     html {
          scroll-behavior: smooth;
     }
     .down-button {
          position: fixed;
          z-index: 100;
          top: 85%;
          left: 50%;
          transition-duration: 300ms;
     }
     .down-button a {
          font-size: 3rem;
     }
     div[data-component="cryptid-narrow-hero"]:hover {
        .crypted-narrow-hero-overlay {
          opacity: 1;
          background: rgb(255, 255, 255, 0.5);
          visibility: visible;
        }
        .crypted-narrow-hero h1 {
          color: rgb(0, 0, 0, 1)
        }
        .crypted-narrow-hero p {
          color: rgb(0, 0, 0, 1)
        }
        .fave-button button{
          color: black;
        }
     }
     @media (min-width: 600px) {

     }
    </style>
    <div class="cryptid-info" data-component="cryptid-info-popup"></div>
      <div data-component="fullscreen-hero"
           data-image-url="https://images.unsplash.com/photo-1679584052596-3efcfd169f42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           data-overlay-color="rgba(0, 0, 0, 0.5)"
           data-header="Full list of the cryptids"
           data-text="The non-definitive collection of all things cryptid"
           data-button-text="Help us expand the list"
           data-button-link="/submit"
           >
      </div>
      <div class="down-button"><a href="#list" class="icon button wireframe transparent">&#9660;</a></div>
      <section id="list">
      <div data-component="cryptid-narrow-hero"
           data-imageurl="https://cdn.pixabay.com/photo/2024/10/30/10/07/ai-generated-9161334_960_720.png" 
           data-header="Lochness monster"
           data-text="Mythical aquatic Scottish creature"
           data-location="Lochness loch, Scotland"
           data-date="1933-12-09"
           data-discoverer="Saint Columba">
      </div>
      <div data-component="cryptid-narrow-hero"
     data-imageurl="https://images.unsplash.com/photo-1665245080999-3a5f0113b6d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
     data-header="Bigfoot"
     data-text="Large humanoid forest dweller"
     data-location="Pacific Northwest, USA"
     data-date="1958-08-27"
     data-discoverer="Jerry Crew">
</div>

<div data-component="cryptid-narrow-hero"
     data-imageurl="https://cdn.pixabay.com/photo/2024/04/12/18/54/chupacabra-8692435_1280.jpg" 
     data-header="Chupacabra"
     data-text="Goat-sucking mysterious predator"
     data-location="Puerto Rico"
     data-date="1995-03-11"
     data-discoverer="Madelyne Tolentino">
</div>

<div data-component="cryptid-narrow-hero"
     data-imageurl="https://cdn.pixabay.com/photo/2023/11/14/13/54/mot-8387785_960_720.png" 
     data-header="Mothman"
     data-text="Winged red-eyed harbinger"
     data-location="Point Pleasant, West Virginia"
     data-date="1966-11-12"
     data-discoverer="Roger Scarberry">
</div>

<div data-component="cryptid-narrow-hero"
     data-imageurl="https://cdn.pixabay.com/photo/2024/03/26/04/27/ai-generated-8655879_1280.jpg" 
     data-header="Lizard Man"
     data-text="Reptilian swamp-dwelling cryptid"
     data-location="Scape Ore Swamp, South Carolina"
     data-date="1988-07-14"
     data-discoverer="Christopher Davis">
</div>

<div data-component="cryptid-narrow-hero"
     data-imageurl="https://cdn.pixabay.com/photo/2024/08/06/09/48/ai-generated-8948929_1280.jpg" 
     data-header="Yeti"
     data-text="Snowy Himalayan ape-like being"
     data-location="Himalayas, Nepal"
     data-date="1832-10-15"
     data-discoverer="B.H. Hodgson">
</div>
</section>
    `;
  
    // Apply HTML to the hostComponent
    hostComponent.innerHTML = indexHTML;
    window.addEventListener('scroll', () => {
     if (window.scrollY === 0) {
       // User is at the top of the page
       hostComponent.querySelector(".down-button").style = 'opacity: 1; visibility: visible';
     } else {
       // User is not at the top
       hostComponent.querySelector(".down-button").style = 'opacity: 0; visibility: hidden';
     }
   });
  };
  