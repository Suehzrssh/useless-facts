
let btn = document.getElementById('btn');

btn.addEventListener('click', bringfacts);

function bringfacts() {
    axios({
        method: 'GET',
        url: 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en',
    }).then(response => printScreen(response))
    .catch(hata => console.log(hata))
    .then(() => console.log("iş tmmdır"))
}

function printScreen(response) {
    document.querySelector('.downside').innerHTML = `
    <div class="block">
            <div class="container">
                <article class="message is-danger">
                    <div class="message-body">
                      <strong>${response.data.text}</strong>
                    </div>
                  </article>
            </div>
        </div>
    `;
}