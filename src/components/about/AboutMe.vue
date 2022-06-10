<script>
export default {
	
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio: `Hey there! My name is Zac (numselli) I am a ${new Date().getFullYear() - 2004} year old fullstack developer. My primary languages are JS, HTML/CSS, with experience in Java and C#. I'm experienced with technologies such as Node.js and APIs for databases such as PostgreSQL. When I am not at the computer I am out taking phtotos photography, mountain biking, hiking, or rockcliming.`,
				}
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
