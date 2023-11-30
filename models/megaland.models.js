const sql = require("../config/config.js");
const Jimp = require("jimp");

const Property = function (property) {
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
  this.property_local_area = property.property_local_area;
  this.property_enable = property.property_enable;

  this.property_attic = property.property_attic;
  this.property_balcony = property.property_balcony;
  this.property_deck = property.property_deck;
  this.property_fenced_yard = property.property_fenced_yard;
  this.property_fireplace = property.property_fireplace;
  this.property_frontyard = property.property_frontyard;
  this.property_gasheat = property.property_gasheat;
  this.property_gym = property.property_gym;
  this.property_lakeview = property.property_lakeview;
  this.property_pond = property.property_pond;
  this.property_pool = property.property_pool;
  this.property_recreation = property.property_recreation;
  this.property_sprinklers = property.property_sprinklers;
  this.property_storage = property.property_storage;
  this.property_washer = property.property_washer;
  this.property_winecellar = property.property_winecellar;

  this.property_airport = property.property_airport;
  this.property_busstand = property.property_busstand;
  this.property_hospital = property.property_hospital;
  this.property_patroltank = property.property_patroltank;
  this.property_railway = property.property_railway;
  this.property_shopping = property.property_shopping;
  this.property_universities = property.property_universities;

  this.property_main_image = property.property_main_image;
};

// function adjust(imageFile) {
//   image = Buffer.from(imageFile, 'base64');
//   let size = image.length / (1024 * 1024);
//   let quality = 100;
//   const img = Jimp.read(image);
//   while (size > 16 && quality > 0) {
//     quality -= 3;
//     img.quality(quality);
//   }
//   return img;
// }

Property.addProperty = (newProperty, result) => {
  sql.query(
    "INSERT INTO property_table SET ?",
    {
      property_name: newProperty.property_name,
      property_description: newProperty.property_description,
      property_meta_tag_title: newProperty.property_meta_tag_title,
      property_owner_agent: newProperty.property_owner_agent,
      property_video: newProperty.property_video,
      property_type: newProperty.property_type,
      property_price: newProperty.property_price,
      property_category: newProperty.property_category,
      property_country: newProperty.property_country,
      property_region: newProperty.property_region,
      property_city: newProperty.property_city,
      property_zipcode: newProperty.property_zipcode,
      property_area: newProperty.property_area,
      property_bedroom: newProperty.property_bedroom,
      property_bathroom: newProperty.property_bathroom,
      property_room_count: newProperty.property_room_count,
      property_parking_space: newProperty.property_parking_space,
      property_enable: newProperty.property_enable,
    },
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      const propertyId = res.insertId;

      // Step 3: Insert into property_amenities_table
      sql.query(
        "INSERT INTO property_amenities_table SET ?",
        {
          property_id: propertyId,
          property_attic: newProperty.property_attic,
          property_balcony: newProperty.property_balcony,
          property_deck: newProperty.property_deck,
          property_fenced_yard: newProperty.property_fenced_yard,
          property_fireplace: newProperty.property_fireplace,
          property_frontyard: newProperty.property_frontyard,
          property_gasheat: newProperty.property_gasheat,
          property_gym: newProperty.property_gym,
          property_lakeview: newProperty.property_lakeview,
          property_pond: newProperty.property_pond,
          property_pool: newProperty.property_pool,
          property_recreation: newProperty.property_recreation,
          property_sprinklers: newProperty.property_sprinklers,
          property_storage: newProperty.property_storage,
          property_washer: newProperty.property_washer,
          property_winecellar: newProperty.property_winecellar,
        },
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }

          // Step 4: Insert into property_nearest_table
          sql.query(
            "INSERT INTO property_nearest_table SET ?",
            {
              property_id: propertyId,
              property_airport: newProperty.property_airport,
              property_busstand: newProperty.property_busstand,
              property_hospital: newProperty.property_hospital,
              property_patroltank: newProperty.property_patroltank,
              property_railway: newProperty.property_railway,
              property_shopping: newProperty.property_shopping,
              property_universities: newProperty.property_universities,
            },
            (err, res) => {
              if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
              }

              // let property_main_img = adjust(newProperty.property_main_image);
              // sql.query(
              //   "INSERT INTO property_images_table (property_id, property_main_image) VALUES (?, ?)",
              //   {
              //     property_id:propertyId,
              //     property_main_image:property_main_img,
              //   },
              //   (err,res) => {
              //     if(err){
              //       console.log("erro:",err);
              //       result(err,null);
              //       return;
              //     }
              //   }
              // );

              // Step 5: Return the result
              console.log("created property: ", {
                property_id: propertyId,
                ...newProperty,
              });
              result(null, { property_id: propertyId, ...newProperty });
            }
          );
        }
      );
    }
  );
};
Property.getLatestProperty = (result) => {
  var data = {};

  // Query for property_table
  sql.query(
    "SELECT property_name, property_price, property_bedroom, property_bathroom, property_area, property_city , property_local_area, property_type, property_category FROM property_table ORDER BY property_id DESC LIMIT 6",
    (error, queryResult) => {
      if (error) {
        console.log("Error in executing property_table query: ", error);
        result(error, null);
        return;
      }

      const propertyDetails = queryResult.map((row) => ({
        property_name: row.property_name,
        property_price: row.property_price,
        property_bedroom: row.property_bedroom,
        property_bathroom: row.property_bathroom,
        property_area: row.property_area,
        property_city: row.property_city,
        property_local_area: row.property_local_area,
        property_type: row.property_type,
        property_category: row.property_category,
      }));

      data = { ...propertyDetails };

      // Query for property_nearest_table
      sql.query(
        "SELECT * FROM property_nearest_table ORDER BY property_id DESC LIMIT 6",
        (error, nearestResult) => {
          if (error) {
            console.log(
              "Error in executing property_nearest_table query: ",
              error
            );
            result(error, null);
            return;
          }

          // Merge nearest into propertyDetails
          propertyDetails.forEach((property, index) => {
            const nearestRow = nearestResult[index];
            Object.assign(property, {
              property_airport: nearestRow.property_airport,
              property_busstand: nearestRow.property_busstand,
              property_hospital: nearestRow.property_hospital,
              property_patroltank: nearestRow.property_patroltank,
              property_railway: nearestRow.property_railway,
              property_shopping: nearestRow.property_shopping,
              property_universities: nearestRow.property_universities,
            });
          });

          // Return the object with propertyDetails
          data.propertyDetails;
          console.log(data);
          result(null, data);
        }
      );
    }
  );
};

module.exports = Property;
