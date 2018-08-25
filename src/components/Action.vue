<template>
  <fieldset class="mb-2 p-2" id="rally-setup-primary-target">
      <div class="mt-2">
        <div class="border rounded">
          <div class="border-top p-2 bg-grey-light">
            <button class="btn-ui">+ Add Action</button>
            <a class="btn btn-ui pr-3 capitalize" data-open-button-dropdown="1" style="float:right;">
              Target Type 
              <i class="m-icon" data-open-button-dropdown="1">
                keyboard_arrow_down
              </i>
            </a>
          </div>
          <div class="p-2">
            <label for="sendInfo">Send to:</label>
            <!-- On enter the Form Expands -->
            <input type="text" class="formInput" placeholder="Search for individuals and groups or create your own targets" id="sendInfo" v-on:keypress.enter="actionForm = !actionForm"/>
          </div>
        </div>
      </div>
    <div v-show="actionForm">
      <ActionDetails></ActionDetails>
    </div>
  </fieldset>
</template>

<script>
import ActionDetails from '@/components/ActionDetail';

export default {
    name: 'Action',
    components: { ActionDetails },
    data() {
      return {
        actionForm: false,
      };
    },
}
</script>

<style scoped>
</style>
