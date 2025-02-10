import {createRoot} from "react-dom/client";
import App from "./App";

class ReactWrapperComponent extends HTMLElement {
  connectedCallback() {
//     this.root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,     
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const root = createRoot(mountPoint);
    root.render(<App />);
  }

}

customElements.define('react-mfe', ReactWrapperComponent);