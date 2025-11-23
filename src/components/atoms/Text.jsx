    import React from 'react';

    function Text({ children, variant = 'p', className, index, ...props }) {
        const Tag = variant;
        return <Tag key={index} className={className} {...props}>{children}</Tag>;
    }

    export default Text;