import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../contacts/selectors';
import { selectNameFilter } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts = [], filter = '') => {
        if (!Array.isArray(contacts)) {
            console.error('Expected contacts to be an array');
            return [];
        }

        const lowerCaseFilter = filter.toLowerCase();
        return contacts.filter(
            (contact) => 
                contact.name.toLowerCase().includes(lowerCaseFilter) || 
                contact.number.includes(filter)
        );
    }
);