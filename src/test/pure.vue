<template>
	<div class="page nav-bar pure-g">
		<div class="pure-u-1 pure-u-md-1-3">
			<div class="pure-menu">
				<a href="" class="pure-menu-link pure-menu-heading logo">Tripio</a>
			</div>
		</div>	
		<div class="pure-u-1 pure-u-md-2-3">
			<div class="pure-menu pure-menu-horizontal menu-list">
				<ul class="pure-menu-list">
					<li class="pure-menu-item menu-item" v-for="(item, index) in navData">
						<a href="" class="pure-menu-link">{{item}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="search-content">
			<div class=""></div>
		</div>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				navData: ['Eth', 'List Your Property', 'Help', 'Sign Up', 'Log in']
			}
		}
	}
</script>
<style lang="scss">
	.nav-bar {
		.menu-list {
			text-align: right;
		}
	}
</style>