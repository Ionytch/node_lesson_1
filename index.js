const { listContacts,getContactById,removeContact,addContact } = require('./contacts');

const fs = require("fs/promises");
// const yargs = require('yargs');
// const { hideBin } = require('yargs/helpers')

// const argv = require("yargs").argv;

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// // TODO: рефакторить
async function invokeAction ({ action, id, name, email, phone }) {
  switch (action) {
      case "list":
          const allContacts = await listContacts();
          console.table(allContacts);
//       // ...
      break;

      case "get":
          const contactsById = await getContactById(id);
          console.table(contactsById);
      // ... id
      break;

      case "add":
          const newContact = await addContact({ name, email, phone });
          console.table(newContact);
//       // ... name email phone
      break;

      case "remove":
          const newList = await removeContact(id);
          console.table(newList);

//       // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
// invokeAction({ action: 'list' })
// invokeAction({ action: 'get', id: 'qdggE76Jtbfd9eWJHrssH' })
// invokeAction({action:'add', name:'Feliks', email:'fel@mail.com', phone:'011-555-66-77'})
// invokeAction({ action: 'remove', id: 'UZOSDKGVZGyXMfcE53nWd' })