import React, { useContext } from 'react';
import { AccordionContext } from './Accordion';

const AccordionBody = ({ children, itemId }) => {
    const { openItems } = useContext(AccordionContext);
    const isOpen = openItems.includes(itemId);

    const baseStyle = {
        border: '1px solid #ddd',
        borderTop: 'none',
        backgroundColor: '#fff',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease',
    };

    const visibleStyle = {
        maxHeight: '500px',
        padding: '12px 16px',
    };

    const hiddenStyle = {
        maxHeight: '0',
        padding: '0 16px',
    };

    const style = {
        ...baseStyle,
        ...(isOpen ? visibleStyle : hiddenStyle),
    };

    return <div style={style}>{children}</div>;
};

export default AccordionBody;
