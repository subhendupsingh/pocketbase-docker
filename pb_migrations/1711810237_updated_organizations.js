/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4mwoo21p1deukok")

  // remove
  collection.schema.removeField("wg3g2njm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s993vi5z",
    "name": "gst_state_code",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4mwoo21p1deukok")

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

  // remove
  collection.schema.removeField("s993vi5z")

  return dao.saveCollection(collection)
})
