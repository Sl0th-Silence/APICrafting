# For bringing in data from a MongoDB to be used in the site

from pymongo import MongoClient
#Inserted data into database 
#houses.insert_one({"Type": "Condo", "Price": 300000})

def dbConnection():
    #connection
    client = MongoClient("mongodb+srv://jaymills:123419Wimpa@kingstonhouses.mdqbgjd.mongodb.net/")
    #Refer to database / If it doesn't exist, it creates it
    db = client.KingstonHouses
    #Refer to collections. Same as above
    houses = db.Houses_One
    return houses

houses = dbConnection()

results = houses.find()
for result in results:
    print(result)
