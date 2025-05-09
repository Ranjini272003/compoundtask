import React from 'react';

const AccordionItem = ({ id, children }) => {
    return React.Children.map(children, child =>
        React.cloneElement(child, { itemId: id })
    );
};

export default AccordionItem;
