const travel = (req, res) => {
    pageTitle = process.env.MONGO_ATLAS_PW + " - Travel"; //MONGO_ATLUS_PW helped with getting the pageTitle var to work
    res.render('travel', {title: pageTitle});

};
module.exports = {
    travel
}