class DeliverySchedule extends HTMLElement {
    constructor() {
        super();
        this.input = this.querySelector('#delivery-days-show').addEventListener("click", this.toggleList.bind(this));
        this.days = document.getElementById("delivery-days").innerHTML;
        this.daysList = document.getElementById("delivery-days-list");
        this.toggle = false
    }

    connectedCallback() {
        const milisecondsInDay = (3600 * 1000 * 24);
        const workDays = [1, 2, 3, 4, 5];

        for (let i=0; i<= this.days; i++) {
            let dateObj = new Date(Date.now() + milisecondsInDay * i);
            let mm = dateObj.getUTCMonth() + 1;
            let dd = dateObj.getUTCDate();
            let yyyy = dateObj.getUTCFullYear();

            let span = document.createElement("span");

            output = (`${dd}-${mm}-${yyyy}`);
            span.innerHTML = output;
            span.classList.add("delivery-time__day");

            if (workDays.includes(dateObj.getDay())) {
                span.classList.add("delivery-time__day--normal");
            } else {
                span.classList.add("delivery-time__day--absentation");
            }
            document.getElementById("delivery-days-list").appendChild(span);
        }
    }

    toggleList(event){
        event.preventDefault();
        if(this.toggle == false) {
            this.toggle = true
            this.daysList.classList.remove("hidden");
        } else {
            this.toggle = false
            this.daysList.classList.add("hidden");
        }
    }
}

customElements.define('delivery-schedule', DeliverySchedule);