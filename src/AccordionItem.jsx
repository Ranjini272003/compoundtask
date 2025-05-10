import React, { createContext, useContext } from 'react';

const ItemContext = createContext();

export const useAccordionItem = () => useContext(ItemContext);

const AccordionItem = ({ id, children }) => {
    return (
        <ItemContext.Provider value={id}>
            {children}
        </ItemContext.Provider>
    );
};

export default AccordionItem;
