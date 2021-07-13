var new_value = [];
var value_group = 0;

function add() {

    var new_name = document.getElementById("name_input").value;
    new_value.push(new_name);
    document.getElementById("add_list").style.display = "block";
    document.getElementById("add_list").innerHTML = new_name;

}

function submit() {

    var remove_comas = new_value.join(" " + "<br>");
    document.getElementById("guest_list").style.display = "block";
    document.getElementById("guest_list").innerHTML = remove_comas;
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("clear_button").style.display = "inline-block";
    document.getElementById("add_list").style.display = "none";

}

function sort() {

    new_value.sort();
    var sorting_list = new_value.join(" " + "<br>");
    document.getElementById("guest_list").innerHTML = sorting_list;

}

function remove() {

    document.getElementById("sort_button").style.display = "none";

}

function erase() {

    new_value = [];
    document.getElementById("sort_button").style.display = "none";
    document.getElementById("clear_button").style.display = "none";
    document.getElementById("add_list").style.display = "none";
    document.getElementById("guest_list").style.display = "none";
    document.getElementById("name_input").value = "";

}