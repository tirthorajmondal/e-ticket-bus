const allSeats = document.getElementsByClassName('seat-btn');
// console.log(allSeats);

for (const seat of allSeats) {
    seat.addEventListener('click', function (event) {
        event.target.setAttribute('disabled', false)
        event.target.style.backgroundColor = 'green';
        event.target.style.color = 'white';



        // update selected seat count 
        const selectedSeatCount = getConvertedValue('selected-seat-count');

        if (selectedSeatCount + 1 > 4) {
            alert('You can not buy more than 4 tickets');
            return;
        }
        document.getElementById('selected-seat-count').innerText = selectedSeatCount + 1;

        // update seat left
        const seatleftCount = getConvertedValue('seat-left')
        document.getElementById('seat-left').innerText = seatleftCount - 1;

        // create div for appendChild

        const div = document.createElement('div');
        div.classList.add('grid', 'grid-cols-3', 'col-span-3', 'gap-x-10');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = event.target.innerText;
        p2.innerText = 'Economy';
        p3.innerText = '550';

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        document.getElementById('selected-seat-container').appendChild(div);


        setTotalPrice();
        setGrandTotal();
    })
}

// get converted number value by id
function getConvertedValue(id) {
    const valueText = document.getElementById(id).innerText;
    const convartedValue = parseInt(valueText);
    return convartedValue;
}

// update total price
function setTotalPrice() {
    const totalPrice = getConvertedValue('total-price');
    sum = totalPrice + 550;
    document.getElementById('total-price').innerText = sum;
}

// update grand total
function setGrandTotal(status) {
    const totalPrice = getConvertedValue('total-price');
    const grandTotal = getConvertedValue('grand-total');

    if (status) {
        const couponValue = document.getElementById('coupon-input').value;
        console.log(couponValue);
        const newCoupon = NEW15;
        const coupleCoupon = COUPLE20;
        if (couponValue == newCoupon) {
            console.log("matched");
        }
    }
    else {

        document.getElementById('grand-total').innerText = totalPrice;
    }
}