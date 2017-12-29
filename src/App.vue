<template>
	<div class="g-body">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
* {
	padding: 0;
	margin: 0;
}
html, body {
	width: 100%;
}
body {
	min-width: 320px;
	max-width: 640px;
	margin: 0 auto;
	font-size: 14px;
}
.g-body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #666;
}
</style>
