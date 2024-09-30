const contacts = require("./contacts");
const argv = require("yargs").argv;


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      
      contacts.listContacts().then(console.table);
      break;

    case "get":
      
      contacts.getContactById(id).then((contact) => {
        if (contact) {
          console.log(contact);
        } else {
          console.log(`Contact with id ${id} not found.`);
        }
      });
      break;

    case "add":
      
      contacts.addContact(name, email, phone).then((newContact) => {
        console.log("Contact added:", newContact);
      });
      break;

    case "remove":
      
      contacts.removeContact(id).then((updatedContacts) => {
        console.log(`Contact with id ${id} removed.`);
      });
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
