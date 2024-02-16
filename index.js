
let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');
// console.log(cards);

for (let i = 0; i < cards.length; i++){
    const card = cards[i];
    // console.log(element);
    card.addEventListener("click", function(){
        // console.log('clicked');

        // get the title
        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(" ")[1]);
        console.log(price);

        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + "." + title;
        titleContainer.appendChild(p); 
        titleCount ++;

        // calculate Price..
        totalPrice += price;
        console.log(totalPrice);
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
        })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click',function(){

    // get the value from input field
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    console.log(couponCode);
    if(totalPrice >= 200){
        if(couponCode === "SELL200"){

            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);
        }else{
            alert("Invalid Coupon");
        }

    }else{
        alert("please at least $200 khoroch koren bhai");
    }
});