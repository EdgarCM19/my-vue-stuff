import { reactive } from "vue";

const store = reactive({
    darkMode: false,
});

const methods = {

    toggleTheme(){ 
        console.log('Ayy hollllaaaaaa');
        store.darkMode = !store.darkMode 
    }        
};

const getters = {
    getTheme() { return store.darkMode; }
};

export default {
    store,
    methods,
    getters,
}