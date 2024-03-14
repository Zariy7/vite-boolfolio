<script>
import axios from 'axios';

export default {
  name: 'AppContactUs',
  data() {
    return {
      name: '',
      address: '',
      email: '',
      phone: '',
    }
  },
  methods: {
    sendData(){
        const data = {
            name = this.name,
            address = this.address,
            email = this.email,
            phone = this.phone
        }

        axios.post('http://127.0.0.1:8000/api/contacts', data).then((response) => {
            console.log(response.data);
        });
    }
  }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent="sendData()" method="POST">
                        <div class="col-6 my-2">
                            <label for="name" class="form-label">Nome:</label>
                            <input type="text" placeholder="Inserisci il nome..." name="name" class="form-control" v-model="name">
                        </div>
                        <div class="col-6 my-2">
                            <label for="address" class="form-label">Indirizzo:</label>
                            <input type="text" placeholder="Inserisci l'indirizzo..." name="address" class="form-control" v-model="address">
                        </div>
                        <div class="col-6 my-2">
                            <label for="email" class="form-label">Email:</label>
                            <input type="text" placeholder="Inserisci l'email..." name="email" class="form-control" v-model="email">
                        </div>
                        <div class="col-6 my-2">
                            <label for="phone" class="form-label">Telefono:</label>
                            <input type="text" placeholder="Inserisci il numero di telefono..." name="phone" class="form-control" v-model="phone">
                        </div>
                        <div class="btn btn-sm" type="submit">Invia!</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
