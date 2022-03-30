import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users-store', {
  state: () => ({
    users: [{
        "name": "Ms. Alfonzo Stoltenberg",
        "email": "keven@grady.net",
        "title": "Direct Implementation Producer",
        "city": "Norvalville",
        "address": "9138 Stiedemann Ports",
        "avatar": "https://robohash.org/possimusdoloresid.png?size=300x300\u0026set=set1"
    },
    {
        "name": "Lelia Willms",
        "email": "clementina_ryan@dooley.com",
        "title": "Internal Security Assistant",
        "city": "Melisaton",
        "address": "166 Waters Falls",
        "avatar": "https://robohash.org/perferendissapienteodit.png?size=300x300\u0026set=set1"
    },
    {
        "name": "Jermain Gorczany",
        "email": "betsy@walsh.io",
        "title": "National Tactics Designer",
        "city": "Nealburgh",
        "address": "1846 Murazik Hill",
        "avatar": "https://robohash.org/voluptatibusearumconsequatur.png?size=300x300\u0026set=set1"
    },
    {
        "name": "Zakary White",
        "email": "maximillia@bednar.net",
        "title": "Dynamic Web Associate",
        "city": "Terrellview",
        "address": "3764 Kyler Grove",
        "avatar": "https://robohash.org/solutaametminima.png?size=300x300\u0026set=set1"
    }]
  }),
  getters: {
    mockUsers: (state) => state.users,
  },
  actions: {}
})