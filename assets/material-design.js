
document.addEventListener("DOMContentLoaded", calculateDeliveryDays());

function calculateDeliveryDays() {
    let deliveryTime = document.querySelectorAll("[data-delivery-time]")[0].dataset.deliveryTime;
    let calculatedDeliveryTime = 0;
    console.log(deliveryTime);

    // getDay: 0 - sunday, 6 - saturday, 1-5 - normal
    const milisecondsInDay = (3600 * 1000 * 24);

    for (let i = 0; i <= deliveryTime; i++) {
        var date = new Date(Date.now() + milisecondsInDay * i);
        var day = date.getDay();

        if (day == 0 || day == 6) {
            calculatedDeliveryTime++;
        }

        calculatedDeliveryTime++;
    }
    console.log(calculatedDeliveryTime);

}