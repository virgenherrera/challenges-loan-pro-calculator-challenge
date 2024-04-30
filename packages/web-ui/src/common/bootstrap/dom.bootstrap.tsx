import ReactDOM from 'react-dom/client';
import '../../index.css';
import { App } from '../components';

export function DomBootstrap() {
  const rootElement = document.querySelector('#root');
  const reactRoot = ReactDOM.createRoot(rootElement);

  reactRoot.render(<App />);
}
