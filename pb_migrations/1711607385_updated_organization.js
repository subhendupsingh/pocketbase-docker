/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4mwoo21p1deukok")

  collection.name = "organizations"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_uH19Az7` ON `organizations` (`org_id`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4mwoo21p1deukok")

  collection.name = "organization"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_uH19Az7` ON `organization` (`org_id`)"
  ]

  return dao.saveCollection(collection)
})
