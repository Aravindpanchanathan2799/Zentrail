import requests
import pymongo
import os
from dotenv import load_dotenv

# Load .env variables
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
NPS_API_KEY = os.getenv("NPS_API_KEY")

# MongoDB Setup
client = pymongo.MongoClient(MONGO_URI)
db = client["zentrail"]
collection = db["amenities_parksplaces"]

# NPS API URL
url = "https://developer.nps.gov/api/v1/amenities/parksplaces"
headers = {"X-Api-Key": NPS_API_KEY}

def fetch_and_store_data():
    response = requests.get(url, headers=headers)
    
    if response.status_code != 200:
        print(f"❌ Error fetching data: {response.status_code}")
        return

    json_data = response.json()
    amenities_list = json_data.get("data", [])

    inserted = 0
    for amenity in amenities_list:
        collection.update_one(
            {"id": amenity["id"]},
            {"$set": amenity},
            upsert=True
        )
        inserted += 1

    print(f"🎉 {inserted} amenities-parks-places entries inserted into MongoDB!")

if __name__ == "__main__":
    fetch_and_store_data()

