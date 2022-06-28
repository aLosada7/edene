export interface IFoodInfo {
    id: string;
    name: string;
    description: string;
    price: number;
    options?: Options[];
}

type Options = 'vegetarian';
type MenuCategory = 'starters' | 'baguettes' | 'desserts';
type Menu = { [P in MenuCategory]?: IFoodInfo[] };

export interface IRestaurant {
    kind: string;
    rating: number; // 1 to 5
    slug: string;
    name: string;
    food: Menu;
}

export interface IFoodOffer {
    slug: string;
    name: string;
    restaurants: IRestaurant[];
}

export const restaurants: IFoodOffer[] = [
    {
        slug: 'burguer',
        name: 'Burguer',
        restaurants: [
            {
                kind: 'Burguer',
                rating: 4,
                slug: 'rest1',
                name: 'Restaurant 1',
                food: {
                    starters: [
                        {
                            id: 'starters1',
                            name: 'Anarkoli Special Salad',
                            description: 'Ensalada mixta anarkoli',
                            price: 395,
                        },
                    ],
                    desserts: [
                        {
                            id: 'desserts1',
                            name: 'Frozen Goiko',
                            description: 'Tarta de chocolate con nata',
                            price: 500,
                        },
                    ],
                },
            },
            {
                kind: 'Burguer',
                rating: 2,
                slug: 'rest2',
                name: 'Restaurant 2',
                food: {
                    starters: [
                        {
                            id: 'starters1',
                            name: 'Anarkoli Special Salad',
                            description: 'Ensalada mixta anarkoli',
                            price: 395,
                        },
                    ],
                },
            },
        ],
    },
    {
        slug: 'pizza',
        name: 'Pizza',
        restaurants: [
            {
                kind: 'Pizza',
                rating: 3,
                slug: 'rest3',
                name: 'Restaurant 3',
                food: {
                    starters: [
                        {
                            id: 'starters1',
                            name: 'Another Food',
                            description: 'Ensalada mixta anarkoli',
                            price: 1500,
                        },
                    ],
                },
            },
        ],
    },
    {
        slug: 'sandwiches',
        name: 'Sandwiches',
        restaurants: [
            {
                kind: 'Sandwiches',
                rating: 5,
                slug: 'pretasandwich',
                name: 'Pret A Sandwich',
                food: {
                    starters: [
                        {
                            id: 'starters1',
                            name: 'Another Food',
                            description: 'Ensalada mixta anarkoli',
                            price: 1500,
                        },
                    ],
                    baguettes: [
                        {
                            id: 'baguette1',
                            name: 'Italian Prosciutto Baguette',
                            description:
                                'Prosciutto, sliced tomato, shavings of Italian matured cheese, free-range mayo and fresh basil in a stone baked baguette. We have changed the recipe of our stone baked baguette.',
                            price: 525,
                        },
                        {
                            id: 'baguette1',
                            name: 'Posh Cheddar & Pret Pickle Baguette',
                            description:
                                'Cheddar cheese, Pret pickle, Mediterranean roasted tomatoes, red onion, mustard cress and mayo in a stone baked baguette.',
                            price: 480,
                            options: ['vegetarian'],
                        },
                    ],
                },
            },
        ],
    },
];
