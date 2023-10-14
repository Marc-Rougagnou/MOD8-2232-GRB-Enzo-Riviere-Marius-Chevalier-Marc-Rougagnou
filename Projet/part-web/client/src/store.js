import { reactive, ref } from 'vue';

export let sheet_id = ref(0);

export const id_user = ref(3);

export const id_sheet = ref(2);

export const id_comment = ref(3);

export const state = reactive({
    sheets: [
        {
            id: sheet_id.value++,
            title: 'Swan lake',
            group: 'Tchaikovsky',
            difficulty: 'Hard',
            instruments: 'Piano',
            done: 'Yes',
            id_creator: 1,
            imageData:'sheetPiano.jpg'
        },
        {
            id: sheet_id.value++,
            title: 'City of stars',
            group: 'Justin Hurwitz',
            difficulty: 'Easy',
            instruments: 'Piano',
            done: 'Yes',
            id_creator: 2,
            imageData:'city_of_stars.png'
        },
        {
            id: sheet_id.value++,
            title: 'Stairway to heaven',
            group: 'Led Zeppelin',
            difficulty: 'Medium',
            instruments: 'Guitar',
            done: 'No',
            id_creator: 1,
            imageData:'stairway_to_heaven.png'
        },
        {
            id: sheet_id.value++,
            title: 'Caravan',
            group: 'Joe Stilgoe',
            difficulty: 'Medium',
            instruments: 'Drums',
            done: 'No',
            id_creator:3,
            imageData:'caravan.png'
        },
        {
            id: sheet_id.value++,
            title: 'O grande amor',
            group: 'Stan Getz',
            difficulty: 'Professional',
            instruments: 'Saxophone',
            done: 'Yes',
            id_creator: 2,
            imageData:'sheetSaxophone.jpg'
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
            text: 'Fantastic sheet i really like this music',
        },
        {
            id:2,
            id_sheet: 0,
            id_user: 1,
            text: 'I was searching for this sheet, glad to finaly find it',
        },
        {
            id:3,
            id_sheet: 1,
            id_user: 3,
            text: 'This music is a classic, i love it and the sheet is perfect',
        }
    ]
});

export default state;
