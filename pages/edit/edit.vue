<template>
	<view class="container">
		<view class="intro" v-if="type == 1">
			<view class="titleName">小太阳金港幼儿园花名册a</view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">幼儿姓名</view>
					<input class="uni-input" name="name" placeholder="请输入幼儿姓名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">性别</view>
					<radio-group name="sex">
						<label>
							<radio value="男" /><text>男</text>
						</label>
						<label class="label2">
							<radio value="女" /><text>女</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">出生日期</view>
					<input class="uni-input" name="birth" placeholder="请输入出生日期" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">幼儿身份证号</view>
					<input class="uni-input" name="childCardNum" placeholder="请输入幼儿身份证号" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">父亲姓名及电话</view>
					<input class="uni-input" name="fatherAndTel" placeholder="请输入父亲姓名及电话" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">父亲身份证号</view>
					<input class="uni-input" name="fatherCardNum" placeholder="请输入父亲身份证号" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">母亲姓名及电话</view>
					<input class="uni-input" name="matherAndTel" placeholder="请输入母亲姓名及电话" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">母亲身份证号</view>
					<input class="uni-input" name="matherCardNum" placeholder="请输入母亲身份证号" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">家庭住址</view>
					<input class="uni-input" name="address" placeholder="请输入家庭住址" />
				</view>
				<view class="uni-btn-v">
					<button size="mini" form-type="submit">提 交</button>
					<button size="mini" type="default" form-type="reset">重 置</button>
				</view>
			</form>
			
		</view>
		<view class="intro" v-else>
			<view class="titleName">重庆南岸小太阳金港 幼儿园（普惠性幼儿园）重庆户籍幼儿花名册</view>
			<form @submit="formSubmit">
				<view class="uni-form-item uni-column">
					<view class="title">幼儿姓名</view>
					<input class="uni-input" name="name" placeholder="请输入幼儿姓名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">性别</view>
					<radio-group name="sex">
						<label>
							<radio value="男" /><text>男</text>
						</label>
						<label class="label2">
							<radio value="女" /><text>女</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">出生日期</view>
					<uni-datetime-picker
						type="date"
						:value="birth"
						:name="birth"
						start=""
						end=""
						@change="changeDate"
					/>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">户籍所在地(详细地址)</view>
					<input class="uni-input" name="household" placeholder="请输入户籍所在地(详细地址)" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">身份证号码</view>
					<input class="uni-input" name="childCardNum" placeholder="请输入身份证号码" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">实际居住地</view>
					<input class="uni-input" name="houseActual" placeholder="请输入实际居住地" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">照片</view>
					<view class="img">+</view>
				</view>
				
				<view class="uni-btn-v">
					<button size="mini" form-type="submit">提 交</button>
					<button size="mini" type="default" form-type="reset">重 置</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1, // 区分不同表单
				birth: null
			}
		},
		onLoad: function (option) {
			this.type = option.id;
		},
		methods: {
			changeDate: function(date){
				this.birth = date;
			},
			formSubmit: async function(e) {
				const params = e.detail.value || {};
				params.birth = this.birth;
				const todo = uniCloud.importObject('todo');
				await todo.add(this.type, params);
			}
		}
	}
</script>

<style>
	.uni-btn-v{
		margin-top: 20px;
	}
	.container {
		padding: 0 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.titleName{
		text-align: center;
		font-size: 22px;
		font-weight: bold;
		padding: 10px 0;
	}
	.uni-input{
		    background: #2a4388;
		    padding: 7px 5px;
	}
	.title{
		padding: 5px 7px;
		width: 220rpx;
	}
	.uni-column{
		display: flex;
		    padding: 6px 0;
	}
	>>> .uni-forms-item__label{
		width: 200rpx !important
	}
	>>> .uni-forms-item__label .label-text{
		color: #000;
	}
	.uni-btn-v{
		text-align: center;
	}
	.uni-btn-v button:last-child{
		margin-left: 10px;
	}
	>>> .uni-error-message{
		    padding-left: 120px !important
	}
	input{
		color: #fff;
	}
	uni-text{
		padding: 6px;
		position: relative;
		top: 2px;
	}
	.label2{
		margin-left: 10px;
	}
	>>> .uni-date-x--border{
		border: none !important;
		    border-radius: 0 !important;
	}
	>>> .uni-date-x{
		background: #2a4388 !important;
		    border-radius: 0 !important;
	}
	>>> .uni-date{
		width: 49.5%;
	}
	>>> .uni-input-input{
		color: #fff;
	}
	.img{
		width: 100rpx;
		height: 100rpx;
		background-color: #2a4388;
	}
</style>
