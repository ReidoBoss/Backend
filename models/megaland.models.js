const sql = require("../config/config.js");

const Property = function(property){
    this.property_name = property.property_name;
    this.property_description = property.property_description;
    this.property_meta_tag_title = property.property_meta_tag_title;
    this.property_owner_agent = property.property_owner_agent;
    this.property_video = property.property_video;
    this.property_type = property.property_type;
    this.property_price = property.property_price;
    this.property_category = property.property_category;
    this.property_country = property.property_country;
    this.property_region = property.property_region;
    this.property_city = property.property_city;
    this.property_zipcode = property.property_zipcode;
    this.property_area = property.property_area;
    this.property_bedroom = property.property_bedroom;
    this.property_bathroom = property.property_bathroom;
    this.property_room_count = property.property_room_count;
    this.property_parking_space = property.property_parking_space;
    this.property_attic = property.property_attic,
    this.property_balcony = property.property_balcony,
    this.property_deck = property.property_deck,
    this.property_fenced_yard = property.property_fenced_yard,
    this.property_fireplace = property.property_fireplace,
    this.property_frontyard = property.property_frontyard,
    this.property_gasheat = property.property_gasheat,
    this.property_gym = property.property_gym,
    this.property_lakeview = property.property_lakeview,
    this.property_pond = property.property_pond,
    this.property_pool = property.property_pool,
    this.property_recreation = property.property_recreation,
    this.property_sprinklers = property.property_sprinklers,
    this.property_storage = property.property_storage,
    this.property_washer = property.property_washer,
    this.property_winecellar = property.property_winecellar
}

Property.addProperty = (newProperty, result) => {
    sql.query("INSERT INTO property_table SET ?", newProperty, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created property: ", { property_id: res.insertId, ...newProperty });
        result(null, { property_id: res.insertId, ...newProperty });
    });
    console.log(newProperty);
};

module.exports = Property;

