<template>
  <div class="container px-4 mt-10">
    <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>

    <div class="flex gap-2 mb-4">
      <button
        @click="filterStatus = 'all'"
        :class="{ 'font-bold': filterStatus === 'all' }"
      >
        전체
      </button>
      <button
        @click="filterStatus = 'done'"
        :class="{ 'font-bold': filterStatus === 'done' }"
      >
        완료
      </button>
      <button
        @click="filterStatus = 'undone'"
        :class="{ 'font-bold': filterStatus === 'undone' }"
      >
        미완료
      </button>
    </div>
    <ul class="space-y-2">
      <li
        v-for="(item, index) in filteredTodos"
        :key="index"
        class="flex items-center justify-center gap-2 border-b pb-2"
      >
        <input type="checkbox" v-model="item.done" class="w-4 h-4" />
        <template v-if="item.editMode">
          <input
            v-model="item.text"
            @keyup.enter="saveEdit(item)"
            class="border p-1"
          />
          <button @click="saveEdit(item)" class="text-green-500">저장</button>
          <button @click="cancelEdit(item)" class="text-gray-500">취소</button>
        </template>
        <template v-else>
          <span :class="{ 'line-through text-gray-500': item.done }">{{
            item.text
          }}</span>
          <button @click="startEdit(item)" class="text-blue-500">
            수정
          </button>
          <button
            @click="removeTodo(item)"
            class="text-red-500 ml-auto hover:text-red-600 transition"
          >
            삭제
          </button>
        </template>
      </li>
    </ul>

    <button
      @click="showInput = !showInput"
      class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition mt-4"
    >
      +
    </button>

    <div v-if="showInput" class="flex gap-2 mb-4 p-4">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="할 일을 입력하세요"
        class="border p-2 flex-1"
        ref="newTodoInput"
      />
      <button
        @click="addTodo"
        class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
      >
        추가
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Momentum",
      newTodo: "",
      todos: [
        { text: "Vue.js 학습하기", done: false, editMode: false },
        { text: "Tailwind CSS 도입해보기", done: false, editMode: false },
      ],
      showInput: false,
      filterStatus: "all",
    };
  },
  methods: {
    addTodo() {
      const text = this.newTodo.trim();
      if (text) {
        this.todos.push({ text, done: false, editMode: false });
        this.newTodo = "";
      }
    },
    removeTodo(item) {
      const index = this.todos.indexOf(item);
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },
    startEdit(item) {
      item.originalText = item.text;
      item.editMode = true;
    },
    saveEdit(item) {
      item.editMode = false;
      delete item.originalText;
    },
    cancelEdit(item) {
      item.text = item.originalText;
      item.editMode = false;
      delete item.originalText;
    },
    toggleInput() {
      this.showInput = !this.showInput;
      if (this.showInput) {
        this.$nextTick(() => {
          this.$refs.newTodoInput.focus();
        });
      }
    },
  },
  mounted() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        this.todos = JSON.parse(saved);
      } catch (e) {
        console.error("로컬 스토리지 데이터 파싱 오류:", e);
      }
    }
  },
  watch: {
    todos: {
      handler(newVal) {
        localStorage.setItem("todos", JSON.stringify(newVal));
      },
      deep: true, // 배열이나 객체의 내부 변경을 추적하기 위해 deep 옵션 설정
    },
  },
  computed: {
    filteredTodos() {
      if (this.filterStatus === "done") {
        return this.todos.filter((item) => item.done);
      } else if (this.filterStatus === "undone") {
        return this.todos.filter((item) => !item.done);
      }
      return this.todos;
    },
  },
};
</script>
