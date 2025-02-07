document.getElementById('upload1').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('horse1').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('upload2').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('horse2').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function startRace() {
    const horse1 = document.getElementById('horse1');
    const horse2 = document.getElementById('horse2');
    const trackHeight = 400; // Height of the race track

    horse1.style.bottom = '0';
    horse2.style.bottom = '0';

    const randomDistance1 = Math.floor(Math.random() * trackHeight);
    const randomDistance2 = Math.floor(Math.random() * trackHeight);

    setTimeout(() => {
        horse1.style.bottom = `${randomDistance1}px`;
        horse2.style.bottom = `${randomDistance2}px`;

        if (randomDistance1 > randomDistance2) {
            alert('Horse 1 wins!');
        } else if (randomDistance2 > randomDistance1) {
            alert('Horse 2 wins!');
        } else {
            alert('It\'s a tie!');
        }
    }, 500);
}
