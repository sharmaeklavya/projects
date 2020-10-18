const xlsx = require("xlsx");

const wb = xlsx.readFile("contactlist.xlsx");

const ws = wb.Sheets["contacts"];

export const contactList =  xlsx.utils.sheet_to_json(ws);


console.log(contactList)