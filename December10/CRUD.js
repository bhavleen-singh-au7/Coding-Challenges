let names = ["vinod", "binod", "vinodh", "vinode"];

// Add binodh at the end (CREATE)
// Tell me output of the splice method (READ)
// Update vinode to VINODE (UPDATE)
// Delete vinod from an array (DELETE)
// Using only one function

// CREATE
names.splice(5, 5, "binodh");
// READ
console.log("Create and Read ", names);
// UPDATE
names.splice(3, 1, "VINODE");
console.log("Update", names);
// DELETE
names.splice(0, 1);
console.log("Delete", names);
