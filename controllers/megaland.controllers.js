// const Property = require("../models/megaland.models.js");

// exports.addProperty = (req,res) =>{
//     if(!req.body){
//         res.status(400).send({
//             message: "Content cannot be enpty"
//         });
//     }
// }

// const property = new Property({
//     property_name : req.body.property_name,
//     property_description : req.body.property_description,
//     property_meta_tag_title : req.body.property_meta_tag_title,
//     property_owner_agent : req.body.property_owner_agent,
//     property_image : req.body.property_image,
//     property_video : req.body.property_video,
//     property_type : req.body.property_type,
//     property_price : req.body.property_price,
//     property_category : req.body.property_category,
//     property_country : req.body.property_country,
//     property_region : req.body.property_region,
//     property_city : req.body.property_city,
//     property_zipcode : req.body.property_zipcode,
//     property_area : req.body.property_area,
//     property_bedroom : req.body.property_bedroom,
//     property_bathroom : req.body.property_bathroom,
//     property_room_count : req.body.property_room_count,
//     property_parking_space : req.body.property_parking_space,
//     property_amenities : req.body.property_amenities,
//     property_nearest_place : req.body.property_nearest_place||false
// });


// Property.addProperty(property, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     else res.send(data);
//   });
// };

const Property = require("../models/megaland.models.js");

exports.addProperty = (req, res) => {
    if (!req.body) {
            res.status(400).send({
            message: "Content cannot be empty"
        });
    }

    const property = new Property({
        property_name: req.body.property_name,
        property_description: req.body.property_description,
        property_meta_tag_title: req.body.property_meta_tag_title,
        property_owner_agent: req.body.property_owner_agent,
        property_video: req.body.property_video,
        property_type: req.body.property_type,
        property_price: req.body.property_price,
        property_category: req.body.property_category,
        property_country: req.body.property_country,
        property_region: req.body.property_region,
        property_city: req.body.property_city,
        property_zipcode: req.body.property_zipcode,
        property_area: req.body.property_area,
        property_bedroom: req.body.property_bedroom,
        property_bathroom: req.body.property_bathroom,
        property_room_count: req.body.property_room_count,
        property_parking_space: req.body.property_parking_space,
        property_attic: req.body.property_attic,
        property_balcony:req.body.property_balcony,
        property_deck:req.body.property_deck,
        property_fenced_yard:req.body.property_fenced_yard,
        property_fireplace:req.body.property_fireplace,
        property_frontyard:req.body.property_frontyard,
        property_gasheat:req.body.property_gasheat,
        property_gym:req.body.property_gym,
        property_lakeview:req.body.property_lakeview,
        property_pond:req.body.property_pond,
        property_pool:req.body.property_pool,
        property_recreation:req.body.property_recreation,
        property_sprinklers:req.body.property_sprinklers,
        property_storage:req.body.property_storage,
        property_washer:req.body.property_washer,
        property_winecellar:req.body.property_winecellar
        || false
    });

    Property.addProperty(property, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the Property."
            });
        }

        res.send(data);
    });
};
