
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: 'buy some milk', isFav: false},
            {id: 2, title: 'play Gloomhaven', isFav: true}
        ],
        name: 'Pinia Tasks'
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        }
    }
})


//create a new ...Store.js file for each state 