//Built web component for footer:
class Footer extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        section {
          font-family: var(--font-handwritten-sloppy);
          font-size: 1rem;
      </style>

        <section>✨ Built in 🇪🇺🇩🇪 with copious amounts of 🫀 && 🧠 && ☕️ && 🎉 by <a href='https://twitter.com/curiosdevcookie'> @curiosdevcookie.
        </section>
    `;
  }
}
customElements.define('cdc-footer', Footer);
