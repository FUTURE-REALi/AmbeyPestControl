var imageindex=document.querySelectorAll(".slideshow img");
var dotindex=document.querySelectorAll(".img-selector input")
var dotcount=0;
var slideindex=0;
function currentslide(n){
    showindex(slideindex=n);
}
showindex(0);
function showindex(n){
    for(var i=0;i<imageindex.length;i++){
        imageindex[i].style.display="none";
    }
    imageindex[n].style.display="block";
    slideindex=n;
}
autoslideshow();
function autoslideshow(){
    for(var i=0;i<imageindex.length;i++){
        imageindex[i].style.display="none";
    }
    if(slideindex>imageindex.length-1){
        slideindex=0;
        dotcount=0;
    }
    imageindex[slideindex].style.display="block";
    dotindex[dotcount].click();
    slideindex++;
    dotcount++;
    setTimeout(autoslideshow,5000);
}
var container=document.getElementById('quotation-container');
var premiumBtn = document.getElementById('premium-button');
var regularBtn = document.getElementById('regular-button');

regularBtn.addEventListener("click",()=>{
    container.classList.add("active");
});
premiumBtn.addEventListener("click",()=>{
    container.classList.remove("active");
});


document.addEventListener('DOMContentLoaded', () => {
    const serviceSelect = document.getElementById('List-of-services');
    const bhkSelect = document.getElementById('size-of-room');
    const planSelect = document.getElementById('types-of-plan');
    
    const regularOfflinePrice = document.getElementById('regular-cockroach-control-1BHK').querySelector('.pricing-cockroach-regular-offline h1');
    const regularOnlinePrice = document.getElementById('regular-cockroach-control-1BHK').querySelector('.pricing-cockroach-regular-online h1');
    const premiumOfflinePrice = document.getElementById('premium-cockroach-control-1BHK').querySelector('.pricing-cockroach-premium-offline h1');
    const premiumOnlinePrice = document.getElementById('premium-cockroach-control-1BHK').querySelector('.pricing-cockroach-premium-online h1');
    
    const updatePrices = () => {
        const selectedService = serviceSelect.value;
        const selectedBHK = bhkSelect.value;
        const selectedPlan = planSelect.value;
        
        switch(selectedService) {
            case 'Ants-Treatment':
                updatePricesForAnts(selectedBHK);
                break;
            case 'Cockroaches-Treatment':
                updatePricesForCockroaches(selectedBHK);
                break;
            case 'General-Pest-Control':
                updatePricesForGeneral(selectedBHK);
                break;
            case 'Anti-Termite':
                updatePricesForTermite(selectedBHK);
                break;
            case 'Wood-Borer-Treatment':
                updatePricesForWoodBorer(selectedBHK);
                break;
            case 'Rodent-Treatment':
                updatePricesForRodent(selectedBHK);
                break;
            case 'Bed-Bugs-Treatment':
                updatePricesForBedBugs(selectedBHK);
                break;
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
    const updatePricesForAnts = (bhk) => {
        switch(bhk) {
            case '1BHK':
                updatePricesForService('Ants-Treatment', '1BHK');
                break;
            case '2BHK':
                updatePricesForService('Ants-Treatment', '2BHK');
                break;
            case '3BHK':
                updatePricesForService('Ants-Treatment', '3BHK');
                break;
            case '4BHK':
                updatePricesForService('Ants-Treatment', '4BHK');
                break;
            case '5BHK':
                updatePricesForService('Ants-Treatment', '5BHK');
                break;
            case '6BHK':
                updatePricesForService('Ants-Treatment', '6BHK');
                break;
            case '7BHK':
                updatePricesForService('Ants-Treatment', '7BHK');
                break;
            case 'FarmHouse':
                updatePricesForService('Ants-Treatment', 'FarmHouse');
                break;
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
    const updatePricesForCockroaches = (bhk) => {
        switch(bhk) {
            case '1BHK':
                updatePricesForService('Cockroaches-Treatment', '1BHK');
                break;
            case '2BHK':
                updatePricesForService('Cockroaches-Treatment', '2BHK');
                break;
            case '3BHK':
                updatePricesForService('Cockroaches-Treatment', '3BHK');
                break;
            case '4BHK':
                updatePricesForService('Cockroaches-Treatment', '4BHK');
                break;
            case '5BHK':
                updatePricesForService('Cockroaches-Treatment', '5BHK');
                break;
            case '6BHK':
                updatePricesForService('Cockroaches-Treatment', '6BHK');
                break;
            case '7BHK':
                updatePricesForService('Cockroaches-Treatment', '7BHK');
                break;
            case 'FarmHouse':
                updatePricesForService('Cockroaches-Treatment', 'FarmHouse');
                break;
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
    const updatePricesForGeneral = (bhk) => {
        switch(bhk) {
            case '1BHK':
                updatePricesForService('General-Pest-Control', '1BHK');
                break;
            case '2BHK':
                updatePricesForService('General-Pest-Control', '2BHK');
                break;
            case '3BHK':
                updatePricesForService('General-Pest-Control', '3BHK');
                break;
            case '4BHK':
                updatePricesForService('General-Pest-Control', '4BHK');
                break;
            case '5BHK':
                updatePricesForService('General-Pest-Control', '5BHK');
                break;
            case '6BHK':
                updatePricesForService('General-Pest-Control', '6BHK');
                break;
            case '7BHK':
                updatePricesForService('General-Pest-Control', '7BHK');
                break;
            case 'FarmHouse':
                updatePricesForService('General-Pest-Control', 'FarmHouse');
                break;
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
    const updatePricesForTermite = (bhk) => {
        switch(bhk) {
            case '1BHK':
                updatePricesForService('Anti-Termite', '1BHK');
                break;
            case '2BHK':
                updatePricesForService('Anti-Termite', '2BHK');
                break;
            case '3BHK':
                updatePricesForService('Anti-Termite', '3BHK');
                break;
            case '4BHK':
                updatePricesForService('Anti-Termite', '4BHK');
                break;
            case '5BHK':
                updatePricesForService('Anti-Termite', '5BHK');
                break;
            case '6BHK':
                updatePricesForService('Anti-Termite', '6BHK');
                break;
            case '7BHK':
                updatePricesForService('Anti-Termite', '7BHK');
                break;
            case 'FarmHouse':
                updatePricesForService('Anti-Termite', 'FarmHouse');
                break;
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
    const updatePricesForWoodBorer = (bhk) => {
        switch(bhk) {
            case '1BHK':
                updatePricesForService('Wood-Borer-Treatment', '1BHK');
                break;
            case '2BHK':
                updatePricesForService('Wood-Borer-Treatment', '2BHK');
                break;
            case '3BHK':
                updatePricesForService('Wood-Borer-Treatment', '3BHK');
                break;
            case '4BHK':
                updatePricesForService('Wood-Borer-Treatment', '4BHK');
                break;
            case '5BHK':
                updatePricesForService('Wood-Borer-Treatment', '5BHK');
                break;
            case '6BHK':
                updatePricesForService('Wood-Borer-Treatment', '6BHK');
                break;
            case '7BHK':
                updatePricesForService('Wood-Borer-Treatment', '7BHK');
                break;
            case 'FarmHouse':
                updatePricesForService('Wood-Borer-Treatment', 'FarmHouse');
                break;
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
    const updatePricesForRodent = (bhk) => {
        switch(bhk) {
            case '1BHK':
                updatePricesForService('Rodent-Treatment', '1BHK');
                break;
            case '2BHK':
                updatePricesForService('Rodent-Treatment', '2BHK');
                break;
            case '3BHK':
                updatePricesForService('Rodent-Treatment', '3BHK');
                break;
            case '4BHK':
                updatePricesForService('Rodent-Treatment', '4BHK');
                break;
            case '5BHK':
                updatePricesForService('Rodent-Treatment', '5BHK');
                break;
            case '6BHK':
                updatePricesForService('Rodent-Treatment', '6BHK');
                break;
            case '7BHK':
                updatePricesForService('Rodent-Treatment', '7BHK');
                break;
            case 'FarmHouse':
                updatePricesForService('Rodent-Treatment', 'FarmHouse');
                break;
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
    const updatePricesForBedBugs = (bhk) => {
        switch(bhk) {
            case '1BHK':
                updatePricesForService('Bed-Bugs-Treatment', '1BHK');
                break;
            case '2BHK':
                updatePricesForService('Bed-Bugs-Treatment', '2BHK');
                break;
            case '3BHK':
                updatePricesForService('Bed-Bugs-Treatment', '3BHK');
                break;
            case '4BHK':
                updatePricesForService('Bed-Bugs-Treatment', '4BHK');
                break;
            case '5BHK':
                updatePricesForService('Bed-Bugs-Treatment', '5BHK');
                break;
            case '6BHK':
                updatePricesForService('Bed-Bugs-Treatment', '6BHK');
                break;
            case '7BHK':
                updatePricesForService('Bed-Bugs-Treatment', '7BHK');
                break;
            case 'FarmHouse':
                updatePricesForService('Bed-Bugs-Treatment', 'FarmHouse');
                break;
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
    const updatePricesForService = (service, bhk) => {
        // Base prices for each service (can be adjusted as needed)
        const basePrices = {
            'Ants-Treatment': 4000,
            'Cockroaches-Treatment': 4200,
            'General-Pest-Control': 4500,
            'Anti-Termite': 4800,
            'Wood-Borer-Treatment': 5000,
            'Rodent-Treatment': 4300,
            'Bed-Bugs-Treatment': 4600
        };
        
        // Calculate price based on base price and BHK
        let price = basePrices[service] + (parseInt(bhk) - 1) * 500;
        
        // Update UI with calculated price
        regularOfflinePrice.textContent = `Rs.${price}/-`;
        regularOnlinePrice.textContent = `Rs.${price - 200}/-`; // Example adjustment for online price
        premiumOfflinePrice.textContent = `Rs.${price + 500}/-`;
        premiumOnlinePrice.textContent = `Rs.${price + 300}/-`; // Example adjustment for online price
    };
    
    // Event listeners for select elements
    serviceSelect.addEventListener('change', updatePrices);
    bhkSelect.addEventListener('change', updatePrices);
    planSelect.addEventListener('change', updatePrices);
});


//Code for the testimonials
document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.querySelector('.testimonials-responses');
    const sections = document.querySelectorAll('.testimonials-responses-section');
    const leftButton = document.getElementById('left-arrow-button');
    const rightButton = document.getElementById('right-arrow-button');

    let currentIndex = 0;
    const sectionWidth = sections[0].offsetWidth + 20; // 20px for margin
    let timer; // Variable to hold the interval timer

    // Function to update reviews based on direction
    const updateReviews = (direction) => {
        if (direction === 'left') {
            moveLeft();
        } else if (direction === 'right') {
            moveRight();
        }
    };

    // Function to move reviews to the left
    const moveLeft = () => {
        reviewsContainer.style.transition = 'none';
        reviewsContainer.insertBefore(reviewsContainer.lastElementChild, reviewsContainer.firstElementChild);
        reviewsContainer.style.transform = `translateX(-${sectionWidth}px)`;

        setTimeout(() => {
            reviewsContainer.style.transition = 'transform 0.6s ease-in-out';
            reviewsContainer.style.transform = 'translateX(0)';
        }, 20);
    };

    // Function to move reviews to the right
    const moveRight = () => {
        reviewsContainer.style.transition = 'transform 0.6s ease-in-out';
        reviewsContainer.style.transform = `translateX(-${sectionWidth}px)`;

        setTimeout(() => {
            reviewsContainer.style.transition = 'none';
            reviewsContainer.appendChild(reviewsContainer.firstElementChild);
            reviewsContainer.style.transform = `translateX(0)`;
        }, 600);
    };

    // Function to start automatic slideshow
    const startSlideshow = () => {
        timer = setInterval(() => {
            moveRight();
        }, 3000); // Change slide every 3 seconds (adjust as needed)
    };

    // Function to stop automatic slideshow
    const stopSlideshow = () => {
        clearInterval(timer);
    };

    // Event listeners for manual control via buttons
    leftButton.addEventListener('click', () => {
        stopSlideshow(); // Stop automatic slideshow on manual control
        updateReviews('left');
    });

    rightButton.addEventListener('click', () => {
        stopSlideshow(); // Stop automatic slideshow on manual control
        updateReviews('right');
    });

    // Start automatic slideshow initially
    startSlideshow();
});