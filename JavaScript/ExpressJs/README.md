first => npm install express
npm install -D nodemon

# MongoDb Commands

# Database

show dbs
db => geçerli database i gösterir
use <db_name>
db.dropDatabase() => database i siler

# Collections

show collections
db.creatCollection("<collection_name>")
db.<collection_name>.drop() => collection u siler

# Insert

db.<collection_name>.insertOne({
"name": "Furkan Aygur",
"students": 5000,
"rating": "4500",
"courses": [
"Html",
"Css",
"Sass"
],
"status": "A"
})

db.<collection_name>.insertMany([
{
"name": "Furkan Aygur",
"students": 5000,
"rating": "4500",
"courses": [
"Html",
"Css",
"Sass"
],
"status": "A"
},
{
"name": "Furkan Aygur2",
"students": 5000,
"rating": "4500",
"courses": [
"Html",
"Css",
"Sass"
],
"status": "A"
}
])

# Find

db.<collection_name>.find() => bütün kayıtları gösterir
db.<collection_name>.find().pretty() => kayıtları güzel bi şekilde gösterir
db.<collection_name>.find().pretty().count() => kayıtların sayısını verir
db.<collection_name>.findOne().pretty() => ilk sonucu gösterir
db.<collection_name>.find({},{\_id:0,<property_name>:1,<property_name>:1}).pretty() => bütün kayıtların sadece istenilen özellikleri gösterilir
db.<collection_name>.find({<property_name>:<property_value>}).pretty() => istenilen değere eşleşen kayıtlar gösterilir
db.<collection_name>.find({<property_name> : {$gt:<property_value>}}).pretty() => belirtilen değerden büyük olanları kayıtları gösterir

######

$eq = Belirtilen değere eşit olan verileri temsil eder.

$gt = Belirtilen değerden büyük olan verileri temsil eder.

$gte = Belirtilen değerden büyük veya eşit olan verileri temsil eder.

$in = Belirtilen birden fazla değerden herhangi biriyle eşleşen verileri temsil eder.\*

$lt = Belirtilen değerden küçük olan verileri temsil eder.

$lte = Belirtilen değerden küçük veya eşit olan verileri temsil eder.\*

$ne = Belirtilen değere eşit olmayan tüm verileri temsil eder.

$nin = Belirtilen birden fazla değerden hiçbiriyle eşleşmeyen verileri temsil eder.

######

# Update

db.<collection_name>.updataOne({<property_name>:<property_value>},{$set: {"<property_name>:"<property_value>}}) => istenilen veride eşleşen değer değiştirir
db.<collection_name>.updataMany({},{$set: {<property_name>:<property_value>}}) => eşleşen tüm değerleri günceller
db.<collection_name>.updataOne({<property_name>:<property_value>},{$set: {<property_name>:<property_value>}}) => istenilen veride eşleşen tüm değerleri günceller

# Delete

db.<collection_name>.deleteOne({<property_name>:<property_value>}) => eşleşen kayıtı siler
db.<collection_name>.updataOne() => tüm kayıtları siler
db.<collection_name>.deleteMany({<property_name>:<property_value>}) => eşleşen tüm kayıtlar siler

# Skip, Limit, Sort

db.<collection_name>.find().skip(1).pretty() => (ilk) 1 kayıtı geçer ondan sonraki kayıtları getirir
db.<collection_name>.find().skip(3).pretty() => (ilk) 3 kayıtı geçer ondan sonraki kayıtları getirir

db.<collection_name>.find().limit(3).pretty() => 3 tane kayıt getirir
db.<collection_name>.find().skip(1).limit(2).pretty() => ilk elemanı geçtikten sonraki gelen 2 elemanı getirir

db.<collection_name>.find().sort({<property_name> : 1}).pretty() => girilen özellikte eşleşen kayıtları artan bi şekilde getirir
db.<collection_name>.find().sort({<property_name> : -1}).pretty() => girilen özellikte eşleşen kayıtları azalan bi şekilde getirir

# Aggregate

db.<collection_name>.aggregate([{$group: {_id :"$<property_name>", <new_row_name>: {$sum : 1}}}]) => kaç adet kayıt olduğunu verilen propery_name ile birlikte gösterir
db.<collection_name>.aggregate([{$group: {_id :"$<property_name>", <new_row_name>: {$avg : "$<property_name>"}}}]) => verilen property_name in değerinin ortalamasını verilen property_name ile birlikte gösterir
db.<collection_name>.aggregate([{$group: {_id :"$<property_name>", <new_row_name>: {$max : "$<property_name>"}}}]) => verilen property_name in en yüksek değeri verilen property_name ile birlikte gösterir
db.<collection_name>.aggregate([{$group: {_id :"$<property_name>", <new_row_name>: {$min : "$<property_name>"}}}]) => verilen property_name in en düşük değeri verilen property_name ile birlikte gösterir
