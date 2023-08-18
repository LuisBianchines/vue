const MyNameApp = {
    data(){
        return{
            name: "",
            idade: 0,
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            
            e.preventDefault();

            //console.log("aqui");

            this.name = this.input_name;
            this.idade = this.input_age;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");