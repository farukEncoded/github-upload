import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController.js";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from : ${req.originalUrl}`);
      console.log(`Request Type : ${req.method}`);
      next();
    }, getContacts)
    .post(addNewContact);

  app
    .route("/contact/:contactID")
    .get(getContactWithID)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;
