<template>
	<view class="container">
		<view class="name">{{yonghuwx.nickName || "用户"}}，你好</view>
		<view class="txt">欢迎使用信息录入软件</view>
		<view class="btn" v-on:click="jump()">去选择表格吧</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yonghuwx: {},
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
		onLoad() {
			let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes.authResult);
						// 获取用户信息				
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickName);					
								that.yonghuwx = infoRes.userInfo
								console.log(that.yonghuwx)
						}
					});
				}
			});
		},
		methods: {
			jump(){
				uni.switchTab({
					url: "../tempList/tempList",
				});
			}
		}
	}
</script>

<style>
	.btn{
		    width: 55px;
		    height: 55px;
		    border-radius: 50%;
		    background-color: #fff;
		    text-align: center;
		    color: #3c57a0;
		    padding: 25px;
		    margin: 0 auto;
		    margin-top: 100px;
		    font-weight: bold;
	}
	.container {
		padding: 0 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.name{
		text-align: center;
		font-size: 16px;
		font-weight: bold;
		padding-top: 100px;
		color: #fff;
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
