+function () {
    document.querySelector('.accordeon__section').classList.add('opened')

    document.querySelectorAll('.accordeon__section').forEach(function (section) {
        section.addEventListener('click', function (e) {
            document.querySelectorAll('.accordeon__section').forEach(function (section) {
               section.classList.remove('opened')
            })

            e.target.closest('.accordeon__section').classList.add('opened');
        })

    })
}()
