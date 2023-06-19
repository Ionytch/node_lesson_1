// const fs = require('fs').promises;
const fs = require("fs/promises");
const path = require('path');
const {nanoid} = require('nanoid');

const contactsPath = path.join (__dirname,'/db','contacts.json');


// TODO: задокументувати кожну функцію
async function listContacts() {

  const data = await fs.readFile(contactsPath, 'utf-8')
  return JSON.parse(data)
  // ...твій код
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result||null;
  // ...твій код
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  // const result = contacts.filter((item) => item.id !== contactId);
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result
  // ...твій код
}

async function addContact({name, email, phone}) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
  // ...твій код
}

// function main() {
//     console.log(contactsPath)
// };


module.exports = { listContacts,getContactById,removeContact,addContact };