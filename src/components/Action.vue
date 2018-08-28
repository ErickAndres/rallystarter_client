<template>
  <fieldset class="mb-2 p-2" id="rally-setup-primary-target">
      <div class="mt-2">
        <div>
          <div class="border rounded"> <!-- border inheriting style from index not color-->
            <div class="p-2 bg-grey-light">
              <button class="btn btn-ui bg-white">+ Add Action</button>
              <a class="btn btn-ui bg-white col-right" data-open-button-dropdown="1">
                Target Type 
                <i class="m-icon" data-open-button-dropdown="1">
                  keyboard_arrow_down
                </i>
              </a>
            </div>
            <div class="p-2">
              <label class="caption" for="sendInfo">Send to:</label>
              <input type="text" placeholder="Search for individuals and groups or create your own targets" id="sendInfo" v-on:keypress.enter="actionForm = !actionForm"/>
            </div>
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
