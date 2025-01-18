export default (hostComponent) => {
    hostComponent.innerHTML = '';
    //language=HTML
    const indexHTML = `
    <style>
       @media (min-width: 600px) {
       .submit-page {
          display: flex;
          gap: 1rem;
         }
         .flex-hero {
            flex-grow: 1;
            .hero-container {
               height: 100%;
               border-top-right-radius: 5%;
               border-bottom-right-radius: 5%;
               overflow: hidden;
            }
         }
      }
</style>
<div class="submit-page">
   <!-- Hero -->
   <div class="flex-hero" style="" data-component="flexible-hero"
      data-image-url="https://www.highlandtitles.com/wp-content/uploads/2023/06/nessi-g440a4b8d7_1920-1200x827.jpg"
      data-overlay-color="rgba(0, 0, 0, 0.5)"
      data-view-height="40"
      data-header="Notify us of new discoveries"
      data-text="Share your cryptid discovery with the team and maybe the whole world!"></div>
   <!-- Form title and form -->
   <div style="flex-grow: 1">
      <h1 class="flex justify-center">Submit your finding</h1>
      <form class="centered" style="padding: 1rem;">
         <div>
            <label for="your-name">Your name</label>
            <input type="text" id="your-name" name="your-name" required>
         </div>
         <div>
            <label for="your-email">Your email</label>
            <input type="email" id="your-email" name="your-email" required>
         </div>
         <div>
            <label for="creature-name">Creature name</label>
            <input type="text" id="creature-name" name="creature-name" placeholder="Unidentified">
         </div>
         <div>
            <label for="area-name">Place of discovery</label>
            <input type="text" id="area-name" name="area-name" required>
         </div>
         <div>
            <label for="date">Date of discovery</label>
            <input type="date" name="date" id="date"  required>
         </div>
         <div>
            <label for="creature-desc">Creature Description</label>
            <textarea id="creature-desc" name="creature-desc" rows="4" required></textarea>
         </div>
         <div class="flex justify-between">
            <label for="iagree">I agree for this information to be displayed publicly</label>
            <span data-component="toggle-switch"></span>
         </div>
         <button type="submit">Submit</button>
      </form>
   </div>
</div>
    `;
    hostComponent.innerHTML = indexHTML;
  };
  