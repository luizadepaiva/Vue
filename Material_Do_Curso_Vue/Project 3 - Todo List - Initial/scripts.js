tarefas = [
    {
        mensagem: 'Aprender HTML, CSS e Javascript',
        status: false
    },
    {
        mensagem: 'Aprender o básico de Vue JS',
        status: false
    },

 ] //nome da variável

const handlingForms = {
    data() {
        return {
            tarefas: window.tarefas,
            newTarefa: {}
        }
    },
    methods: {
        addTarefa: function(){
            this.tarefa.push(this.newTarefa);
        }

    }
};



Vue.createApp(handlingForms).mount('#app');