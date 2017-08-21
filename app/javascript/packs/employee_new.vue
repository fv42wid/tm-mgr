<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4>Create Employee</h4>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="createEmployee">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="name" label="Name" id="name" v-model="name" required>

                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row class="mb-2">
                        <v-flex xs12 sm6 offset-sm3>
                            <h4>Choose Date</h4>
                            <v-date-picker v-model="date"></v-date-picker>
                            <p>{{ date }}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker v-model="time" format="24hr"></v-time-picker>
                            <p>{{ time }}</p>
                            <p>{{ submittableDateTime }}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn class="primary" :disabled="!formIsValid" type="submit">Create Employee</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                name: '',
                date: new Date(),
                time: new Date()
            }
        },
        computed: {
            formIsValid() {
                return this.name !== ''
            },
            submittableDateTime() {
                const date = new Date(this.date)
                if(typeof this.time === 'string') {
                    const hours = this.time.match(/^(\d+)/)[1]
                    const minutes = this.time.match(/^:(\d+)/)
                    date.setHours(hours)
                    date.setMinutes(minutes)
                } else {
                    date.setHours(this.time.getHours())
                    date.setMinutes(this.time.getMinutes())
                }

                return date
            }
        },
        methods: {
            createEmployee: function() {
                //check gorails episode
                if(!this.formIsValid) {
                    return
                }
                var employeeData = {
                    name: this.name
                }
                console.log(employeeData)
                //do this in rails
                // Turbolinks.visit('employees')
            }
        },
        created: function() {
            console.log('employee new created')
        }
    }
</script>