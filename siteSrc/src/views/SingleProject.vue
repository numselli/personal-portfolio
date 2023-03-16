<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';

import projects from '../data/projects'

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
	},
	data: (routes) => {
		const project = projects.filter(thisProject=> thisProject.title.toLocaleLowerCase().replace(/ /g, '-') === routes.$route.params.project)[0]

		return {
			singleProjectHeader: {
				singleProjectTitle: project.title,
				singleProjectDate: new Date(project.extededDescription.date).toLocaleDateString(),
				singleProjectTag: project.category,
			},
			projectImages: project.extededDescription.images,
			projectInfo: {
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: project.extededDescription.tools
					},
				],
				projectDetailsHeading: 'About',
				projectDetails:  project.extededDescription.description,
				socialSharingsHeading: 'Links',
				socialSharings: project.extededDescription.links
			}
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />
	</div>
</template>

<style scoped></style>
