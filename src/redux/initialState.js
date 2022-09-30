const initialState = {
    posts:[
        {
        id: '1',
        title: 'Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2022'),
        category:'Movies',
        author: 'John Doe'
        },
        
        {
        id: '2',
        title: 'Article title 2',
        shortDescription: 'Short description ',
        content: 'of the article',
        publishedDate: new Date('02-04-2022'),
        category:'News',
        author: 'Marie Doe'
        },

        {
        id: '3',
        title: 'Title',
        shortDescription: 'of the article...',
        content: 'Main content',
        publishedDate: new Date('12-06-2022'),
        category:'Sport',
        author: 'Paul Summer'
        },
        {
        id: '4',
        title: 'Tidstle',
        shortDescription: 'dasdasof the article...',
        content: 'Main contentdasdas',
        publishedDate: new Date('12-06-2022'),
        category:'Sport',
        author: 'Paul Summedasr'
        },

    ],
    categories:['Movies','Sport','News'],
};
export default initialState;