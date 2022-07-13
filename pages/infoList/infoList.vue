<template>
	<view class="container">
		<view class="box">
			<view class="scroll-view-item" v-for="item in templateList" :key="item.id" v-on:click="jump(item.id)">
				<view class="info">{{item.tempName}}</view>
				<view class="add">查询</view>
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
					url: './infoDetail?id=' + id
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
	.scroll-view-item{
		padding: 10px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		    background: #204198;
	}
	.info{
	}
	.add {
		    font-size: 14px;
		    color: #6db6ea;
			min-width: 100rpx;
			text-align: center;
			cursor: pointer;
	}
</style>
