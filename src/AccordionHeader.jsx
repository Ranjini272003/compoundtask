import React, { useContext, useState } from 'react';
import { AccordionContext } from './Accordion';
import { useAccordionItem } from './AccordionItem';

const AccordionHeader = ({ children }) => {
    const { toggleItem, openItems } = useContext(AccordionContext);
    const itemId = useAccordionItem();
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
        display: 'flex'

    };

    return (
        <div
            style={headerStyle}
            onClick={() => toggleItem(itemId)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}

        >
            <h3>{children}</h3>
            <span style={{ display: 'flex', alignItems: 'center', marginLeft: '450px' }}>{isOpen ? '▲' : '▼'}</span>
        </div>
    );
};

export default AccordionHeader;
