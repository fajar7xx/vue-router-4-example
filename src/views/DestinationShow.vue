<template>
<div>
    <section v-if="destination" class="destination">
        <h1>{{destination.name}}</h1>
        <GoBack/>
        <div class="destination details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{destination.description}}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top Experiences in {{destination.name}}</h2>
        <div class="cards">
            <router-link
                 v-for="experience in destination.experiences" 
                :key="experience.slug"
                :to="{
                    name: 'ExperienceShow',
                    params: {
                        experienceSlug: experience.slug
                    }
                }"
            >
                <ExperienceCard 
                    :experience="experience"
                />
            </router-link>
        </div>

        <router-view></router-view>
    </section>
</div>
    

</template>

<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'
export default {
    components: {
        ExperienceCard,
        GoBack
    },
    props: {
        // get props from route params id
        // it changes the computed destiinationId
        // all props in router is string so we must
        // parseint in computed or method fetching data
        id: {
            // type: String,
            // change to number because route params object parseint
            type: Number,
            required: true
        }
    },
    computed:{
        // destinationId(){
        //     return parseInt(this.$route.params.id)
        // },
        destination(){
            return sourceData.destinations.find(
                // destination => destination.id === this.destinationId
                // cause we use props from route so
                // destination => destination.id === parseInt(this.id)
                // change because props has correct number
                destination => destination.id === this.id
            )
        }
    }
}
</script>

<style>

</style>