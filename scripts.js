function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('service-quality').value;
    let numberOfPeople = document.getElementById('people-quantity').value;

    if(bill == '' | serviceQuality == ''){
        alert("Por favor, preencha os valores.");
        return;
    }

    if(numberOfPeople == '' | numberOfPeople <=1){
        numberOfPeople = 1;
        document.getElementById('each').display = 'none';
    } else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * serviceQuality) / numberOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('total-tip').style.display = "block";
}

document.getElementById('total-tip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tips-form').addEventListener("submit", calculateTip);