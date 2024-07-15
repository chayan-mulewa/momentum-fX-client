import { useEffect } from 'react';

const useParallax = () => {

    const parallax = (elementId, speed) => {

        const MAX_SPEED = 10;
        const MIN_SPEED = 0;
        const DEFAULT_SPEED = 0;

        useEffect(() => {

            // Validate speed value
            let validSpeed = speed;
            if (typeof speed !== 'number' || speed < MIN_SPEED || speed > MAX_SPEED) {
                console.error(`speed value ${speed} is invalid. It must be a number between 0 and 10. Setting to default (${DEFAULT_SPEED}).`);
                validSpeed = DEFAULT_SPEED;
            }

            // Validate element exists
            const element = document.getElementById(elementId);
            if (!element) {
                console.error(`Element with ID ${elementId} not found.`);
                return;
            }

            const onScroll = () => {
                const scrollTop = window.scrollY;
                const offSet = -(scrollTop * (validSpeed / 10)); // Adjust speed here
                element.style.transform = `translateY(${offSet}px)`;
            };

            if (validSpeed > 0) {
                window.addEventListener('scroll', onScroll);
            }

            return () => {
                window.removeEventListener('scroll', onScroll);
            };
        }, [elementId, speed]); // Ensure effect runs when elementId or speed changes
    };

    return [parallax];
};

export default useParallax;
