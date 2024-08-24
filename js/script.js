document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const carMake = document.getElementById('carMake').value;
    const carYear = document.getElementById('carYear').value;
    const carModel = document.getElementById('carModel').value;

    alert(`Submission received: ${carMake} ${carYear} ${carModel}. We'll pretend to process this!`);
});
