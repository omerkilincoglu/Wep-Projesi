let tmz = document.getElementById("tmz");
let form = document.getElementById("form");


form.addEventListener('submit', function (e) {

    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;
    let isim = document.getElementById("isim").value;
    
    if (!email || !msg || !isim || !testMail(email)) {
        e.preventDefault();
    };
});

function testMail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

tmz.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
    document.getElementById("isim").value = "";
})
