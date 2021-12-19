<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h3 class="font-weight-normal mb-4">Experience</h3>
                    <span class="cursor-pointer" @click="toggleBu" v-if="isButtonVisible">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit text-secondary btn-icon-prepend">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg> cliquez pour ajouter
                    </span>
                </div>
                <div v-if="isShow">
                    <div v-for="experience in experiences" :key="experience.id">
                        <experience-item :experience="experience" :key="experience.id"></experience-item>
                    </div>
                </div>
                
                <transition name="dropdown-fade">
                    <form @submit="AddRecord" v-if="isVisible">

                        <div class="form-label-group">
                            <input type="text" id="title" class="form-control" name="title" v-model="experience.title" placeholder="Enter your position or title" required="required" autocomplete="off" autofocus>
                            <label for="title">Enter your position or title</label>
                        </div>
                        <div class="form-label-group">
                            <input type="text" id="company" name="company" v-model="experience.company" class="form-control" placeholder="Enter company name" required="required" autocomplete="off">
                            <label for="company">Enter company name</label>
                        </div>
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                                <div class="form-label-group">
                                    <input type="date" id="startDate" name="start_date" v-model="experience.start_date" class="form-control" placeholder="Start Date" required="required">
                                    <label for="startDate">Start Date</label>
                                </div>
                            </div>
                            <div class="col-auto my-1">
                                <div class="form-label-group">
                                    <input type="date" id="endsDate" name="ends_date" :disabled="disabled == 1" v-model="experience.ends_date" class="form-control" placeholder="Ends Date" required="required">
                                    <label for="endsDate">Ends Date</label>
                                </div>
                            </div>
                            <div class="col-auto my-1">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" @click="disabled = (disabled + 1) % 2" v-model="experience.ongoing" class="custom-control-input" id="inputOngoing">
                                    <label class="custom-control-label" for="inputOngoing">I'm currently working here</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-label-group mb-4">
                            <textarea class="form-control" name="summary" v-model="experience.summary" rows="5">Describe your work experience</textarea>
                        </div>

                        <button type="submit" class="btn btn-primary text-secondary">Valider</button>
                        <button type="button" @click="toggleBu" class="btn btn-light text-secondary float-right">Annuler</button>
                    </form>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import experience from './ExperienceItem';

    export default {
        components: {
            'experience-item': experience,
        },
        data () {
            return {
                experiences: [
                    { title: 'Freelancer', company: 'Wydman Ltd', start_date: 2021, ends_date: '', ongoing: true, summary: 'Average rating 4.95 over 60+ projects with great feedback from clients; Generated sales over €12,000 within the first couple of months; Finished 2 prototypes' },
                    { title: 'Project Manager', company: 'Ledner Group', start_date: 2019, ends_date: 2020, ongoing: false, summary: 'Completed multiple fixed and hourly projects with positive feedback and 5 star ratings; Worked on more than 100 projects from creating websites to graphic design' },
                    { title: 'Software Engineer', company: 'Gutmann', start_date: 2017, ends_date: 2019, ongoing: false, summary: '10 successfully completed projects and evaluated with highest grade (5) by the clients' }
                ],
                disabled: 0,
                experience: {
                    title: '',
                    company: '',
                    start_date: '',
                    ends_date: '',
                    ongoing: '',
                    summary: ''
                },
                isVisible: false,
                isShow: true,
                isActive: false,
                isButtonVisible: true
            }
        },
        methods: {
            toggleBu () {
              if (!this.isActive) {
                  this.isVisible = !this.isVisible
                  this.isShow = !this.isShow
                  this.isButtonVisible = !this.isButtonVisible
              } else {
                  this.isVisible = this.isVisible
                  this.isShow = this.isShow
                  this.isButtonVisible = this.isButtonVisible
              }
            },
            AddRecord: function (e) {
                
                e.preventDefault();
            },
        }
    }
</script>

<style scoped>

    .dropdown-fade-enter-active, .dropdown-fade-leave-active {
        transition: all .1s ease-in-out;
    }
    .dropdown-fade-enter, .dropdown-fade-leave-to {
        opacity: 0;
        transform: translateY(-12px);
    }

    .cursor-pointer{
        cursor: pointer;
    }

</style>