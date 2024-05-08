import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectNameFilter } from '../contacts/selectors'

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
    (contacts, filters) => {
        return contacts.filter(
   (contact) => contact.name.toLowerCase().includes(filters.toLowerCase()) || contact.number.includes(filters))} )