// File: js/components/nav.js
// Repository: https://github.com/quantuminformation/vanillajs-patterns

/**
 * Navigation Component
 * SPDX-License-Identifier: MIT
 *
 * This component provides a responsive navigation menu with two modes: sidebar mode and header-bar mode.
 * It includes optional "burger" button functionality for smaller screens in header-bar mode, allowing the navigation menu
 * to toggle visibility. This component assumes it is wrapped by a parent element with a main sibling
 * for the main content, allowing it to modify the flex direction of the parent to suit layout needs.
 *
 * IMPORTANT: Ensure that the parent element can adapt (i.e. it is using flex) its layout based on the flex direction change
 * initiated by this component.
 *
 * @module NavComponent
 * @version 0.2.0
 * @param {HTMLElement} hostComponent - The root element for this navigation component. Must have
 *                                      `data-component="nav"` attribute. Optionally, set
 *                                      `data-header-bar="true"` for header-bar mode, and
 *                                      `data-burger-px` to define the burger menu breakpoint.
 *
 * @example
 * // HTML Usage in Sidebar Mode
 * <nav data-component="nav"></nav>
 *
 * @example
 * // HTML Usage in Header-Bar Mode with Burger Menu
 * <nav data-component="nav" data-header-bar="true" data-burger-px="768"></nav>
 *
 * @description
 * - **Sidebar Mode**: Default mode, with vertical layout.
 * - **Header-Bar Mode**: Enabled by setting `data-header-bar="true"`. In this mode, the navigation
 *   aligns horizontally and includes a burger button for screen widths below the defined `burgerPx` breakpoint.
 */
export default (hostComponent) => {
  const render = () => {
    const { burgerPx, headerBar } = hostComponent.dataset;

    const navStyles = //css 
    `
      nav {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 1rem;
        padding: 10px 20px;
        background-color: var(--nav-background-color);
        z-index: 100;

        a {
          color: var(--default-text);
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        a.active {
          color: var(--primary-color); /* Active link color */
        }

        &.header-bar-mode {
          flex-direction: row;
          justify-content: center;
          background-color: transparent;
          width: 100%;

          @media (max-width: ${burgerPx}px) {
            flex-direction: column;

            a {
              width: 100%;
            }

            align-items: center;
            position: absolute;
            background-color: var(--nav-background-color);
            top: 40px;
            border-radius: 1rem;
            display: none;
          }
        }
      }

      .burger-button {
        position: absolute;
        right: 0;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 100;
      }

      nav:not(.header-bar-mode) {
        @media (max-width: 499px) {
          .text {
            display: none;
          }
        }

        @media (min-width: 500px) {
          .icon {
            display: none;
          }
        }
      }

      @media (max-width: ${burgerPx}px) {
        nav.header-bar-mode.burger-open {
          display: flex !important;
        }
      }

      @media (min-width: ${burgerPx}px) {
        .burger-button {
          display: none !important;
        }
      }
    `;

    if (headerBar === 'true') {
      hostComponent.classList.add('header-bar-mode');
      hostComponent.parentElement.style.flexDirection = 'column';
    }

    const toggleNavVisibility = () => {
      hostComponent.classList.toggle('burger-open');
    };

    hostComponent.innerHTML = `
      <style>${navStyles}</style>
      <a href="/" title="Home">
        <span class="icon">&#x1F3E0;</span>
        <span class="text">Home</span>
      </a>
      <a href="/explore" title="Explore Wildlife">
        <span class="icon">🐲</span>
        <span class="text">Explore Wildlife</span>
      </a>
      <a href="/submit" title="Submit a Sighting">
        <span class="icon">🖊️</span>
        <span class="text">Submit a Sighting</span>
      </a>
      <a href="/cryptid-map" title="Map">
        <span class="icon">🗺️</span>
        <span class="text">Map</span>
      </a>
    `;

    // Function to update the active link based on the current path
    const updateActiveLink = () => {
      const currentPath = window.location.pathname;
      hostComponent.querySelectorAll('a').forEach((link) => {
        const linkPath = link.getAttribute('href');
        link.classList.toggle('active', linkPath === currentPath);
      });
    };
    updateActiveLink();

    // Listen for popstate events to update active link on browser navigation
    window.addEventListener('popstate', updateActiveLink);

    if (headerBar === 'true' && burgerPx) {
      hostComponent.parentElement.insertAdjacentHTML(
        'afterbegin',
        `
          <button class="burger-button squarify wireframe border-none">
            <svg class="icon" viewBox="0 0 100 80" width="20" height="20" fill="currentColor">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        `,
      );

      const burgerButton = hostComponent.parentElement.querySelector('.burger-button');

      document.addEventListener('click', (event) => {
        const isBurgerOpen = hostComponent.classList.contains('burger-open');
        const clickedBurgerButton = event.target.closest('.burger-button');
        const clickedNavItem = event.target.closest('a');

        if (clickedBurgerButton) {
          event.stopPropagation();
          toggleNavVisibility();
        }

        if (isBurgerOpen && clickedNavItem) {
          toggleNavVisibility();
        }

        if (isBurgerOpen && !event.target.closest('nav') && !clickedBurgerButton) {
          toggleNavVisibility();
        }
      });
    }
  };

  render();
};
