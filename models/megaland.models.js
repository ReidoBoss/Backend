const sql = require("../config/config.js");
const Jimp = require("jimp");

const Agent = function (agent) {
  this.agent_id = agent.agent_id;
  this.agent_name = agent.agent_name;
  this.agent_image = agent.agent_image;
  this.agent_description = agent.agent_description;
  this.agent_position = agent.agent_position;
  this.agent_email = agent.agent_email;
  this.agent_address = agent.agent_address;
  this.agent_contact_no = agent.agent_contact_no;
  this.agent_city = agent.agent_city;
  this.agent_country = agent.agent_country;
  this.agent_city = agent.agent_city;
  this.agent_region = agent.agent_region;
  this.agent_username = agent.agent_username;
  this.agent_password = agent.agent_password;
  this.agent_fb = agent.agent_fb;
  this.agent_x = agent.agent_x;
  this.agent_insta = agent.agent_insta;
  this.agent_number_of_property = agent.agent_number_of_property;
};

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

Agent.addAgent = (newAgent, result) => {
  sql.query(
    "INSERT INTO agent_table SET ?",
    {
      agent_id: newAgent.agent_id,
      agent_name: newAgent.agent_name,
      agent_image: newAgent.agent_image,
      agent_description: newAgent.agent_description,
      agent_position: newAgent.agent_position,
      agent_email: newAgent.agent_email,
      agent_address: newAgent.agent_address,
      agent_contact_no: newAgent.agent_contact_no,
      agent_city: newAgent.agent_city,
      agent_country: newAgent.agent_country,
      agent_city: newAgent.agent_city,
      agent_region: newAgent.agent_region,
      agent_username: newAgent.agent_username,
      agent_password: newAgent.agent_password,
      agent_fb: newAgent.agent_fb,
      agent_x: newAgent.agent_x,
      agent_insta: newAgent.agent_insta,
      agent_number_of_property: newAgent.agent_number_of_property,
    },
    (error, results) => {
      if (error) {
        console.log("error: ", error);
        result(error, null);
        return;
      }

      console.log("created agent: ", {
        agent_id: result.insertId,
        ...newAgent,
      });
      result(null, { agent_id: results.insertId, ...newAgent });
    }
  );
};

function adjust(imageFile) {
  image = Buffer.from(imageFile, 'base64');
  let size = image.length / (1024 * 1024);
  let quality = 100;
  const img = Jimp.read(image);
  while (size > 16 && quality > 0) {
    quality -= 3;
    img.quality(quality);
  }
  return img;
}

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
      property_local_area: newProperty.property_local_area,
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


              // insert main image in 
              let property_main_img = adjust(newProperty.property_main_image);
              sql.query(
                "INSERT INTO property_images_table (property_id, property_main_image) VALUES (?, ?)",
                {
                  property_id:propertyId,
                  property_main_image:property_main_img,
                },
                (err,res) => {
                  if(err){
                    console.log("error:",err);
                    result(err,null);
                    return;
                  }
                }
              );

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

Agent.getAgents = (result) => {
  sql.query(
    "SELECT agent_name, agent_description,agent_position FROM agent_table",
    (err, res) => {
      if (err) {
        console.log("Error in executing property_nearest_table query: ", err);
        result(err, null);
        return;
      }
      const agentDetails = res.map((row)=>({
        agent_name : row.agent_name,
        agent_description : row.agent_description,
        agent_position : row.agent_position,
      }));

      console.log(...agentDetails);
      result(null,agentDetails);
    }
  );
};

module.exports.Property = Property;
module.exports.Agent = Agent;
