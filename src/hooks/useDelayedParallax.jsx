import { useEffect } from 'react';

const useDelayedParallax = () => {

    const delayedParallax = (elementId, speed, damping) => {

        const MAX_SPEED = 10;
        const MIN_SPEED = 0;
        const DEFAULT_SPEED = 0;

        const MAX_DAMPING = 0.5;
        const MIN_DAMPING = 0.01;
        const DEFAULT_DAMPING = 0.1;

        useEffect(() => {

            // Validate speed value
            let validSpeed = speed;
            if (typeof speed !== 'number' || speed < MIN_SPEED || speed > MAX_SPEED) {
                console.error(`Speed value ${speed} is invalid. It must be a number between 0 and 10. Setting to default (${DEFAULT_SPEED}).`);
                validSpeed = DEFAULT_SPEED;
            }

            // Validate damping value
            let validDamping = damping;
            if (typeof damping !== 'number' || damping < MIN_DAMPING || damping > MAX_DAMPING) {
                console.error(`Damping value ${damping} is invalid. It must be a number between 0.01 and 1. Setting to default (${DEFAULT_DAMPING}).`);
                validDamping = DEFAULT_DAMPING;
            }

            // Validate element exists
            const element = document.getElementById(elementId);
            if (!element) {
                console.error(`Element with ID ${elementId} not found.`);
                return;
            }

            let currentScrollY = window.scrollY;
            let velocity = 0;
            let rafId = null;

            const smoothScroll = () => {
                velocity += (window.scrollY - currentScrollY) * validDamping;
                currentScrollY += velocity;
                velocity *= validDamping;

                const offSet = -(currentScrollY * (validSpeed / 10));
                element.style.transform = `translateY(${offSet}px)`;

                if (Math.abs(velocity) > damping) {
                    rafId = requestAnimationFrame(smoothScroll);
                } else {
                    rafId = null;
                }
            };

            const onScroll = () => {
                if (!rafId) {
                    rafId = requestAnimationFrame(smoothScroll);
                }
            };

            window.addEventListener('scroll', onScroll);

            return () => {
                window.removeEventListener('scroll', onScroll);
                if (rafId) {
                    cancelAnimationFrame(rafId);
                }
            };

        }, [elementId, speed, damping]); // Ensure effect runs when elementId, speed, or damping changes

    };
    return [delayedParallax];

};

export default useDelayedParallax;
