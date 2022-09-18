const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer");
const auth = require('../middlewares/auth')

router.get("/signin", adminController.viewSignin);
router.post("/signin", adminController.actionSignin);
router.use(auth);
router.get("/logout", adminController.actionLogout);
router.get("/dashboard", adminController.viewDashboard);

//Category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

//Bank
router.get("/bank", adminController.viewBank);
router.post("/bank", upload, adminController.addBank);
router.put("/bank", upload, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);

//item
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id", adminController.deleteItem);

//Detail Item
// Feature
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
router.post("/item/add/feature", upload, adminController.addFeature);
router.put("/item/update/feature", upload, adminController.editFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteFeature);
// Activity
router.post("/item/add/activity", upload, adminController.addActivity);
router.put("/item/update/activity", upload, adminController.editActivity);
router.delete("/item/:itemId/activity/:id", adminController.deleteActivity);

//Booking
router.get("/booking", adminController.viewBooking);
router.get("/booking/:id", adminController.showDetailBooking);
router.put("/booking/:id/accepted", adminController.actionAccepted);
router.put("/booking/:id/rejected", adminController.actionRejected);

module.exports = router;
