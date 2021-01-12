$(document).ready(function() {
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
        var nama = $("#nama").val()
        var email = $("#email").val()
        var kotlin = $('input[name="course"]:checked').val()

        if (nama == "" || email == "") {
            alert("Tidak Boleh Kosong")
        } else {
            var kelas = $("input[name='course']:checked").val()
            if (kelas == "kotlin") {
                window.location.replace("../page-source/course/course-kotlin.html")
            } else if (kelas == "python") {
                alert("python")
            } else if (kelas == "java") {
                alert("java")
            } else {
                alert("Silahkan Pilih Kelas")
            }
        }
    })

    $(".btn-cetak").click(function() {
        var nama = $('#nama').val()
        $("#namaUser").text(nama)
    })
})