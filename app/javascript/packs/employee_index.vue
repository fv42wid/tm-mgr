<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large class="info">Explore Employees</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large class="info">Organize Employees</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                            v-for="employee in employees"
                            :src="employee.imageUrl"
                            :key="employee.id"
                            @click="navigateTo('employees/1')"
                            style="cursor: pointer;">
                        <div class="title">
                            {{ employee.title }}
                        </div>
                    </v-carousel-item>

                </v-carousel>
            </v-flex>
            <h1>Employees#index</h1>
            <p>Find me in app/views/employees/index.html.erb</p>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome Meetups</p>
            </v-flex>

        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5244714388001_5205235439001-vs.jpg?pubId=5104226627001&videoId=5205235439001"
                                height="130px"
                                ></v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h5 class="white--text mb-0">My Meetup</h5>
                                        <div>17th July 2017</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat @click="navigateTo('/employees/1')">
                                        <v-icon left light>arrow_forward</v-icon>
                                        View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>


                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    module.exports = {
        data: function() {
            return {
                employees: [
                    {imageUrl: 'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5244714388001_5205235439001-vs.jpg?pubId=5104226627001&videoId=5205235439001', id: 'asdf', title: 'Employee1'},
                    {imageUrl: 'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5244714388001_5205235439001-vs.jpg?pubId=5104226627001&videoId=5205235439001', id: 'abc', title: 'Employee2'},
                    {imageUrl: 'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5244714388001_5205235439001-vs.jpg?pubId=5104226627001&videoId=5205235439001', id: 'def', title: 'Employee3'}
                ]
            }
        },
        methods: {
            navigateTo: function(link) {
                Turbolinks.visit(link)
            }
        },
        created: function() {
            console.log('employee index created')
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 2em;
        padding: 20px;
    }
</style>