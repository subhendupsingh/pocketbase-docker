/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lj8lu80bo1qqlkv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iswezu07",
    "name": "purpose",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "EINVOICE",
        "DFINVOICES",
        "SIGN"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lj8lu80bo1qqlkv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iswezu07",
    "name": "purpose",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "DF_INVOICE",
        "DF_ORDERS"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
