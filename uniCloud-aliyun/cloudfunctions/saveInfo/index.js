'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	db.collection("table1").add(event);
	return {code: 200}
};
