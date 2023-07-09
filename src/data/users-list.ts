export interface IUser {
    id: number,
    image: string,
    name: string,
    email: string,
    isSelected: boolean
}

export const usersList: IUser[] = [
    {
        id: 0,
        image: 'https://reqres.in/img/faces/1-image.jpg',
        name: 'Amon Bower',
        email: 'george.bluth@reqres.in',
        isSelected: false
    },
    {
        id: 1,
        image: 'https://reqres.in/img/faces/1-image.jpg',
        name: 'Jane Bower',
        email: 'george.bluth@reqres.in',
        isSelected: false
    },
    {
        id: 2,
        image: 'https://reqres.in/img/faces/1-image.jpg',
        name: 'Mike Bower',
        email: 'george.bluth@reqres.in',
        isSelected: false
    },
    {
        id: 3,
        image: 'https://reqres.in/img/faces/1-image.jpg',
        name: 'Jane Bower',
        email: 'george.bluth@reqres.in',
        isSelected: false
    }
]