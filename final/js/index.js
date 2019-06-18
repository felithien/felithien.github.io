///get started
$(function() {
    $('#nav').hide()
    $('#jumbotron').show()
    $('#food').hide()
    $('.modal_fade').hide()
    $('#play').hide()
    $('#game').hide()
    $('#c1').hide()
    $('#c2').hide()
    $('#c3').hide()
    $('#c4').hide()
    $('#c5').hide()
    $('#c6').hide()
    $('#c7').hide()
    $('#c8').hide()
    $('#c9').hide()
    $('#c10').hide()
    $('#c11').hide()
    $('#c12').hide()
})

// buttons : show n hide
$('#home').on('click', function() {
    $('#nav').hide()
    $('#jumbotron').show()
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#c1').hide()
    $('#c2').hide()
    $('#c3').hide()
    $('#c4').hide()
    $('#c5').hide()
    $('#c6').hide()
    $('#c7').hide()
    $('#c8').hide()
    $('#c9').hide()
    $('#c10').hide()
    $('#c11').hide()
    $('#c12').hide()
})

$('#start').on('click', function() {
    $('#nav').show()
    $('#jumbotron').hide()
    $('#food').show()
    $('#play').show()
    $('#game').hide()
    $('#intro').addClass("active")
    $('#c1').hide()
    $('#c2').hide()
    $('#c3').hide()
    $('#c4').hide()
    $('#c5').hide()
    $('#c6').hide()
    $('#c7').hide()
    $('#c8').hide()
    $('#c9').hide()
    $('#c10').hide()
    $('#c11').hide()
    $('#c12').hide()
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
    $('#c1').show()
})
$('#h1').on('click', function() {
    $('#c1').hide()
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
    $('#c2').show()
})
$('#h2').on('click', function() {
    $('#c2').hide()
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
    $('#c3').show()
})
$('#h3').on('click', function() {
    $('#c3').hide()
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
    $('#c4').show()
})
$('#h4').on('click', function() {
    $('#c4').hide()
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
    $('#c5').show()
})
$('#h5').on('click', function() {
    $('#c5').hide()
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
    $('#c6').show()
})
$('#h6').on('click', function() {
    $('#c6').hide()
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
    $('#c7').show()
})
$('#h7').on('click', function() {
    $('#c7').hide()
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
    $('#c8').show()
})
$('#h8').on('click', function() {
    $('#c8').hide()
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
    $('#c9').show()
})
$('#h9').on('click', function() {
    $('#c9').hide()
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
    $('#c10').show()
})
$('#h10').on('click', function() {
    $('#c10').hide()
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
    $('#c11').show()
})
$('#h11').on('click', function() {
    $('#c11').hide()
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
    $('#c12').show()
})
$('#h12').on('click', function() {
    $('#c12').hide()
})


// challenge
$('#play').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').show()
    $('#intro').removeClass("active")
    $('#study').addClass("active")
    $('#favo').removeClass("active")
})
$('#study').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').show()
    $('#intro').removeClass("active")
    $('#study').addClass("active")
    $('#favo').removeClass("active")
})


$('#intro').on('click', function() {
    $('#food').show()
    $('#play').show()
    $('#game').hide()
    $('#intro').addClass("active")
    $('#study').removeClass("active")
    $('#favo').removeClass("active")
})

$('#back').on('click', function() {
    $('#food').show()
    $('#play').show()
    $('#game').hide()
    $('#intro').addClass("active")
    $('#study').removeClass("active")
    $('#favo').removeClass("active")
})

$('#favo').on('click', function() {
    $('#food').hide()
    $('#play').hide()
    $('#game').hide()
    $('#favo').addClass("active")
    $('#intro').removeClass("active")
    $('#study').removeClass("active")
    $('#back').show()
})



$('#yes').on('click', function() {
    $('#yup').modal({ backdrop: true })
})

$('#ops').on('click', function() {
    $('#no').modal({ backdrop: true })
})