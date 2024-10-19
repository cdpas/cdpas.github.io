document.addEventListener('DOMContentLoaded', function() {
    const eyes = document.querySelectorAll('.eye');

        document.addEventListener('mousemove', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            eyes.forEach(eye => {
                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;

                const deltaX = mouseX - eyeCenterX;
                const deltaY = mouseY - eyeCenterY;
                const angle = Math.atan2(deltaY, deltaX);

                const distance = Math.min(Math.hypot(deltaX, deltaY), 10); 

                eye.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            });
        });

          console.log(
            '%cPlease visit',
            'text-align: center;font-size: 20px; color: #fff; background-color: #333; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 4px 4px 8px rgba(0, 0, 0, 0.6), 6px 6px 12px rgba(0, 0, 0, 0.5);',
            'https://cdpas.dev'
          );

});

