<template>
    <div>
        <div class="d-block mb-2">
            <div class="d-flex justify-content-between mb-3">
                <div>
                    <div class="d-flex flex-row">
                        <h5 class="mr-2">{{ experience.title }}</h5>
                        <svg @click="selectedItem" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit text-secondary cursor-pointer btn-icon-prepend">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </div>
                    <h6 class="text-secondary">{{ experience.company }}</h6>
                </div>
                <small class="text-muted">{{ experience.start_date }} - {{ experience.ends_date ? experience.ends_date : 'Aujourd\'hui' }}</small>
            </div>
            <p class="text-muted">
                {{ experience.summary }}
            </p>
        </div>
        <transition name="dropdown-fade" v-if="isSelected">
            <form v-on:submit.prevent="UpdateRecord(experience)">
                <div class="form-label-group">
                    <input type="text" id="updateTitle" class="form-control" v-model="experience.title" placeholder="Enter your position or title" autofocus>
                    <label for="updateTitle">Enter your position or title</label>
                </div>
                <div class="form-label-group">
                    <input type="text" id="updateCompanyName" v-model="experience.company" class="form-control" placeholder="Enter company name">
                    <label for="updateCompanyName">Enter company name</label>
                </div>
                <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                        <div class="form-label-group">
                            <input type="date" id="updateStartDate" v-model="experience.start_date" class="form-control" placeholder="Start Date" required="required">
                            <label for="updateStartDate">Start Date</label>
                        </div>
                    </div>
                    <div class="col-auto my-1">
                        <div class="form-label-group">
                            <input type="date" id="updateEndsDate" :disabled="disabled == 0" v-model="experience.ends_date" class="form-control" placeholder="Ends Date" required="required">
                            <label for="updateEndsDate">Ends Date</label>
                        </div>
                    </div>
                    <div class="col-auto my-1">
                        <div class="custom-control custom-checkbox mr-sm-2">
                            <input type="checkbox" @click="disabled = (disabled + 1) % 2" v-model="experience.ongoing" class="custom-control-input" id="updateOngoing">
                            <label class="custom-control-label text-secondary" for="updateOngoing">I'm currently working here</label>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-4">
                    <textarea class="form-control" name="description" v-model="experience.summary" rows="5"></textarea>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary text-secondary">Save changes</button>
                    <button type="button" class="btn btn-light text-secondary" @click="selectedItem">Cancel</button>
                    <button type="button" class="btn btn-danger float-right" @click="DeleteRecord(experience)">Delete</button>
                </div>
            </form>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ['experience'],
        data () {
            return {
                disabled: 0,
                isSelected: false,
                isActive: false
            }
        },
        methods: {
            selectedItem () {
                if (!this.isActive) {
                    this.isSelected = !this.isSelected
                } else {
                    this.isSelected = this.isSelected
                }
            },
            UpdateRecord: function (experience) {
                
            },
            DeleteRecord: function (experience) {
                
            }
        }
    }
</script>

<style scoped>
    .btn {
        font-family: "Nunito", sans-serif;
        letter-spacing: 2px;
        text-transform: normal;
        color: white;
    }
    .btn-primary {
        color: #212529;
        background-color: #25fde9;
        border-color: #25fde9;
    }

    .cursor-pointer{
        cursor: pointer;
    }

    .dropdown-fade-enter-active, .dropdown-fade-leave-active {
        transition: all .1s ease-in-out;
    }
    .dropdown-fade-enter, .dropdown-fade-leave-to {
        opacity: 0;
        transform: translateY(-12px);
    }
</style>