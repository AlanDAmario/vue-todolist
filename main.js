const { createApp } = Vue;


createApp({
    data() {
        return {
            logo: './img/download.png',
            list: [
                {
                    text: 'task1',
                    done: false
                },
                {
                    text: 'task2',
                    done: true,
                },
                {
                    text: 'task3',
                    done: true,
                }
            ]
        }
    },
    indexCount: 0,
    emptyList: '',
    methods: {
        empty(emptyIndex) {
            console.log(emptyIndex);
            this.list = this.list.filter((_ , indexFilter) => {
                console.log(indexFilter);
                return indexFilter !== emptyIndex
            })
        }
    },
}).mount('#app');
