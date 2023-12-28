<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>
    <!-- filter  -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favs tasks</button>
    </nav>
    <!-- loading -->
    <div class="loading" v-if="loading">Loading tasks...</div>

    <!-- tasks list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favs left to do</p>
      <div v-for="task in favs">
        <TaskDetails :task="task" />
      </div>
    </div>

    <button class='btn' :style='{margin: "10px auto"}' @click="taskStore.$reset">Reset</button>
  </main>
</template>

<script>
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStore'
import TaskForm from './components/TaskForm.vue'
import { storeToRefs } from 'pinia'

  export default {
    components: { TaskDetails, TaskForm },
    setup() {
      const taskStore = useTaskStore()

      const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore) //we cannot pass actions into storeToRefs

      // fetch tasks
      taskStore.getTasks()

      const filter = ref('all')
      return { taskStore, filter, tasks, loading, favs, totalCount, favCount }
    }
  }
</script>
