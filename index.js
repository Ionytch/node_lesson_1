const { listContacts,getContactById,removeContact,addContact } = require('./contacts');

const fs = require("fs/promises");


const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


async function invokeAction ({ action, id, name, email, phone }) {
  switch (action) {
      case "list":
          const allContacts = await listContacts();
          console.table(allContacts);

      break;

      case "get":
          const contactsById = await getContactById(id);
          console.table(contactsById);
     
      break;

      case "add":
          const newContact = await addContact({ name, email, phone });
          console.table(newContact);

      break;

      case "remove":
          const newList = await removeContact(id);
          console.table(newList);


      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
