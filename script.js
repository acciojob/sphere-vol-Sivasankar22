function volume_sphere() {
    // Retrieve the radius value entered by the user
    const radius = parseFloat(document.getElementById('radius').value);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Round the calculated volume to four decimal places
        const roundedVolume = volume.toFixed(4);

        // Display the calculated volume in the designated output field
        document.getElementById('volume').value = roundedVolume;
    }

    // Prevent the form from submitting
    return false;
} 

// Attach the volume_sphere function to the form's submit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
