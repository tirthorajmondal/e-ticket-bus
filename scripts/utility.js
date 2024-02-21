
// seat added
function seatAdded(){

    const seatNo = document.getElementById('seat-no');
    const seatNoText = seatNo.innerText;
    const seatNumberAdded = parseFloat(seatNoText);
    // return seatNumberAdded;
}
// seat left

function seatLeft(){
    const seatNoLeft = document.getElementById('seat-left');
    const seatNoLeftText = seatNoLeft.innerText;
    const seatNumberLeft = parseFloat(seatNoLeftText);
    console.log(seatNumberLeft);
    return seatNumberLeft;
}

function testing(){
    document.addEventListener('click', function(event){
        seatClick = event.innerText;
        console.log(seatClick);
    })
}

