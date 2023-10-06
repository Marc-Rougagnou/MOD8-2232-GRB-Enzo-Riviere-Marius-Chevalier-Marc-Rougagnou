import { reactive, ref } from 'vue';

export let sheet_id = ref(0);

export const id_user = ref(3);

export const id_sheet = ref(2);

export const id_comment = ref(3);

export const state = reactive({
    sheets: [
        {
            id: sheet_id.value++,
            title: 'Title 1',
            group: 'Group 1',
            difficulty: 'Hard',
            instruments: 'Piano',
            done: 'Yes',
            id_creator: 1,

        },
        {
            id: sheet_id.value++,
            title: 'Title 2',
            group: 'Group 2',
            difficulty: 'Easy',
            instruments: 'Piano',
            done: 'Yes',
            id_creator: 2,

        },
        {
            id: sheet_id.value++,
            title: 'Title 3',
            group: 'Group 3',
            difficulty: 'Medium',
            instruments: 'Guitar',
            done: 'No',
            id_creator: 1,

        },
        {
            id: sheet_id.value++,
            title: 'Title 4',
            group: 'Group 4',
            difficulty: 'Medium',
            instruments: 'Piano',
            done: 'No',
            id_creator:3,

        },
        {
            id: sheet_id.value++,
            title: 'Title 5',
            group: 'Group 5',
            difficulty: 'Professional',
            instruments: 'Saxophone',
            done: 'Yes',
            id_creator: 2,
        }
    ],
            
    users:[
        {
            id: 0,
            username: '',
            email: '',
            password: '',
            gender:'',
        },
        {
            id: 1,
            username: 'Marc',
            email: 'marc@rougagnou.fr',
            password: 'azer',
            gender:'Man',
        },
        {
            id: 2,
            username: 'Marius',
            email: 'marius@chevalier.fr',
            password: 'azer',
            gender:'Man',
        },
        {
            id: 3,
            username: 'Enzo',
            email: 'enzo@riviere.fr',
            password: 'azer',
            gender:'Other',
        },
    ],
    current_user: {
        id: 0,
        username: '',
        email: '',
        password: '',
        gender:'',
    },
    comments:[
        {
            id: 1,
            id_sheet: 0,
            id_user: 2,
            text: 'jure cest un commetaire',
        },
        {
            id:2,
            id_sheet: 0,
            id_user: 1,
            text: 'jure cest encore un commetaire',
        },
        {
            id:3,
            id_sheet: 1,
            id_user: 3,
            text: 'jure cest encore un putain de commetaire',
        }
    ]
});

export default state;
