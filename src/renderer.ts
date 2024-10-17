import './index.css';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await window.electronAPI.helloWord('Hello, World!');
  const hello = document.getElementById('hello') as HTMLDivElement;

  hello.innerHTML = response;
});


