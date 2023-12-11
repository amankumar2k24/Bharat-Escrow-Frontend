// src/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        personalInfo: {
            userID: null,
            fullName: '',
            description: '',
            languages: [],
            profilePicture: null,
        },
        professionalInfo: {
            occupation: '',
            skills: '',
            education: '',
            personalWebsite: '',
        },
        accountSecurity: {
            email: '',
            phone: '',
            otp: '',
        },
    },
    reducers: {
        setFormValue: (state, action) => {
            const { section, key, value } = action.payload;
            state[section][key] = value;
        },
        // Add other reducers as needed
        resetForm: (state) => {
            state.personalInfo = {
                fullName: '',
                password: '',
                description: '',
                languages: [],
                profilePicture: null,
            };
            state.professionalInfo = {
                occupation: '',
                skills: '',
                education: '',
                personalWebsite: '',
            };
            state.accountSecurity = {
                email: '',
                phone: '',
                otp: '',
            };
        },
    },
});

export const { setFormValue, resetForm } = formSlice.actions;


export default formSlice.reducer;





