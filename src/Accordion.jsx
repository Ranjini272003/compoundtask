import React, { createContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccordionBody';

export const AccordionContext = createContext();

const Accordion = ({ allowMultiple = false, children }) => {
    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (id) => {
        setOpenItems((prev) => {
            if (allowMultiple) {
                return prev.includes(id)
                    ? prev.filter((itemId) => itemId !== id)
                    : [...prev, id];
            } else {
                return prev.includes(id) ? [] : [id];
            }
        });
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            {children}
        </AccordionContext.Provider>
    );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
