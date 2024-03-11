import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const useThrottle = (value, delay) => {
    // step 1 - create a state
    const [throttledValue, setThrottledValue] = useState(value);
    // step 2 - Track last execution time
    const lastExecuted = useRef(Date?.now());
    // step 3 - useEffect for Throttling
    useEffect(() => {
        //  set up a timer (using setTimeout) to handle the logic
        const handler =  setTimeout(() => {
            const now = Date.now();
            
            const timeElapsed = now - lastExecuted.current;
            // if the elapsed time is greater than or equal to the specified delay, update the throttled value and the last execution time.
            if (timeElapsed >= delay) {
                setThrottledValue(value);
                lastExecuted.current = now;
            }

        }, delay - (Date.now() - lastExecuted.current));
        // calculate the remaining time for next execution (if any)
        return () => {
            clearTimeout(handler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, value])
    // return the throttled value from the hook
    return throttledValue;
};
export default useThrottle;

// steps to create a custom hook
// initialize state - create a state to hold the throttled value using useState
// 2 - Track last execution time
    // - useRef - to keep track of the last time the function was executed
// 3 - useEffect for Throttling
        // - set up a timer (using setTimeout) to handle the logic
        // - if the elapsed time is greater than or equal to the specified delay, update the throttled value and the last execution time.
        // - calculate the remaining time for next execution (if any)
        // - return a cleanup function to clear the timer when the component is unmounted or the delay changes
        // - return the throttled value from the hook