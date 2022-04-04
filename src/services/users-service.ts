import users from '../data/users.json';
import { User } from '../types/user';

export function fetchUsersService(index: number) {
    let usersData = users as User[];
    usersData.map(user => ({...user, status: false}))
    return usersData.slice(index, index+10);
}

export function fetchUsersFilteredService(query: string) {
    let usersData = users as User[];
    usersData.map(user => ({...user, status: false}))
    return usersData;
}