<template>
  <div>
    <div class="center container--narrow-larger color-purple">
      <h3 class="sm-h3 boldest">Ready, Set... Rally!</h3>
      <p class="mb-0 bump max-width-4 mx-auto">Get started by describing your Rally's goal and purpose.</p>
    </div>
    <form class="pt-2 container--narrow border-top mt-3">
      <fieldset class="mb-2 p-2" id="rally-setup-title">
        <div><label>Rally title *</label>
          <p class="caption">Grab people's attention with a title that describes your goal</p>
        </div><input name="title" placeholder="Rally title">
        <div>
          <p class="small m-0 align-right pt-1 color-grey">65 characters left</p>
        </div>
      </fieldset>
      <fieldset class="mb-2 p-2" id="rally-setup-summary">
        <div><label>Rally summary *</label>
          <p class="caption">2 – 3 sentences about why people should care about your Rally</p>
        </div>
        <div class="mt-2"><textarea name="summary" rows="4" placeholder="Rally summary"></textarea></div>
      </fieldset>
      <fieldset class="mb-2 p-2" id="rally-setup-categories">
        <div><label>Choose categories *</label>
          <p class="caption">Help supporters find your Rally by choosing categories</p>
        </div>
        <div class="mt-2">
          <div class="flex flex-wrap">
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="animalRights" value="Animal Rights" name="categories[]"><label for="animalRights">Animal Rights</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="artCulture" value="Arts &amp; Culture" name="categories[]"><label for="artCulture">Arts &amp; Culture</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="children" value="Children's Issues" name="categories[]"><label for="children">Children's Issues</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="" value="Social Justice" name="categories[]"><label for="">Social Justice</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="disasterRelief" value="Disaster Relief" name="categories[]"><label for="disasterRelief">Disaster Relief</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="publicSafety" value="Public Safety" name="categories[]"><label for="publicSafety">Public Safety</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="" value="Economy" name="categories[]"><label for="">Economy</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="education" value="Education" name="categories[]"><label for="education">Education</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="environment" value="Environment" name="categories[]"><label for="environment">Environment</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="" value="Human Rights" name="categories[]"><label for="">Human Rights</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="internationalAid" value="International Aid" name="categories[]"><label for="internationalAid">International Aid</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="veteranIssues" value="Veteran's Issues" name="categories[]"><label for="veteranIssues">Veteran's Issues</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="" value="Health" name="categories[]"><label for="">Health</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="foodAgriculture" value="Food &amp; Agriculture" name="categories[]"><label for="foodAgriculture">Food &amp; Agriculture</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="LGBTQRights" value="LGBTQ Rights" name="categories[]"><label for="LGBTQRights">LGBTQ Rights</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="mediaEntertainment" value="Media &amp; Entertainment" name="categories[]"><label for="mediaEntertainment">Media &amp; Entertainment</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="politics" value="Politics" name="categories[]"><label for="politics">Politics</label></div>
            </div>
            <div class="col-4 md-col-6 mb-1 pr-1">
              <div><input type="checkbox" id="womenRights" value="Women's Rights" name="categories[]"><label for="womenRights">Women's Rights</label></div>
            </div>
          </div>
        </div>
        </fieldset>
        <fieldset class="mb-2 p-2" id="rally-setup-image">
          <div><label>Rally header image *</label>
            <p class="caption">Choose a file less than 5MB</p>
          </div>
          <div class="mt-2">
            <div>
              <div class="aspect aspect-2x1">
                <div class="bg-cover bg-center bg-grey-light bg-contain" style="background-image: url(&quot;/svgs/ui/photo.svg&quot;);"></div>
              </div>
              <div class="mt-2"><label class="btn btn-ui inline-block" for="0.7653952149817094">Add image</label><input type="file" accept=".jpg, .jpeg, .png" id="0.7653952149817094" class="hide"><input type="hidden" name="image_data"></div>
              <div class="z-4 bg-white left-0 top-0 fixed width-full height-full max-height-full overflow-auto invisible"
                data-fade="out"><i class="m-icon fixed z-2 top-0 right-0 p-2 h3 cursor-pointer">close</i>
                <div>
                  <div class="vertically-center width-full">
                    <div class="max-width-2 mx-auto">
                      <div></div>
                      <div class="mt-2"><a class="btn btn-ui">Crop image</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="mb-2 p-2" id="rally-setup-video">
          <label>Youtube video (optional)</label>
          <input name="youtube_video_url">
        </fieldset>
        <div class="border-top col-12 pt-3 pb-4 px-2">
          <router-link to="/start/step1"><button class="btn-orange col-2">Back</button></router-link>
          <router-link to="/start/step2"><button class="btn-main col-right">Save and Continue</button></router-link>
          <!--<button class="btn-main">Save and Continue</button>-->
        </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'RallyFormStep1',
    data() {
      return {};
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
