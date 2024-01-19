import {createApp} from 'vue'

var tarefas = [
    {
        mensagem: 'Aprender HTML, CSS e Javascript',
        done: true
    },
    {
        mensagem: 'Aprender o básico de Vue JS',
        done: false
    },

 ] //nome da variável


const todosApp = createApp( {
    data() {
        return {
            tarefas: window.tarefas,
            newTarefa: {
                done: false
            }
        }
    },
    methods: {
        addTarefa: function(){
            if(this.newTarefa.mensagem) {
                this.tarefas.push(this.newTarefa);
                this.newTarefa = {
                    done: false
                }; 
            } else {
                    alert("Inserir tarefa!")
                }
            }
        }
    })


    todosApp.mount('#app')

//Vue.createApp(todosApp).mount('#app');