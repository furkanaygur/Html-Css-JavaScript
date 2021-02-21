first => npm install express
npm install -D nodemon

# MongoDb Commands

# Database

show dbs
db => geçerli database i gösterir </br>

use <db_name>  </br>

db.dropDatabase() => database i siler  </br>

# Collections

show collections  </br>

db.creatCollection("<collection_name>")  </br>

db.<collection_name>.drop() => collection u siler  </br>

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
})  </br>


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

db.<collection_name>.find() => bütün kayıtları gösterir  </br> 

db.<collection_name>.find().pretty() => kayıtları güzel bi şekilde gösterir  </br>

db.<collection_name>.find().pretty().count() => kayıtların sayısını verir  </br>

db.<collection_name>.findOne().pretty() => ilk sonucu gösterir  </br> 

db.<collection_name>.find({},{\_id:0,<property_name>:1,<property_name>:1}).pretty() => bütün kayıtların sadece istenilen özellikleri gösterilir  </br> 

db.<collection_name>.find({<property_name>:<property_value>}).pretty() => istenilen değere eşleşen kayıtlar gösterilir  </br>

db.<collection_name>.find({<property_name> : {$gt:<property_value>}}).pretty() => belirtilen değerden büyük olanları kayıtları gösterir  </br>


######

$eq = Belirtilen değere eşit olan verileri temsil eder.  </br>

$gt = Belirtilen değerden büyük olan verileri temsil eder.  </br>

$gte = Belirtilen değerden büyük veya eşit olan verileri temsil eder.  </br>

$in = Belirtilen birden fazla değerden herhangi biriyle eşleşen verileri temsil eder.  </br>

$lt = Belirtilen değerden küçük olan verileri temsil eder.  </br>

$lte = Belirtilen değerden küçük veya eşit olan verileri temsil eder.  </br>

$ne = Belirtilen değere eşit olmayan tüm verileri temsil eder.  </br>
 
$nin = Belirtilen birden fazla değerden hiçbiriyle eşleşmeyen verileri temsil eder.  </br>

######

# Update

db.<collection_name>.updataOne({<property_name>:<property_value>},{$set: {"<property_name>:"<property_value>}}) => istenilen veride eşleşen değer değiştirir  </br>

db.<collection_name>.updataMany({},{$set: {<property_name>:<property_value>}}) => eşleşen tüm değerleri günceller  </br>

db.<collection_name>.updataOne({<property_name>:<property_value>},{$set: {<property_name>:<property_value>}}) => istenilen veride eşleşen tüm değerleri günceller  </br>


# Delete

db.<collection_name>.deleteOne({<property_name>:<property_value>}) => eşleşen kayıtı siler  </br>

db.<collection_name>.updataOne() => tüm kayıtları siler  </br>

db.<collection_name>.deleteMany({<property_name>:<property_value>}) => eşleşen tüm kayıtlar siler  </br>


# Skip, Limit, Sort

db.<collection_name>.find().skip(1).pretty() => (ilk) 1 kayıtı geçer ondan sonraki kayıtları getirir  </br>

db.<collection_name>.find().skip(3).pretty() => (ilk) 3 kayıtı geçer ondan sonraki kayıtları getirir  </br>

db.<collection_name>.find().limit(3).pretty() => 3 tane kayıt getirir  </br>

db.<collection_name>.find().skip(1).limit(2).pretty() => ilk elemanı geçtikten sonraki gelen 2 elemanı getirir  </br>

db.<collection_name>.find().sort({<property_name> : 1}).pretty() => girilen özellikte eşleşen kayıtları artan bi şekilde getirir  </br>

db.<collection_name>.find().sort({<property_name> : -1}).pretty() => girilen özellikte eşleşen kayıtları azalan bi şekilde getirir  </br>

# Aggregate

db.<collection_name>.aggregate([{$group: {_id :"$<property_name>", <new_row_name>: {$sum : 1}}}]) => kaç adet kayıt olduğunu verilen propery_name ile birlikte gösterir  </br>

db.<collection_name>.aggregate([{$group: {_id :"$<property_name>", <new_row_name>: {$avg : "$<property_name>"}}}]) => verilen property_name in değerinin ortalamasını verilen property_name ile birlikte gösterir  </br>

db.<collection_name>.aggregate([{$group: {_id :"$<property_name>", <new_row_name>: {$max : "$<property_name>"}}}]) => verilen property_name in en yüksek değeri verilen 
property_name ile birlikte gösterir  </br>

db.<collection_name>.aggregate([{$group: {_id :"$<property_name>", <new_row_name>: {$min : "$<property_name>"}}}]) => verilen property_name in en düşük değeri verilen property_name ile birlikte gösterir  </br>
