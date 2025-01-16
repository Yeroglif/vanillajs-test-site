// Stored in /routes/index.js

export default (hostComponent) => {
  // Clear any existing content in the hostComponent
  hostComponent.innerHTML = '';

  // Create some new HTML content
  const indexHTML = `
  <style>
    .cryptid-card {
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
    }
    .card-info {
      height: 50%;
      flex-flow: wrap;
    }

  </style>
  <div data-component="cookies-popup"></div>
  <div class="flex flex-col gap-md">
  <div data-component="flexible-hero"
     data-image-url="https://www.cryptidophilia.com/wp-content/uploads/beast-of-busco-picture.jpg"
     data-overlay-color="rgba(0, 0, 0, 0.5)"
     data-header="Look into the unknown"
     data-text="Some of the most mysterious and mythical creatures are waiting to be discovered"
     data-view-height="50"
     >
  </div>
  <div class="about flex flex-col align-center">
     <h1>Cryptid Discovery Hub</h1>
     <div class="cryptid-about-contents flex flex-col align-center gap-md">
        <p style="text-align: center">The central place for exploring and learning about mysterious creatures from around the world. Whether you're a curious enthusiast or a dedicated researcher, you'll find a wealth of knowledge to dive into.</p>
        <div>
           <a href="/explore" class="button wireframe squarify">See full list</a>
        </div>
     </div>
  </div>
  <div class="cryptid-card-container flex flex-col gap-md">
     <div class="cryptid-card card1 flex flex-col gap-md">
        <div class="cryptid-img-container">
           <img src="https://www.cryptidophilia.com/wp-content/uploads/beast-of-busco-picture.jpg" />
        </div>
        <div class="card-info flex flex-row justify-between gap-md">
           <div class="cryptid-tag-container">
           <h3>Beast of Buasd</h3>
              <p class="badge primary">Turtle</p>
              <p class="badge primary">Funny</p>
              <p class="badge primary">Weird</p>
           </div>
           <a class="icon button wireframe squarify">&Rightarrow;</a>
        </div>
     </div>
        <div class="cryptid-card flex flex-col gap-md">
           <div class="cryptid-img-container">
              <img src="https://images.unsplash.com/photo-1679584052596-3efcfd169f42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
           </div>
           <div class="card-info flex flex-row justify-between gap-md">
              <div class="cryptid-tag-container">
              <h3>Beast of Monk</h3>
                 <p class="badge primary">Turtle</p>
                 <p class="badge primary">Funny</p>
                 <p class="badge primary">Weird</p>
              </div>
              <a class="icon button wireframe squarify">&Rightarrow;</a>
           </div>
        </div>
        <div class="cryptid-card flex flex-col gap-md">
           <div class="cryptid-img-container">
              <img src="https://cdn.pixabay.com/photo/2024/10/30/10/07/ai-generated-9161334_960_720.png" />
           </div>
           <div class="card-info flex flex-row justify-between gap-md">
              <div class="cryptid-tag-container">
                 <h3>Beast of Monk</h3>
                 <p class="badge primary">Turtle</p>
                 <p class="badge primary">Funny</p>
                 <p class="badge primary">Weird</p>
              </div>
              <a class="icon button wireframe squarify">&Rightarrow;</a>
           </div>
        </div>
  </div>
</div>
  `;

  // Append the new content to the hostComponent
  hostComponent.innerHTML = indexHTML;
};
