var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketListSchema = new Schema({
	title: {
		type: String,
		default: 'hello'
	},
	topic: {
		type: String,
		default: 'james'
	},
	url: {
		type: String,
		default: 'wasup?'
	},
	content: {
		type: String,
		default: 'wasup?'
	},
	specificUser: {
		type: String,
		default: ''
	}
});

module.exports = mongoose.model('BucketList', BucketListSchema);