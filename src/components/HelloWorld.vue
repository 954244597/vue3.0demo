<template>
  <el-button>Default</el-button>
  <div class="hello"></div>
  <div v-for="(item, index) in lists" :key="index">
    <div v-if="item.checked === false">
      <input
        type="checkbox"
        @click="
          () => {
            item.checked = !item.checked;
          }
        "
      />
      {{ item.name }}
    </div>
  </div>
  <span>已经完成</span>
  <div v-for="(item, index) in finish" :key="index">
    <input
      type="checkbox"
      disabled="item.checked"
      @click="
        () => {
          item.checked = !item.checked;
        }
      "
    />
    {{ item.name }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup (props, { emit }) {
    const state: any = reactive({
      lists: [
        { name: 1, checked: false },
        { name: 2, checked: false },
        { name: 3, checked: false },
        { name: 4, checked: false }
      ],
      finish: computed(() => {
        return state.lists.filter((item: any) => item.checked === true)
      })
    })
    return toRefs(state)
  }
})
</script>
