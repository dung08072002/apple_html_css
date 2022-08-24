const selectElement = (element) => document.querySelector(element);
selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});
$(document).ready(function() {
    $("#title-1").click(function() {
        $("#list-1").toggle();
    });
    $("#title-2").click(function() {
        $("#list-2").toggle();
    });
    $("#title-3").click(function() {
        $("#list-3").toggle();
    });
    $("#title-4").click(function() {
        $("#list-4").toggle();
    });
    $("#title-5").click(function() {
        $("#list-5").toggle();
    });
    $("#title-6").click(function() {
        $("#list-6").toggle();
    });
    $("#title-7").click(function() {
        $("#list-7").toggle();
    });
    $("#title-8").click(function() {
        $("#list-8").toggle();
    });
    $("#title-9").click(function() {
        $("#list-9").toggle();
    });
    $("#title-10").click(function() {
        $("#list-10").toggle();
    });
});