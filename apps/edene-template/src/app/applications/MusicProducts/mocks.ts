export const headers: any[] = [
    {
        key: 'title',
        title: 'Title',
        align: 'left',
    },
    { id: 'artist', title: 'Artist' },
    { id: 'publication_date', title: 'Publication date' },
    { id: 'copies_sold', title: 'Copies sold', align: 'right' },
];

export const results = [
    {
        id: '12141424',
        title: '1989',
        artist: 'Taylor Swift',
        publication_date: new Date(2014, 11, 21),
        copies_sold: '10000400',
    },
    {
        id: '12141425',
        title: 'A night at the Opera',
        artist: 'Queen',
        publication_date: new Date(1975, 10, 27),
        copies_sold: '10000442430',
    },
    {
        id: '12141426',
        title: 'Mercury',
        artist: 'Imagine Dragons',
        publication_date: new Date(2021, 9, 3),
        copies_sold: '1000045',
    },
];
