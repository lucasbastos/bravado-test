import users from '../data/users.json';
import { User } from '../types/user';

export function fetchUsersService(index: number) {
    let usersData: User[] = users;
    return usersData.slice(index, index+10);
}

export function fetchUsersFilteredService(query: string) {
    let usersData: User[] = users;
    return usersData.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
}