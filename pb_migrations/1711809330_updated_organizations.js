/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4mwoo21p1deukok")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sarlomex",
    "name": "address_1",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wg3g2njm",
    "name": "gst_state_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4mwoo21p1deukok")

  // remove
  collection.schema.removeField("sarlomex")

  // remove
  collection.schema.removeField("wg3g2njm")

  return dao.saveCollection(collection)
})
