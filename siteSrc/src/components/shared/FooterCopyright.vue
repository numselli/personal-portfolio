<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}
			Developed by
			<a
				href="https://numselli.xyz"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>numselli</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
