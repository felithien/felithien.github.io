///get started
$(function() {
    $('#nav').hide()
    $('#jumbotron').show()
    $('#food').hide()
    $('.modal_fade').hide()
    $('#play').hide()
    $('#game').hide()
    $('#cg').hide()
})

// buttons : show n hide
$('#home').on('click', function() {
    $('#nav').hide()
    $('#jumbotron').show()
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#cg').hide()
})

$('#start').on('click', function() {
    $('#nav').show()
    $('#jumbotron').hide()
    $('#food').show()
    $('#play').show()
    $('#game').hide()
    $('#intro').addClass("active")
    $('#cg').hide()
})


// dialogue message for each food
$('#fa').on('click', function() {
    $('#f1').modal({ backdrop: true })
})
$('#a1').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c1').removeClass("card-inactive")
    showCard();
})
$('#h1').on('click', function() {
    $('#c1').addClass("card-inactive")
    showCard();
})

$('#fb').on('click', function() {
    $('#f2').modal({ backdrop: true })
})
$('#a2').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c2').removeClass("card-inactive")
    showCard();
})
$('#h2').on('click', function() {
    $('#c2').addClass("card-inactive")
    showCard();
})

$('#fc').on('click', function() {
    $('#f3').modal({ backdrop: true })
})
$('#a3').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c3').removeClass("card-inactive")
    showCard();
})
$('#h3').on('click', function() {
    $('#c3').addClass("card-inactive")
    showCard();
})

$('#fd').on('click', function() {
    $('#f4').modal({ backdrop: true })
})
$('#a4').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c4').removeClass("card-inactive")
    showCard();
})
$('#h4').on('click', function() {
    $('#c4').addClass("card-inactive")
    showCard();
})

$('#fe').on('click', function() {
    $('#f5').modal({ backdrop: true })
})
$('#a5').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c5').removeClass("card-inactive")
    showCard();
})
$('#h5').on('click', function() {
    $('#c5').addClass("card-inactive")
    showCard();
})

$('#ff').on('click', function() {
    $('#f6').modal({ backdrop: true })
})
$('#a6').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c6').removeClass("card-inactive")
    showCard()
})
$('#h6').on('click', function() {
    $('#c6').addClass("card-inactive")
    showCard();
})

$('#fg').on('click', function() {
    $('#f7').modal({ backdrop: true })
})
$('#a7').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c7').removeClass("card-inactive")
    showCard()
})
$('#h7').on('click', function() {
    $('#c7').addClass("card-inactive")
    showCard();
})


$('#fm').on('click', function() {
    $('#f8').modal({ backdrop: true })
})
$('#a8').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c8').removeClass("card-inactive")
    showCard()
})
$('#h8').on('click', function() {
    $('#c8').addClass("card-inactive")
    showCard();
})


$('#fn').on('click', function() {
    $('#f9').modal({ backdrop: true })
})
$('#a9').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c9').removeClass("card-inactive")
    showCard()
})
$('#h9').on('click', function() {
    $('#c9').addClass("card-inactive")
    showCard();
})

$('#fr').on('click', function() {
    $('#f10').modal({ backdrop: true })
})
$('#a10').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c10').removeClass("card-inactive")
    showCard()
})
$('#h10').on('click', function() {
    $('#c10').addClass("card-inactive")
    showCard();
})


$('#fs').on('click', function() {
    $('#f11').modal({ backdrop: true })
})
$('#a11').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c11').removeClass("card-inactive")
    showCard()
})
$('#h11').on('click', function() {
    $('#c11').addClass("card-inactive")
    showCard();
})

$('#ft').on('click', function() {
    $('#f12').modal({ backdrop: true })
})
$('#a12').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#c12').removeClass("card-inactive")
    showCard()
})
$('#h12').on('click', function() {
    $('#c12').addClass("card-inactive")
    showCard();
})


// challenge
$('#play').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').show()
    $('#cg').hide()
    $('#intro').removeClass("active")
    $('#study').addClass("active")
    $('#favo').removeClass("active")
})
$('#study').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').show()
    $('#cg').hide()
    $('#intro').removeClass("active")
    $('#study').addClass("active")
    $('#favo').removeClass("active")
})


$('#intro').on('click', function() {
    $('#food').show()
    $('#play').show()
    $('#game').hide()
    $('#cg').hide()
    $('#intro').addClass("active")
    $('#study').removeClass("active")
    $('#favo').removeClass("active")
})

$('#back').on('click', function() {
    $('#food').show()
    $('#play').show()
    $('#game').hide()
    $('#cg').hide()
    $('#intro').addClass("active")
    $('#study').removeClass("active")
    $('#favo').removeClass("active")
})

$('#favo').on('click', function() {
    showCard();
})

function showCard() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#back').show()
    $('#cg').show()
    if ($('#c1').hasClass("card-inactive")) {
        $('#c1').hide()
    } else {
        $('#c1').show()
    }
    if ($('#c2').hasClass("card-inactive")) {
        $('#c2').hide()
    } else {
        $('#c2').show()
    }
    if ($('#c3').hasClass("card-inactive")) {
        $('#c3').hide()
    } else {
        $('#c3').show()
    }
    if ($('#c4').hasClass("card-inactive")) {
        $('#c4').hide()
    } else {
        $('#c4').show()
    }
    if ($('#c5').hasClass("card-inactive")) {
        $('#c5').hide()
    } else {
        $('#c5').show()
    }
    if ($('#c6').hasClass("card-inactive")) {
        $('#c6').hide()
    } else {
        $('#c6').show()
    }
    if ($('#c7').hasClass("card-inactive")) {
        $('#c7').hide()
    } else {
        $('#c7').show()
    }
    if ($('#c8').hasClass("card-inactive")) {
        $('#c8').hide()
    } else {
        $('#c8').show()
    }
    if ($('#c9').hasClass("card-inactive")) {
        $('#c9').hide()
    } else {
        $('#c9').show()
    }
    if ($('#c10').hasClass("card-inactive")) {
        $('#c10').hide()
    } else {
        $('#c10').show()
    }
    if ($('#c11').hasClass("card-inactive")) {
        $('#c11').hide()
    } else {
        $('#c11').show()
    }
    if ($('#c12').hasClass("card-inactive")) {
        $('#c12').hide()
    } else {
        $('#c12').show()
    }
}

$('#yes').on('click', function() {
    $('#yup').modal({ backdrop: true })
})

$('#ops').on('click', function() {
    $('#no').modal({ backdrop: true })
})