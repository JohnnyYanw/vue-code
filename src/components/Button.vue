<!-- 获取验证码按钮 -->
<template>
	<div class="btn-wrap">
		<button :class="['get-code', {'disable-click': disabled}]" @click="run">{{tipText}}</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tipText: '获取验证码',
				time: 60,
				disabled: false,
			}
		},
		methods: {
			run() {
				if(!this.disabled) {
					this.setDisabled(true);
					this.start();
				} else {
					return false;
				}
			},
			start() {
				this.timer();
			},
			// 设置disable的值
			setDisabled(val) {
				this.disabled = val;
			},
			timer() {
				if(this.time > 0) {
					this.tipText = this.time + 's后重新获取';
					this.time--;
					setTimeout(this.timer, 1000);
				} else {
					this.setDisabled(false);
					this.time = 60;
					this.tipText = '重新获取';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn-wrap {
		padding-top: 30px;
		text-align: center;
	}
	.get-code {
		-webkit-appearance: none;
		border: none;
		outline: none;
		font-size: 18px;
		padding: 5px 10px;
		border-radius: 5px;
		background-color: #009efc;
		color: #FFF;
		cursor: pointer;
		&.disable-click {
			cursor: not-allowed;
			background-color: #B4B4B4;
		}
	}
</style>