const xlsx = require("xlsx");

const wb = xlsx.readFile("contactlist.xlsx");

const ws = wb.Sheets["contacts"];

const contactList =  xlsx.utils.sheet_to_json(ws);

module.exports = contactList;


