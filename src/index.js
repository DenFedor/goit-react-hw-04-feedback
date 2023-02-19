import React from 'react';
import ReactDOM from 'react-dom/client';
import { FeedbackCounterHooks } from 'components/FeedbackCounter/FeedbackCounter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackCounterHooks />
  </React.StrictMode>
);
