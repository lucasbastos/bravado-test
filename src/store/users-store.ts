import { defineStore } from 'pinia'
import { fetchUsersService, fetchUsersFilteredService } from '../services/users-service'
import { User } from '../types/user';

export const useUsersStore = defineStore('users-store', {
  state: () => ({
    users: [] as User[],
  }),
  getters: {
    mockUsers: (state) => state.users,
  },
  actions: {
    async fetchUsers(index: number) {
      const users = await fetchUsersService(index);
      this.users = {...this.users, ...users};
      return users;
    },
    async fetchFilteredUsers(query: string) {
      const users = await fetchUsersFilteredService(query);
      return users;
    }
  }
})