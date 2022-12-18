import { createSlice } from '@reduxjs/toolkit';
import { duplicatedFrameworks, shuffle } from '../Data/data';


const slice = createSlice({
    name: 'game',
    initialState: {
        items: shuffle(duplicatedFrameworks),
        comparedItems: [],
        isFinished: false,
        point: 200,
        status: '',
    },
    reducers: {
        open: (state, action) => {
            const card = action.payload;
            const findItem = state.items.find(item => item.id === card.id);
            findItem.isOpen = true;
        },
        close: (state, action) => {
            const card = action.payload;
            const findItem = state.items.find(item => item.id === card.id);
            findItem.isOpen = false;
        },
        match: (state, action) => {
            const comparedItems = action.payload;
            comparedItems.forEach((item) => {
                state.items.map((card) => {
                    if (item.id === card.id) {
                        card.isOpen = true;
                        card.isCompleted = true;
                    }
                });
                state.comparedItems.push(item.id);
            });
            if(state.comparedItems.length === state.items.length) {
                state.isFinished = true;
                state.status = 'win';
            }
            state.point += 50;
        },
        unCorrect: (state) => {
            state.point -= 10;
            if(state.point === 0) {
                state.status = 'lose';
                state.isFinished = true;
            }
        },
        restart: (state) => {
            state.comparedItems = [];
            state.isFinished = false;
            state.point = 200;
            state.status = '';
            state.items = shuffle(duplicatedFrameworks);
        }
    },
});

export const { open, match, close, unCorrect, restart } = slice.actions;

export default slice.reducer;