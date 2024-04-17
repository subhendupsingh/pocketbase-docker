/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yr1qcorgs37pp9a")

  collection.indexes = [
    "CREATE INDEX `idx_OgptOHn` ON `users` (`email`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yr1qcorgs37pp9a")

  collection.indexes = []

  return dao.saveCollection(collection)
})
