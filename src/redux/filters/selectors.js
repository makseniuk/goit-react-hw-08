import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../contacts/selectors';
import { selectNameFilter } from './selectors'; 

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        if (!contacts || !filter) return []; 

        const lowerCaseFilter = filter.toLowerCase();
        return contacts.filter(
            (contact) => 
                contact.name.toLowerCase().includes(lowerCaseFilter) || 
                contact.number.includes(filter)
        );
    }
);
