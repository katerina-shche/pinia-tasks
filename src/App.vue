<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- tasks list -->
    <div class="task-list">
      <p>all tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list">
      <p>fav tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStore'

  export default {
    components: { TaskDetails },
    setup() {
      const taskStore = useTaskStore()

      return { taskStore }
    }
  }
</script>
