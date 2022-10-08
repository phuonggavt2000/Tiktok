import { forwardRef, useState } from 'react';
import images from '../../asset/images';

const Image = ({ src, alt, fallback: customFallback = images.avt, ...props }, ref) => {
    const [fallback, setFallback] = useState(images.avt);

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img alt={alt} src={fallback || src} {...props} ref={ref} onError={handleError} />;
};

export default forwardRef(Image);
