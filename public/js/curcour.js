const element = document.querySelector('main section.hero h2');

const cursors = [
    'default',
    'pointer',
    'grab',
    'help',
    'copy',
    'alias',
    'grabbing',
    'progress',
    'none',
    'none',
    'none',
    'none',
];

let i = 0;
let interval;

element.addEventListener('mouseenter', () => {
    interval = setInterval(() => {
        if(Math.random()<0.1) {
            i = (i + 1) % cursors.length;
            element.style.cursor = cursors[i];
        }
    }, 10); // 10 раз в секунду
});

element.addEventListener('mouseleave', () => {
    clearInterval(interval);
    element.style.cursor = 'default';
});