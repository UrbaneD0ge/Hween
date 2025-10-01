document.addEventListener('DOMContentLoaded', () => {
    const svgElement = document.getElementById('gorey');

    console.log("Script loaded");

    if (svgElement) {
        svgElement.addEventListener('click', () => {
            svgElement.style.transition = 'transform 1s ease-in-out';
            svgElement.style.transform = 'rotate(360deg)';

            // Reset the rotation after the animation ends
            setTimeout(() => {
                svgElement.style.transform = 'rotate(0deg)';
            }, 1000);
        });
    }
});