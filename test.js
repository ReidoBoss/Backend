<div class="text-[#454544] text-[13.5px] font-semibold flex">
          <div class="">Amenities:</div>
          <div class="ml-2 flex flex-wrap gap-2">
            <mdicon
              v-if="attic == true"
              class=""
              name="home-roof"
              :width="22"
              :height="22"
            />

            <mdicon
              v-if="balcony == true"
              class=""
              name="balcony"
              :width="22"
              :height="22"
            />

            <!-- <mdicon
                  v-if="deck == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->
            <mdicon
              v-if="fenced == true"
              class=""
              name="fence"
              :width="22"
              :height="22"
            />
            <mdicon
              v-if="fireplace == true"
              class=""
              name="fireplace"
              :width="22"
              :height="22"
            />
            <!-- <mdicon
                  v-if="frontyard == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->

            <mdicon
              v-if="gasheat == true"
              class=""
              name="stove"
              :width="22"
              :height="22"
            />
            <mdicon
              v-if="gym == true"
              class=""
              name="dumbbell"
              :width="22"
              :height="22"
            />
            <!-- <mdicon
                  v-if="lakeview == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->
            <!-- <mdicon
                  v-if="pond == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->
            <mdicon
              v-if="pool == true"
              class=""
              name="pool"
              :width="22"
              :height="22"
            />
            <!-- <mdicon
                  v-if="recreation == true"
                  class=""
                  name="balcony"
                  :width="22"
                  :height="22"
                /> -->
            <mdicon
              v-if="sprinklers == true"
              class=""
              name="sprinkler-variant"
              :width="22"
              :height="22"
            />
            <mdicon
              v-if="storage == true"
              class=""
              name="warehouse"
              :width="22"
              :height="22"
            />
            <mdicon
              v-if="washer == true"
              class=""
              name="tumble-dryer"
              :width="22"
              :height="22"
            />
            <mdicon
              v-if="winecellar == true"
              class=""
              name="liquor"
              :width="22"
              :height="22"
            />
          </div>
        </div>

attic: boolean;
balcony: boolean;
deck: boolean;
fenced: boolean;
fireplace: boolean;
frontyard: boolean;
gasheat: boolean;
gym: boolean;
lakeview: boolean;
pond: boolean;
pool: boolean;
recreation: boolean;
sprinklers: boolean;
storage: boolean;
washer: boolean;
winecellar: boolean;



:attic="property.property_attic"
        :balcony = "property.property_balcony"
        :deck = "property.property_deck"
        :fenced = "property.property_fenced_yard"
        :fireplace = "property.property_fireplace"
        :frontyard = "property.property_frontyard"
        :gasheat = "property.property_gasheat"
        :gym = "property.property_gym"
        :lakeview = "property.property_lakeview"
        :pond = "property.property_pond"
        :pool = "property.property_pool"
        :recreation = "property.property_recreation"
        :sprinklers = "property.property_sprinklers"
        :storage = "property.property_storage"
        :washer = "property.property_washer"
        :winecellar = "property.property_winecellar"