document.addEventListener("DOMContentLoaded", calculateDeliveryDays());

function calculateDeliveryDays() {
    let deliveryTime = document.querySelectorAll("[data-delivery-time]")[0].dataset.deliveryTime;

    // getDay: 0 - sunday, 6 - saturday, 1-5 - normal
    const workDays = [1, 2, 3, 4, 5];
    const milisecondsInDay = (3600 * 1000 * 24);

    let suffix = "days";
    let index = 0;
    let calculatedDeliveryTime = 0;

    while (index <= deliveryTime) {
        var date = new Date(Date.now() + milisecondsInDay * calculatedDeliveryTime);
        var day = date.getDay();

        if (workDays.includes(day)) { index++; }

        calculatedDeliveryTime++;
    }

    //remove today
    calculatedDeliveryTime -= 1

    //change suffix to day if delivery is in one day
    if (calculatedDeliveryTime == 1) { suffix = "day" }

    document.getElementById("delivery-days").innerHTML = calculatedDeliveryTime;
    document.getElementById("delivery-suffix").innerHTML = suffix;

    addDeliveryDate(calculatedDeliveryTime);
}

function addDeliveryDate(days) {
    const milisecondsInDay = (3600 * 1000 * 24);

    let dateObj = new Date(Date.now() + milisecondsInDay * days);
    let mm = dateObj.getUTCMonth() + 1;
    let dd = dateObj.getUTCDate();
    let yyyy = dateObj.getUTCFullYear();

    newdate = dd + "-" + mm + "-" + yyyy;
    document.getElementById("delivery-date").innerHTML = newdate;
}
