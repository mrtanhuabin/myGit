const { resolve } = require("dns");

// 开发文档: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
const db = uniCloud.database();
const collection1 = db.collection('table1');
const collection2 = db.collection('table2');
module.exports = {
	add(type, obj) {
		console.log("入参", type, obj);
		if(!obj) {
			return {
				errCode: 'INVALID_TODO',
				errMsg: 'TODO标题或内容不可为空'
			}
		}
		if(type == "1"){
			collection1.add(obj);
		}else{
			collection2.add(obj);
		}
		return {
			errCode: 200,
			errMsg: '添加成功'
		}
	},
	get(type) {
		console.log("入参",type);
		// 查询
		if(type == "1"){
			return collection1.get();
		}else{
			return collection2.get();
		}
		return {
			errCode: 200,
			errMsg: '查询成功'
		}
	},
	del(type, id) {
		console.log("入参",type, id);
		// 删除
		if(type == "1"){
			return collection1.doc(id).remove();
		}else{
			return collection2.doc(id).remove();
		}
		return {
			errCode: 200,
			errMsg: '删除成功'
		}
	}
}
