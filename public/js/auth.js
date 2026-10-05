const form = document.querySelector('form')

if (form.id==='enter') {
    const username_el = form.username;
    const password_el = form.password;


    //Обработка формы эвентс
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        await enter()
    })
    //Авторизация в системе РЦИОМ
    async function enter() {
        const username = username_el.value;
        const password = password_el.value;

        if (username_el.value === '') {
            return;
        }
        if (password_el.value === '') {
            return;
        }

        const res = await fetch('/auth/enter',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username, password: password
                })
            }
            )
        if (res.status === 200) {
            document.location.href='archive.html'
        } else {
            return;
        }
    }

}