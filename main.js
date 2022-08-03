menuListArray = ["calabresa",
                "frango",
                "Extravaganza",
                "portuguesa",
                "quatro queijos",
                "Vegetariana"];

function getMenu() {
    var htmldata = "";
    menuListArray.sort();
    for (var i = 0; i < menuListArray.length; i++) {
        htmldata = htmldata + menuListArray[i] + "<br>"
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem() {
    var htmldata;
    var imgtags = '<img id="im1" src="images/pizzaImg.png"/>'
    //var img = document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata = ""
    for (var i = 0; i < menuListArray.length; i++) {
        htmldata = htmldata + imgtags + "Pizza " + menuListArray[i] + "<br>"
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop() {

    var item = document.getElementById("addItem");

    if (item.value != "") {
        menuListArray.push(item.value);
        item.value = "";
        addItem();
    } else {
        alert("Escreva sua sugestão");
    }

}