import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {
  const element = (
    <section>
      <div class="sec sec1">
        <h2 id="hours">{ new Date().getHours()}</h2>
        <h2 id="dot">:</h2>
        <h2 id="minutes">{new Date().getMinutes()}</h2>
      </div>
      <div class="sec sec2">
        <h2 id="seconds">{ new Date().getSeconds()}</h2>
        <span id="ampm">AM</span>
      </div>
    </section>
  );
  
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);