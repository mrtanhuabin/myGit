<template>
	<view class="container">
		<view class="tabHeader">
			<view class="id">序号</view>
			<view class="name">姓名</view>
			<view class="sex">性别</view>
			<view class="age">出生年月</view>
			<view class="operation">操作</view>
		</view>
		<view class="box" v-for="(item, index) in dataList" :key="item._id">
			<view class="id">{{index + 1}}</view>
			<view class="name">{{item.name}}</view>
			<view class="sex">{{sexFnMethods(item.sex)}}</view>
			<view class="age">{{item.birth}}</view>
			<view class="operation">
				<view class="operationa" v-on:click="open(item)">展开</view>
				<view class="operationb" v-on:click="del(item._id)">删除</view>
			</view>
		</view>
		<view class="bac" v-show="flag">
			<view class="detailBox" v-if="type == '1'">
				<view class="close" v-on:click="close()">&times;</view>
				<view class="info"><view>序号:</view> {{detailObj._id}}</view>
				<view class="info"><view>姓名:</view> {{detailObj.name}}</view>
				<view class="info"><view>性别:</view> {{detailObj.sex}}</view>
				<view class="info"><view>出生年月:</view> {{detailObj.birth}}</view>
				<view class="info"><view>幼儿身份证号:</view> {{detailObj.childCardNum}}</view>
				<view class="info"><view>父亲姓名及电话:</view> {{detailObj.fatherAndTel}}</view>
				<view class="info"><view>父亲身份证号:</view> {{detailObj.fatherCardNum}}</view>
				<view class="info"><view>母亲姓名及电话:</view> {{detailObj.matherAndTel}}</view>
				<view class="info"><view>父亲身份证号:</view> {{detailObj.matherCardNum}}</view>
				<view class="info"><view>家庭住址:</view> {{detailObj.address}}</view>
			</view>
			<view class="detailBox" v-else>
				<view class="close" v-on:click="close()">&times;</view>
				<view class="info"><view>序号:</view> {{detailObj._id}}</view>
				<view class="info"><view>姓名:</view> {{detailObj.name}}</view>
				<view class="info"><view>性别:</view> {{detailObj.sex}}</view>
				<view class="info"><view>出生年月: </view>{{detailObj.birth}}</view>
				<view class="info"><view>户籍所在地:</view> {{detailObj.household}}</view>
				<view class="info"><view>身份证号码:</view> {{detailObj.childCardNum}}</view>
				<view class="info"><view>实际居住地:</view> {{detailObj.houseActual}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { sexFn, getQueryVariable } from "@/common/utils/tool.js";
	const todo = uniCloud.importObject('todo');
	export default {
		data() {
			return {
				dataList: [],
				type: 1,
				detailObj: {},
				flag: false
			}
		},
		onLoad: function (option) {
			this.type = option.id;
			this.getList(option.id);
		},
		methods: {
			async del(id){
				try {
					await todo.del(this.id, id).then(res=>{
						this.getList(this.id);
					})
					uni.showToast({
						title: '查询成功'
					})
				} catch (e) {
					uni.showModal({
						title: '查询失败',
						content: e.errMsg,
						showCancel: false
					})
				}
			},
			sexFnMethods(num){
				const txt = sexFn(num);
				return txt;
			},
			async getList(type){
				try {
					// const result = await todo.get();
					await todo.get(type).then(res=>{
						console.log("客户端====》", res);
						this.dataList = res.data || [];
					})
					uni.showToast({
						title: '查询成功'
					})
				} catch (e) {
					uni.showModal({
						title: '查询失败',
						content: e.errMsg,
						showCancel: false
					})
				}
			},
			open(item){
				this.flag = true;
				this.detailObj = item || {};
			},
			close(){
				this.flag = false;
				this.detailObj = {};
			}
		}
	}
</script>

<style>
	.container {
		padding: 0 20px;
		font-size: 14px;
		line-height: 24px;
		    padding-top: 20px;
	}
	.box{
		display: flex;
		border-bottom: 1rpx dashed;
		    padding: 5px 0;
			position: relative;
	}
	.id{
		width: 80rpx;
		padding-left: 10px;
	}
	.name{
		width: 150rpx;
	}
	.sex{
		width: 80rpx;
	}
	.age{
		width: 220rpx;
	}
	.tabHeader{
		    background: #5170c5;
		    padding: 4px 0;
		    width: 100%;
		    display: flex;
		    margin-top: 10px;
	}
	.operation{
		display: flex;
	}
	.operationa{
		    text-decoration: underline;
	}
	.operationb{
		    text-decoration: underline;
		margin-left: 10px;
	}
	.bac{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
	}
	.detailBox{
		    width: 82%;
		    height: 72%;
		    position: relative;
		    top: 5%;
		    left: 5%;
		    background-color: #fff;
		    border-radius: 5px;
		    color: #000;
		    padding: 4%;
			padding-top: 100rpx;
	}
	.info{
		display: flex;
		margin-bottom: 4px;
	}
	.info view{
		color: #666;
		margin-right: 10px;
		width: 190rpx;
	}
	.close{
		    font-size: 30px;
		    position: absolute;
		    left: 90%;
		    top: 10px;
		    color: #000;
	}
</style>
