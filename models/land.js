var mongoose = require('mongoose');

module.exports = mongoose.model('Land',{
	landnaam: String,
	regio: String,
	landafkorting: Array,
    buurlanden: Array,
    hoofdstad: String,
    mundeenheid: Array,
    talen: Array,
	alpha3: String
});