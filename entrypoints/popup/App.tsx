import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App: React.FC = () => {
    const handleConnectAll = () => {
        chrome.runtime.sendMessage({ action: 'connectAll' }, (response) => {
            console.log(response.status);
        });
    };

    return (
        <div style={{ padding: '10px', textAlign: 'center' }}>
            <button onClick={handleConnectAll} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                Connect All
            </button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
