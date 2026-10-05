const nav = document.querySelector('header nav');


// profile drop_down
// async function profile_dropdown_open() {
//     const profile_dropdown = await nav.querySelector('#profile_dropdown');
//     if (profile_dropdown.classList.contains('open')) {
//         profile_dropdown.classList.remove('open');
//     } else {
//         profile_dropdown.classList.add('open');
//     }
// }

//render nav bar
render()
async function render() {
    const res = await fetch('/auth/check')
    const status = res.status
    if (status === 200) {
        const res_info = await fetch('/user/info')
        const {username, role, access_level} = await res_info.json()
        nav.innerHTML = `
        <a href="index.html">
            Главная
        </a>
        <a href="archive.html">
            Исследования
        </a>
        <div id="profile_btn">
            ${username}
            <p>${role}</p>
            <div id="profile_dropdown">
                <div id="profile_dropdown_actions">
                    <a href="index.html" onclick="fetch('/auth/exit')">
                        Выйти
                    </a>
                </div>
            </div>
        </div>
        `
        // const profile_btn = await nav.querySelector('#profile_btn')
        // profile_btn.addEventListener('click', profile_dropdown_open)
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