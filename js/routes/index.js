// Stored in /routes/index.js

export default (hostComponent) => {
  // Clear any existing content in the hostComponent
  hostComponent.innerHTML = '';

  // Create some new HTML content
  const indexHTML = `
  <style>
   .about {
      padding: 1rem;
   }
   .about p {
      text-align: center;
   }
   .cryptid-card-container {
      padding: 1rem;
   }
   .cryptid-card h3 {
   margin: 0;
   }
   .cryptid-img-container {
   overflow: hidden;
   aspect-ratio: 16 / 9;
   }
   .cryptid-img-container img {
   object-fit: fill;
   width: 100%;
   height: 100%;
   }
   .card-info {
   flex-flow: wrap;
   }
   @media (min-width: 600px) {
      .about {
         flex-direction: row;
         justify-content: space-between;
         align-items: space-between;
         padding: 0 1rem 0 3rem;
         gap: default;
      }
      .about h1 {
         flex: 1;
         width: 100%;
         text-align: left;
      }
      .about p {
         flex: 1;
         text-align: left;
         width: 100%;
         font-size: 1.3rem; 
      }
      .cryptid-card-container {
         display: grid;
         grid-template-columns: 1fr 1fr; /* Two equal columns */
         grid-template-rows: 1fr 1fr;   /* Two equal rows */
         width: 100%;
         height: 100%;
      }
      .cryptid-card-container >*:nth-child(1) {
         grid-column: 1 / 2; /* Occupies the left column */
         grid-row: 1 / 3;
      }
      .cryptid-card-container >*:nth-child(2) {
      grid-column: 2 / 3; /* Right column */
      grid-row: 1 / 2; 
      }
      .cryptid-card-container >*:nth-child(3) {
         grid-column: 2 / 3; /* Right column */
         grid-row: 2 / 3;    /* Bottom row of the right column */
      }
      .cryptid-card {
         align-items: left;
      }
      .cryptid-card-container >*:nth-child(1) .cryptid-img-container {
         overflow: hidden;
      aspect-ratio: 3 / 4;
      width: 100%;

      }
      .cryptid-img-container {
      overflow: hidden;
      aspect-ratio: 16 / 9;
      width: 100%;

      }
      .cryptid-img-container img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      }
   }
</style>
<div data-component="cookies-popup"></div>
<div class="flex flex-col gap-md">
   <div data-component="flexible-hero"
      data-image-url="https://www.cryptidophilia.com/wp-content/uploads/beast-of-busco-picture.jpg"
      data-overlay-color="rgba(0, 0, 0, 0.5)"
      data-header="Look into the unknown"
      data-text="Some of the most mysterious and mythical creatures are waiting to be discovered"
      data-px-height="50"
      >
   </div>
   <div class="about flex flex-col align-center">
      <h1>Cryptid Discovery Hub</h1>
         <p>The central place for exploring and learning about mysterious creatures from around the world. Whether you're a curious enthusiast or a dedicated researcher, you'll find a wealth of knowledge to dive into.</p>
   </div>
   <div class="cryptid-card-container flex flex-col gap-md">
      <div class="cryptid-card flex flex-col gap-md">
         <div class="cryptid-img-container">
            <img alt='loch ness monster' src="https://cdn.pixabay.com/photo/2024/10/30/10/07/ai-generated-9161334_960_720.png" />
         </div>
         <div class="card-info flex flex-row justify-between gap-md">
            <div class="cryptid-tag-container">
               <h3>See full list of cryptids</h3>
               <p class="badge primary">Lochness</p>
               <p class="badge primary">Monkey</p>
               <p class="badge primary">Lizard</p>
               <p class="badge primary">...</p>
            </div>
            <a href="/explore" class="icon button wireframe squarify">&#10140;</a>
         </div>
      </div>
      <div class="cryptid-card flex flex-col gap-md">
         <div class="cryptid-img-container">
            <img alt='bertelli monster' src="https://blogs.loc.gov/maps/files/2016/08/Bertelli_Monster.png" />
         </div>
         <div class="card-info flex flex-row justify-between gap-md">
            <div class="cryptid-tag-container">
               <h3>Look into the cryptid map</h3>
               <p class="badge primary">Scotland</p>
               <p class="badge primary">Tibet</p>
               <p class="badge primary">Napels</p>
               <p class="badge primary">...</p>
            </div>
            <a href="/cryptid-map" class="icon button wireframe squarify">&#10140;</a>
         </div>
      </div>
      <div class="cryptid-card flex flex-col gap-md">
         <div class="cryptid-img-container">
            <img alt='books to write in' src="https://cdn.pixabay.com/photo/2017/10/12/19/37/book-2845632_1280.jpg" />
         </div>
         <div class="card-info flex flex-row justify-between gap-md">
               <h3>Submit your own discovery</h3>
            <a href="/submit" class="icon button wireframe squarify">&#10140;</a>
         </div>
      </div>
   </div>
</div>
  `;
  // Append the new content to the hostComponent
  hostComponent.innerHTML = indexHTML;
};
