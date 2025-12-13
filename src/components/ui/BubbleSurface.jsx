'use client';

import './BubbleSurface.css';

const BubbleSurface = ({
    children,
    width = 200,
    height = 80,
    borderRadius = 32,
    className = '',
    style = {}
}) => {
    const containerStyle = {
        ...style,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: `${borderRadius}px`,
    };

    return (
        <div
            className={`bubble-surface ${className}`}
            style={containerStyle}
        >
            <div className="bubble-surface__content">{children}</div>
        </div>
    );
};

export default BubbleSurface;
