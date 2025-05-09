import React, { useContext, useState } from 'react';
import { AccordionContext } from './Accordion';

const AccordionHeader = ({ children, itemId }) => {
    const { toggleItem, openItems } = useContext(AccordionContext);
    const isOpen = openItems.includes(itemId);
    const [isHover, setIsHover] = useState(false);

    const headerStyle = {
        cursor: 'pointer',
        fontWeight: 'bold',
        padding: '12px 16px',
        backgroundColor: isHover ? '#e2e2e2' : '#f1f1f1',
        border: '1px solid #ccc',
        transition: 'background-color 0.3s',
        userSelect: 'none',
    };

    return (
        <div
            style={headerStyle}
            onClick={() => toggleItem(itemId)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {children}
            <span style={{ float: 'right' }}>{isOpen ? '▲' : '▼'}</span>
        </div>
    );
};

export default AccordionHeader;
