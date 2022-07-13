<template>
	<view class="container">
		<view class="intro">请选择以下模板进行填写</view>
		<view class="box">
			<view class="scroll-view-item" v-for="item in templateList" :key="item.id" v-on:click="jump(item.id)">
				<view class="info">{{item.tempName}}</view>
				<view class="add">+</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				templateList:[
					{
						id: 1,
						tempName: "小太阳金港幼儿园花名册"
					},
					{
						id: 2,
						tempName: "重庆南岸小太阳金港 幼儿园（普惠性幼儿园）重庆户籍幼儿花名册"
					}
				]
			}
		},
		methods: {
			jump(id){
				uni.navigateTo({
					url: `../edit/edit?id=${id}`
				});
			}
		}
	}
</script>

<style>
	.container {
		padding: 0 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.name{
		text-align: center;
		font-size: 16px;
		font-weight: bold;
	}
	.txt{
		text-align: center;
		color: #ccc6c6;
	}
	.intro{
		margin-top: 10px;
	}
	.scroll-view-item{
		padding: 10px;
		border:1px solid #e5e6ea;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.info{
	}
	.add {
		font-size: 50px;
		color: #fff;
	}
</style>
