
const preTipBill = document.getElementById("preTipBill");
const peopleSharing = document.getElementById("peopleSharing");
const serviceQaulity = document.getElementById("serviceQaulity");
const result = document.getElementById("result");
const button = document.getElementById("btn");


const calculateTip = () => {
    const bill = parseFloat(preTipBill.value);
    const people = parseFloat(peopleSharing.value);
    const qaulity = parseFloat(serviceQaulity.value);

    if (bill < 0 || bill == 0 || bill == "") {
        result.innerHTML = "<p>Please enter correct bill amount!</p>"
        result.style.display = "block";
        return;
    }

    if (people < 0 || people == "" || people % 1 !== 0) {
        result.innerHTML = `<p>At least one person has to share!</p>`
        result.style.display = "block";
        return;
    }
    if (qaulity == 0) {
        result.innerHTML = `<p>Service amount can't be zero!</p>`
        result.style.display = "block";
        return;
    }

    const tip = (bill * qaulity / people).toFixed(2);

    result.innerHTML = `<p> Pre tip bill - $ ${bill}</p>
                        <p> Tip amount per person - $ ${tip} </p>
                        <p> People sharing tips - ${people} </p>`

    result.style.display = "block";
}


button.addEventListener("click", () => {
    calculateTip();
});