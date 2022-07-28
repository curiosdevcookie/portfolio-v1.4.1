// class Switcher extends HTMLElement {
//   constructor() {
//     super();
//     let Switcher = this.attachShadow({ mode: 'open' });
//     Switcher.innerHTML = `
//       <style>
//         section {
//           font-family: var(--font-handwritten-sloppy);
//           font-size: 2rem;
//         }
//       </style>

//     <div id='bg'>
//       <div id='one'>
//       </div>
//     </div>
//     `;
//   }

//   connectedCallback() {
//     console.log('Switcher connected');
//   }
// }
// customElements.define('cdc-theme-switcher', Switcher);

document.addEventListener('DOMContentLoaded', function () {
  const backgroundDiv = document.getElementById('bg');
  const firstDiv = document.getElementById('one');
  backgroundDiv.addEventListener('click', function () {
    firstDiv.classList.toggle('active');
    if (firstDiv.className == 'active') {
      backgroundDiv.style.backgroundColor = '#ED9B40';
      firstDiv.style.backgroundColor = '#FFFFFF';
    }
    else {
      backgroundDiv.style.backgroundColor = '#FFFFFF';
      firstDiv.style.backgroundColor = '#ED9B40';
    }
  });
});