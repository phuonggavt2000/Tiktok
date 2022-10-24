import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '../../asset/images';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.avt, ...props }, ref) => {
    const [fallback, setFallback] = useState(images.avt);

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img alt={alt} src={fallback || src} {...props} ref={ref} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
