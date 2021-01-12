$(".btn-login").click(function() {
    var username = $("#username").val()
    var email = $("#email").val()
    var password = $("#pass").val()
    if (username == "" || email == "" || password == "") {
        alert("Tidak Boleh Kosong")
    } else {
        alert("Selamat Datang " + username)
        window.location.replace('../home.html')
    }
})

$(".btn-mulai").click(function() {
    var nama = ("#nama").val()
    var email = ("#email").val()

    if (nama == "" || email == "") {
        alert("Tidak Boleh Kosong")
    } else {
        alert("Berhasil")
    }
})