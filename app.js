// app.js

document.addEventListener('DOMContentLoaded', function() {
    var car = document.getElementById('car');
    var cameraWrapper = document.getElementById('cameraWrapper');
    var camera = document.querySelector('a-camera');

    function positionCameraInFrontOfCar() {
        var carPosition = car.getAttribute('position');
        var carRotation = car.getAttribute('rotation');

        var distance = 5; // Distance from the car (adjust as needed)
        var offsetX = distance * Math.sin(THREE.Math.degToRad(carRotation.y));
        var offsetZ = -distance * Math.cos(THREE.Math.degToRad(carRotation.y));

        var cameraPosition = {
          x: carPosition.x + offsetX + 25,
          y: carPosition.y + 5, // Adjust height of camera above car
          z: carPosition.z + offsetZ + 30
        };

          cameraWrapper.setAttribute('position', cameraPosition);
          cameraWrapper.setAttribute('rotation', { x: 0, y: carRotation.y + 45, z: 0 });
        }
        positionCameraInFrontOfCar();
    window.addEventListener('resize', positionCameraInFrontOfCar);
    // Get reference to <a-sky> element
    var sky = document.getElementById('sky');

    // Function to generate random RGB color
    function getRandomColor() {
        var r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
        var g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
        var b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    // Function to change background color
    function changeBackgroundColor() {
        var color = getRandomColor();
        sky.setAttribute('color', color);
    }

    // Automatically change background color every 3 seconds (3000 milliseconds)
    setInterval(changeBackgroundColor, 500);
});
