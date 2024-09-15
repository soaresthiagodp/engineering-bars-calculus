// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to calculate Radius
function calculateRadius() {
    const R2 = parseFloat(document.getElementById('R2-radius').value);
    const R3 = parseFloat(document.getElementById('R3-radius').value);
    const angle = parseFloat(document.getElementById('angle-radius').value);
    const angleUnits = document.getElementById('angle-units-radius').value;

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
    const W2 = parseFloat(document.getElementById('W2-velocity').value);
    const R2 = parseFloat(document.getElementById('R2-velocity').value);
    const R3 = parseFloat(document.getElementById('R3-velocity').value);
    const angle = parseFloat(document.getElementById('angle-velocity').value);
    const angleUnits = document.getElementById('angle-units-velocity').value;

    let angleInRadians = angle;
    if (angleUnits === 'degrees') {
        angleInRadians = degreesToRadians(angle);
    }

    // Calculate V1
    const V1 = -W2 * R2 * (Math.sin(angleInRadians) +
                            (R2 * Math.sin(angleInRadians) * Math.cos(angleInRadians)) /
                            Math.sqrt(R3**2 - R2**2 * Math.sin(angleInRadians)**2));

    document.getElementById('velocity-result').textContent = `V1 = ${V1}`;
}

// Function to calculate Acceleration
function calculateAcceleration() {
    const W2 = parseFloat(document.getElementById('W2-acceleration').value);
    const R2 = parseFloat(document.getElementById('R2-acceleration').value);
    const R3 = parseFloat(document.getElementById('R3-acceleration').value);
    const angle = parseFloat(document.getElementById('angle-acceleration').value);
    const angleUnits = document.getElementById('angle-units-acceleration').value;

    let angleInRadians = angle;
    if (angleUnits === 'degrees') {
        angleInRadians = degreesToRadians(angle);
    }

    // Calculate A1
    const A1 = - (W2**2 * R2 * Math.cos(angleInRadians)) -
               (W2**2 * R2**2 * (Math.cos(angleInRadians)**2 - Math.sin(angleInRadians)**2)) /
               Math.sqrt(R3**2 - R2**2 * Math.sin(angleInRadians)**2) -
               (W2**2 * R2**4 * Math.cos(angleInRadians)**2 * Math.sin(angleInRadians)**2) /
               (R3**2 - R2**2 * Math.sin(angleInRadians)**2)**(3/2);

    document.getElementById('acceleration-result').textContent = `A1 = ${A1}`;
}

// Function to calculate Excentric Radius
function calculateExcentricRadius() {
    const E = parseFloat(document.getElementById('E-excentricradius').value);
    const R2 = parseFloat(document.getElementById('R2-excentricradius').value);
    const R3 = parseFloat(document.getElementById('R3-excentricradius').value);
    const angle = parseFloat(document.getElementById('angle-excentricradius').value);
    const angleUnits = document.getElementById('angle-units-excentricradius').value;

    let angleInRadians = angle;
    if (angleUnits === 'degrees') {
        angleInRadians = degreesToRadians(angle);
    }

    // Calculate R1
    console.log(E, R2, R3, angleInRadians)
    const R1 = R2 * Math.cos(angleInRadians) +
               Math.sqrt(R3**2 - (R2 * Math.sin(angleInRadians) + E)**2);

    document.getElementById('excentricradius-result').textContent = `R1 = ${R1}`;
}

// Function to calculate Excentric Velocity
function calculateExcentricVelocity() {
    const E = parseFloat(document.getElementById('E-excentricvelocity').value);
    const W2 = parseFloat(document.getElementById('W2-excentricvelocity').value);
    const R2 = parseFloat(document.getElementById('R2-excentricvelocity').value);
    const R3 = parseFloat(document.getElementById('R3-excentricvelocity').value);
    const angle = parseFloat(document.getElementById('angle-excentricvelocity').value);
    const angleUnits = document.getElementById('angle-units-excentricvelocity').value;

    let angleInRadians = angle;
    if (angleUnits === 'degrees') {
        angleInRadians = degreesToRadians(angle);
    }

    // Calculate V1
    const V1 = -W2 * R2 * (Math.sin(angleInRadians) +
                            (R2 * Math.sin(angleInRadians) * Math.cos(angleInRadians)) /
                            Math.sqrt(R3**2 - (R2 * Math.sin(angleInRadians) + E)**2));

    document.getElementById('excentricvelocity-result').textContent = `V1 = ${V1}`;
}

// Function to calculate Excentric Acceleration
function calculateExcentricAcceleration() {
    const E = parseFloat(document.getElementById('E-excentricacceleration').value);
    const W2 = parseFloat(document.getElementById('W2-excentricacceleration').value);
    const R2 = parseFloat(document.getElementById('R2-excentricacceleration').value);
    const R3 = parseFloat(document.getElementById('R3-excentricacceleration').value);
    const angle = parseFloat(document.getElementById('angle-excentricacceleration').value);
    const angleUnits = document.getElementById('angle-units-excentricacceleration').value;

    let angleInRadians = angle;
    if (angleUnits === 'degrees') {
        angleInRadians = degreesToRadians(angle);
    }

    // Calculate A1
    const A1 = - (W2**2 * R2**2 * Math.sin(angleInRadians)) -
               (W2**2 * R2**2 * (Math.cos(angleInRadians)**2 - Math.sin(angleInRadians)**2)) /
               Math.sqrt(R3**2 - (R2 * Math.sin(angleInRadians) + E)**2) -
               (W2**2 * R2**4 * Math.cos(angleInRadians)**2 * Math.sin(angleInRadians)**2) /
               (R3**2 - (R2 * Math.sin(angleInRadians) + E)**2)**(3/2);
    document.getElementById('excentricacceleration-result').textContent = `A1 = ${A1}`;
}

// Show/hide sections based on formula selection
document.getElementById('formula-select').addEventListener('change', function () {
    const selectedFormula = this.value;
    document.querySelectorAll('.formulae-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(`${selectedFormula}-formulae`).style.display = 'block';
});

// Initialize to show the first section by default
document.getElementById('formula-select').dispatchEvent(new Event('change'));

document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.classList.toggle("dark-mode");

    // Salva a preferência no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Verifica a preferência do usuário e aplica o modo escuro se estiver habilitado
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    document.getElementById("dark-mode-toggle").classList.add("dark-mode");
}