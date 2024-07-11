import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const routerStore = defineStore('routerStore', () => {
    const nowIndex = ref('')

    function switchIndex(index) {
        nowIndex.value = index
    }

    return {
        nowIndex,switchIndex
    }
})
