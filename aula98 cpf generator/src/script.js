import GenerateCPF from './modules/GenerateCPF';
import './assets/css/style.css';

// IIFE: (function() ... return x;)();
(function startGeneration() {
    const generate = new GenerateCPF();
    const result = document.querySelector('.result');
    result.innerHTML = generate.newCpf();
})();
