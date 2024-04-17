/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wmacky6sp50m42b")

  collection.listRule = "@request.auth.id = \"ewfu8ejxg55dyy3\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wmacky6sp50m42b")

  collection.listRule = "@request.auth.id=\"ewfu8ejxg55dyy3\""

  return dao.saveCollection(collection)
})
