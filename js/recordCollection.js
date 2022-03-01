// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const requiredObject = records[id];

  if (prop !== "tracks" && value) {
    requiredObject[prop] = value;
  } else if (prop === "tracks" && value) {
      if(requiredObject.hasOwnProperty("tracks")){
        requiredObject.tracks = [...requiredObject.tracks,value] 
      }else{
        requiredObject.tracks = [value] 
      }
  } else {
    delete requiredObject[prop];
  }

  records[id] = requiredObject;
  return records;
}

console.log(updateRecords(recordCollection, 2548, "artist", ""))
