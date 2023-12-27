
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
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                  return c.isFav ? p + 1 : p
                }, 0)
        },
        // arrow fiunctions do not have acces to this, so we need to pass the state
        // as an argument
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})


//create a new ...Store.js file for each state 