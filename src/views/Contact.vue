<script>
import feather from 'feather-icons';
import Button from '@/components/reusable/Button.vue';

export default {
	components: {
		Button
	},
	data: () => {
		return {
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {
		sendWebhook(){
			fetch('https://discord.com/api/webhooks/799410971654750218/CA6sEBlvx02Q2umXnNXd1OlwJEPRt_ra1WEp5H8JP1IJ6rapFOn1u0sr4rMGoE2zmW8V',{method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({embeds: [{color: 11730954, title: this.senderSubject, timestamp: new Date(), fields: [{"name": "Name", "value": this.senderName, "inline": true}, {"name": "Email", "value": `[${this.senderEmail}](mailto:${this.senderEmail})`, "inline": true},{"name": "Message","value": this.senderMessage}]}]})})
			this.$router.push({ path: '/' })
		}
	},
};
</script>

<template>
	<div class="grid place-items-center">
		<div class="leading-loose w-4/5	 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">Contact Form</p>
			<form @submit.prevent="sendWebhook" class="font-general-regular space-y-7">
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="name"
						>Full Name</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="name"
						name="name"
						type="text"
						required=""
						placeholder="Your Name"
						aria-label="Name"
						v-model="senderName"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="email"
						>Email</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="email"
						name="email"
						type="email"
						required=""
						placeholder="Your Email"
						aria-label="Email"
						v-model="senderEmail"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>Subject</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="subject"
						name="subject"
						type="text"
						required=""
						placeholder="Subject"
						aria-label="Subject"
						v-model="senderSubject"
					/>
				</div>

				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="message"
						>Message</label
					>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="message"
						name="message"
						cols="14"
						rows="6"
						required=""
						aria-label="Message"
						v-model="senderMessage"
					></textarea>
				</div>

				<div>
					<Button
						title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>
				</div>
			</form>
		</div>
	</div>
</template>
