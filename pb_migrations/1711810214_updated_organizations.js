/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4mwoo21p1deukok")

  // remove
  collection.schema.removeField("ut1uz4yw")

  // remove
  collection.schema.removeField("je6ekwvv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4mwoo21p1deukok")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ut1uz4yw",
    "name": "invoice_prefix",
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
    "id": "je6ekwvv",
    "name": "counter",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
