// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to calculate Radius
function calculateRadius() {
    const R2 = parseFloat(document.getElementById('R2').value);
    const R3 = parseFloat(document.getElementById('R3').value);
    const angle = parseFloat(document.getElementById('angle').value);
    const angleUnits = document.getElementById('angle-units').value;

    let angleInRadians = angle;
    if (angleUnits === 'degrees') {
        angleInRadians = degreesToRadians(angle);
    }

    // Calculate R1
    const R1 = R2 * Math.cos(angleInRadians) +
               Math.sqrt(R3**2 - R2**2 * Math.sin(angleInRadians)**2);

    document.getElementById('radius-result').textContent = `R1 = ${R1}`;
}

// Function to calculate Velocity
function calculateVelocity() {
    const W2 = parseFloat(document.getElementById('W2').value);
    const R2 = parseFloat(document.getElementById('R2-velocity').value);
    const R3 = parseFloat(document.getElementById('R3-velocity').value);
    const angle = parseFloat(document.getElementById('angle-velocity').value);
    const angleUnits = document.getElementById('angle-units-velocity').value;

    let angleInRadians = angle;
    if (angleUnits === 'degrees') {
        angleInRadians = degreesToRadians(angle);
    }

    // Calculate Velocity
    const denominator = Math.sqrt(R3**2 - R2**2 * Math.sin(angleInRadians)**2);
    if (denominator === 0) {
        document.getElementById('velocity-result').textContent = 'Error: Division by zero';
        return;
    }

    const V1 = -W2 * R2 * (Math.sin(angleInRadians) + 
            (R2 * Math.sin(angleInRadians) * Math.cos(angleInRadians)) / denominator);

    document.getElementById('velocity-result').textContent = `V1 = ${V1}`;
}

// Function to show the correct formula section based on selection
function updateFormulaSection() {
    const selectedValue = document.getElementById('formula-select').value;
    document.getElementById('radius-formulae').style.display = selectedValue === 'radius' ? 'block' : 'none';
    document.getElementById('velocity-formulae').style.display = selectedValue === 'velocity' ? 'block' : 'none';
}

// Initialize the page to show the radius formulae by default
window.onload = function() {
    document.getElementById('formula-select').value = 'radius'; // Set default selection
    updateFormulaSection(); // Update the displayed section based on default selection

    // Add event listener to update formula section on selection change
    document.getElementById('formula-select').addEventListener('change', updateFormulaSection);
};
