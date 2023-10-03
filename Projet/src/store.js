import { reactive,ref } from 'vue';
export const id_user = ref(3);
export const id_sheet = ref(4);

export const state = reactive({
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
    users:[
        {
            id: 1,
            username: 'Marc',
            email: 'marc@rougagnou.fr',
            password: 'azer',
            passwordConfirm: 'azer',
            gender:'Man',
        },
        {
            id: 2,
            username: 'Marius',
            email: 'marius@chevalier.fr',
            password: 'azer',
            passwordConfirm: 'azer',
            gender:'Man',
        },
        {
            id: 3,
            username: 'Enzo',
            email: 'enzo@riviere.fr',
            password: 'azer',
            passwordConfirm: 'azer',
            gender:'Other',
        },
    ]
});




export default state;
