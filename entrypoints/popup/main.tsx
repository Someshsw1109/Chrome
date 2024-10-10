// import './style.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './App.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
