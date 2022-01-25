import { useCallback, useState, useEffect } from "react";

const useLongPress = (callback = () => { }, { delay = 200, isStop = false }) => {
    const [startLongPress, setStartLongPress] = useState(false);

    useEffect(() => {
        let intervalId;
        if (startLongPress) {
            intervalId = setInterval(callback, delay);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [callback, delay, startLongPress]);

    const start = useCallback(() => {
        setStartLongPress(true);
    }, []);
    const stop = useCallback(() => {
        setStartLongPress(false);
    }, []);

    useEffect(() => {
        if (isStop) {
            stop();
        }
    }, [isStop])

    return {
        onMouseDown: start,
        onMouseUp: stop,
        onMouseLeave: stop,
        onTouchStart: start,
        onTouchEnd: stop,
    };

};

export default useLongPress;