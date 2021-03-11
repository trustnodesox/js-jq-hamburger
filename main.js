//inizializzo tre variabili che associo alle icone/elementi HTML del menù
var open = $('.fa-bars')
var hamburger = $('.hamburger-menu')
var close = $('.fa-times')

//inizializzo due funzioni, una per la chiusura ed una per l'apertura dell'hamburger menù
//open.click(function () {
//  hamburger.show()
//})

//close.click(function() {
//  hamburger.hide()
//})


//oppure


//open.click(function() {
  //hamburger.addClass('active')
//})

//close.click(function() {
  //hamburger.removeClass('active')
//})


//oppure


//open.click(function() {
//  hamburger.fadeIn(200)
//})

//close.click(function() {
//  hamburger.fadeOut(200)
//})


//oppure


open.click(function(){
  hamburger.toggle(200)
})

close.click(function(){
  hamburger.toggle(200)
})
