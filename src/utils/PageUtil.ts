export default class PageUtil{
    static smoothScrollWindow = (targetX: number, targetY: number, duration: number): Promise<void> => {

        const startX = window.scrollX;
        const startY = window.scrollY;
        const distanceX = targetX - startX;
        const distanceY = targetY - startY;
        const startTime = performance.now();

        if (duration === 0) {
            window.scrollTo({
                left: startX,
                top: startY,
                behavior: "auto"
            });
            return Promise.resolve()
        }
        const preventScroll = (event: Event) => {
            event.preventDefault();
        }

        return new Promise((resolve) => {
            const animationFrame = (time: number) => {
                let timeFraction = (time - startTime) / duration;
                if (timeFraction > 1) {
                    timeFraction = 1;
                }
                const newX = startX + distanceX * timeFraction;
                const newY = startY + distanceY * timeFraction;
                window.scrollTo({
                    left: newX,
                    top: newY,
                    behavior: "auto"
                });

                if (timeFraction < 1) {
                    requestAnimationFrame(animationFrame);
                } else {
                    window.removeEventListener('wheel', preventScroll);
                    window.removeEventListener('touchstart', preventScroll);
                    resolve();
                }
            };

            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchstart', preventScroll, { passive: false });
            requestAnimationFrame(animationFrame);
        });
    };

}
