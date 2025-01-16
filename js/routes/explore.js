export default (hostComponent) => {
    // Define HTML structure with data attributes directly in the template
    const indexHTML = `
      <div data-component="fullscreen-hero"
           data-image-url="https://images.unsplash.com/photo-1679584052596-3efcfd169f42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           data-overlay-color="rgba(0, 0, 0, 0.5)"
           data-header="This is a fullscreen-hero"
           data-text="Some text you want to right here"
           data-button-text="Add your link url here"
           data-button-link="/calendar"
           >
      </div>
  
      <div data-component="narrow-hero"
           data-imageurl="https://cdn.pixabay.com/photo/2024/10/30/10/07/ai-generated-9161334_960_720.png" 
           data-header="Lockness">
      </div>
      <div data-component="narrow-hero"
      data-imageurl="https://images.unsplash.com/photo-1679584052596-3efcfd169f42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      data-header="Monkey"
      data-text="AAAAAAAAAAAAAA">
      </div>
    `;
  
    // Apply HTML to the hostComponent
    hostComponent.innerHTML = indexHTML;
  };
  