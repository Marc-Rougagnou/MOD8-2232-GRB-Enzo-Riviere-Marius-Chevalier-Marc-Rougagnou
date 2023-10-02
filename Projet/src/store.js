import { reactive } from 'vue';

const state = reactive({
    sheets: [
        {
            id: 1,
            title: 'Title 1',
            group: 'Group 1',
            difficulty: 'Easy',
            instruments: 'Piano',
        },
        {
            id: 2,
            title: 'Title 2',
            group: 'Group 2',
            difficulty: 'Easy',
            instruments: 'Piano',
        },
        {
            id: 3,
            title: 'Title 3',
            group: 'Group 3',
            difficulty: 'Easy',
            instruments: 'Piano',
        },
        {
            id: 4,
            title: 'Title 4',
            group: 'Group 4',
            difficulty: 'Easy',
            instruments: 'Piano',
        }
    ],
    sheet: {
        id: 0,
        title: '',
        group: '',
        difficulty: 0,
        instruments: '',
    }
});




export default state;
