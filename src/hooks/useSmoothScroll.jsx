import { useEffect } from 'react';

const useSmoothScroll = () => {

    const smoothScroll = (damping, speed) => {

        const MAX_DAMPING = 1;
        const MIN_DAMPING = 0.01;
        const DEFAULT_DAMPING = 0.1;

        const MAX_SPEED = 10;
        const MIN_SPEED = 0.5;
        const DEFAULT_SPEED = 1;

        useEffect(() => {

            // Validate damping value
            let validDamping = damping;
            if (typeof damping !== 'number' || damping < MIN_DAMPING || damping > MAX_DAMPING) {
                console.error(`Damping value ${damping} is invalid. It must be a number between 0.01 and 1. Setting to default (0.1).`);
                validDamping = DEFAULT_DAMPING;
            }

            // Validate speed value
            let validSpeed = speed;
            if (typeof speed !== 'number' || speed < MIN_SPEED || speed > MAX_SPEED) {
                console.error(`Speed value ${speed} is invalid. It must be a number between 0.5 and 3. Setting to default (1).`);
                validSpeed = DEFAULT_SPEED;
            }

            let currentScrollY = window.scrollY;
            let targetScrollY = currentScrollY;
            let touchStartY = 0;
            let rafId = null;

            const ease = validDamping;
            const scrollSpeed = validSpeed;

            const smoothScroll = () => {
                currentScrollY += (targetScrollY - currentScrollY) * ease;
                window.scrollTo(0, Math.round(currentScrollY));

                if (Math.abs(targetScrollY - currentScrollY) > ease) {
                    rafId = requestAnimationFrame(smoothScroll);
                } else {
                    rafId = null; // Reset animation frame ID when scrolling stops
                }
            };

            const onScroll = (e) => {
                if (!rafId) {
                    targetScrollY = window.scrollY;
                    currentScrollY = window.scrollY;
                    smoothScroll();
                }
            };

            const onWheel = (e) => {
                e.preventDefault();
                targetScrollY += e.deltaY * scrollSpeed;
                targetScrollY = Math.max(0, Math.min(targetScrollY, document.body.scrollHeight - window.innerHeight));

                if (!rafId) {
                    smoothScroll();
                }
            };

            const onTouchStart = (e) => {
                touchStartY = e.touches[0].clientY;
            };

            const onTouchMove = (e) => {
                e.preventDefault();
                const touchDeltaY = (touchStartY - e.touches[0].clientY) * scrollSpeed;
                targetScrollY += touchDeltaY;
                targetScrollY = Math.max(0, Math.min(targetScrollY, document.body.scrollHeight - window.innerHeight));

                if (!rafId) {
                    smoothScroll();
                }
                touchStartY = e.touches[0].clientY;
            };

            // Add event listeners
            window.addEventListener("scroll", onScroll, { passive: true });
            window.addEventListener("wheel", onWheel, { passive: false });
            window.addEventListener("touchstart", onTouchStart, { passive: false });
            window.addEventListener("touchmove", onTouchMove, { passive: false });

            // Cleanup function
            return () => {
                window.removeEventListener("scroll", onScroll);
                window.removeEventListener("wheel", onWheel);
                window.removeEventListener("touchstart", onTouchStart);
                window.removeEventListener("touchmove", onTouchMove);
                if (rafId) {
                    cancelAnimationFrame(rafId);
                }
            };

        }, [damping, speed]); // Ensure useEffect dependencies include both damping and speed

    };

    return [smoothScroll];
};

export default useSmoothScroll;
