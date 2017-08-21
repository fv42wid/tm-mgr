<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h2>Sign Up</h2>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="signUp">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field name="email"
                                                      label="Mail"
                                                      id="email"
                                                      v-model="user.email"
                                                      type="email"
                                                      required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field name="password"
                                                      label="Password"
                                                      id="password"
                                                      v-model="user.password"
                                                      type="password"
                                                      required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field name="password_confirmation"
                                                      label="Confirm Password"
                                                      id="password_confirmation"
                                                      v-model="user.password_confirmation"
                                                      type="password"
                                                      :rules="[comparePasswords]"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit">Sign Up</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                user: {
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
                csrf_token: '',
                utf8: '',
                authenticity_token: ''
            }
        },
        created: function() {
            this.csrf_token = document.querySelector('meta[name="csrf-token"').getAttribute('content')
            this.utf8 = document.getElementsByName('utf8')[0].getAttribute('value')
            this.authenticity_token = document.getElementsByName('authenticity_token')[0].getAttribute('value')
            console.log('user signup created')
        },
        computed: {
            comparePasswords: function() {
                return this.user.password !== this.user.password_confirmation ? 'Passwords do not match' : ''
            }
        },
        methods: {
            signUp: function() {
                this.$http.post('/users', { utf8: this.utf8, authenticity_token: this.authenticity_token, user: this.user}).then(response => {
                    console.log(response)
                    Turbolinks.visit('/')
                }, response => {
                    console.log(response)
                })
                //console.log(this.email + this.password)
            }
        }
    }
</script>