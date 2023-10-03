import { reactive, ref } from 'vue';

export let sheet_id = ref(0);

export const state = reactive({
    sheets: [
        {
            id: sheet_id.value++,
            title: 'Title 1',
            group: 'Group 1',
            difficulty: 'Hard',
            instruments: 'Piano',
            done: 'Yes',
        },
        {
            id: sheet_id.value++,
            title: 'Title 2',
            group: 'Group 2',
            difficulty: 'Easy',
            instruments: 'Piano',
            done: 'Yes',
        },
        {
            id: sheet_id.value++,
            title: 'Title 3',
            group: 'Group 3',
            difficulty: 'Medium',
            instruments: 'Guitar',
            done: 'No',
        },
        {
            id: sheet_id.value++,
            title: 'Title 4',
            group: 'Group 4',
            difficulty: 'Medium',
            instruments: 'Piano',
            done: 'No',

        },
        {
            id: sheet_id.value++,
            title: 'Title 5',
            group: 'Group 5',
            difficulty: 'Professional',
            instruments: 'Saxophone',
            done: 'Yes',
        }
    ]
});




export default state;
