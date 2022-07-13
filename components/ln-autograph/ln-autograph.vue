<template>
	<view class="body" @touchmove.stop.prevent="moveHandle" v-if="showAutograph">
		<view class="mask" @click="close()"></view>
		<view class="content">
			<canvas class="mycanvas" canvas-id="mycanvas" @touchstart="touchstart" @touchmove="touchmove"
				@touchend="touchend"></canvas>
			<view class="content_btn">
				<button size="mini" type="primary" @click="clear">清空</button>
				<button size="mini" type="primary" @click="upload">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	let x = 20;
	let y = 20;
	export default {
		props: {
			action: {
				type: String,
				default: ''
			},
			headers: {
				type: Object,
				default: () => {
					return {};
				}
			}
		},
		data() {
			return {
				picture: '',
				points: [],
				showAutograph: false
			}
		},
		onShow() {
			setTimeout(() => {
				plus.screen.lockOrientation('landscape-primary');
			}, 500)
		},
		onUnload() {
			plus.screen.lockOrientation("portrait-primary");
		},
		created() {
			this.picture = uni.createCanvasContext("mycanvas", this);
			this.picture.lineWidth = 4;
			this.picture.lineCap = "round"
			this.picture.lineJoin = "round"
		},
		methods: {
			show() {
				this.showAutograph = true;
			},
			close() {
				this.showAutograph = false;
			},
			moveHandle() {
				return true;
			},
			touchstart(e) {
				let startX = e.changedTouches[0].x;
				let startY = e.changedTouches[0].y;
				let startPoint = {
					X: startX,
					Y: startY
				};
				this.points.push(startPoint);
				this.picture.beginPath();
			},
			touchmove(e) {
				let moveX = e.changedTouches[0].x;
				let moveY = e.changedTouches[0].y;
				let movePoint = {
					X: moveX,
					Y: moveY
				};
				this.points.push(movePoint);
				let len = this.points.length;
				if (len >= 2) {
					this.draw();
				}

			},
			touchend() {
				this.points = [];
			},
			draw() {
				let point1 = this.points[0]
				let point2 = this.points[1]
				this.points.shift()
				this.picture.moveTo(point1.X, point1.Y)
				this.picture.lineTo(point2.X, point2.Y)
				this.picture.stroke()
				this.picture.draw(true)
			},
			clear() {
				let that = this;
				uni.getSystemInfo({
					success: (res) => {
						let canvasw = res.windowWidth;
						let canvash = res.windowHeight;
						that.picture.clearRect(0, 0, canvasw, canvash);
						that.picture.draw(true);
					},
				})
			},
			upload() {
				uni.canvasToTempFilePath({
					canvasId: 'mycanvas',
					success: (res) => {
						let path = res.tempFilePath;
						uni.uploadFile({
							url: this.$props.action,
							filePath: path,
							name: "file",
							header: this.$props.headers,
							complete: res => {
								this.$emit('success', res)
							}
						});
					}
				})
			},
		},
	}
</script>

<style scoped lang="less">
	.body {
		position: fixed;
		width: 750rpx;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		z-index: 99;

		.mask {
			width: 750rpx;
			height: 100vh;
			background-color: rgba(0, 0, 0, .5);
			position: absolute;
			left: 0;
			top: 0;
		}

		.content {
			width: 650rpx;
			height: 750rpx;
			background-color: white;
			border-radius: 12rpx;
			display: flex;
			flex-direction: column;
			z-index: 1;

			.mycanvas {
				width: 650rpx;
				flex: 1;
				background-color: rgba(0, 0, 0, .1);
				border-bottom: 1rpx solid rgba(0, 0, 0, .3);
			}

			.content_btn {
				width: 650rpx;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
			}
		}
	}
</style>
