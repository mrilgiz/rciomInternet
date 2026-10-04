const nav = document.querySelector('header nav');
render()
async function render() {
    const res = await fetch('/auth/check')
    const status = res.status
    if (status == 200) {
        nav.innerHTML = `
        <a href="index.html">
            Главная
        </a>
        <a href="archive.html">
            Исследования
        </a>
        <a href="index.html" onclick="fetch('/auth/logout')">
            Выйти
        </a>
        `
    } else {
        nav.innerHTML = `
        <a href="index.html">
            Главная
        </a>
        <a href="archive.html">
            Исследования
        </a>
        <a href="enter.html">
            Войти
        </a>
        `
    }
}