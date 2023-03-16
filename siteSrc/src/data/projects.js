const projects = [
	{
		id: 1,
		title: 'Counting',
		category: 'Discord Bot',
		img: require('@/assets/images/projects/counting/icon.png'),
		extededDescription:{
			date: 1579314555000,
			description: [
				{
					id: 1,
					details: "Counting was originally made as a clone of the most popular counting bot, counting#5250 made by Duck and tt2468. I was cloning counting#5250 because It was (and still is) missing the levels of customization options that I wanted and I thought I could make a better version of it. Counting originally launched on January 17th, 2020 for a few friends and was not taken to seriously, on Jun 27, 2020 the original bot was deleted and re-launched on June 27th, 2020, the relaunched version I took seriously. I started working on unique features that users asked for, taking the project from a clone to its own unique product.",
				},
				{
					id: 2,
					details: "Counting was a big project because when I started I did not have a lot experience with the programs that were required. As time went on and I made improvements, I ended up learning a ton. I learnt all about databases, optimized code, front end development, core programming concepts, server clustering, and the list goes on. Almost everything I know about code development has been learnt because of this bot in some way.",
				},
				{
					id: 3,
					details: "Since launching it the bot has grown to 10,720 guilds (discord servers) and 135,430 users as of January 3rd 2023. When I took up this project I did not think it would turn out to be anything special, three years later I am still amazed at the stats every time I look at them.",
				}
			],
			status: "Active",
			images: [
				{
					id: 1,
					title: 'Icon',
					img: require('@/assets/images/projects/counting/icon.png'),
				},
				{
					id: 2,
					title: 'Slightly more advanced usage',
					img: require('@/assets/images/projects/counting/slightlyMoreAdvancedUsage.png'),
				},
				{
					id: 3,
					title: 'Basic usage',
					img: require('@/assets/images/projects/counting/basicUsage.png'),
				}
			],
			tools: [
				"Node.js",
				"JavaScript",
				"Oceanic-fleet",
				"Oceanic",
				"PostgreSQL",
				"Vue.js",
				"Docker",
				"Proxmox"
			],
			links: [
				{
					id: 1,
					name: 'Website',
					icon: 'external-link',
					url: 'https://counting.numselli.xyz',
				},
				{
					id: 2,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/counting-bot',
				},
				{
					id: 3,
					name: 'Invite',
					icon: 'user-plus',
					url: 'https://counting.numselli.xyz/invite',
				}

				
			]
		}
	},
	{
		id: 2,
		title: 'Kohana',
		category: 'Discord Bot',
		img: require('@/assets/images/projects/kohana/icon.png'),
		extededDescription:{
			date: 1613510955000,
			description: [
				{
					id: 1,
					details: "An anime themed multipurpose Discord bot.",
				}
			],
			status: "Completed",
			images: [
			],
			tools: [
				"Node.js",
				"JavaScript",
				"Eris",
				"PostgreSQL"
			],
			links: [
				{
					id: 1,
					name: 'GitHub repo',
					icon: 'github',
					url: 'https://github.com/numselli/Kohana',
				},
				{
					id: 2,
					name: 'Invite',
					icon: 'user-plus',
					url: 'https://discord.com/oauth2/authorize?client_id=763088956454994000&scope=applications.commands',
				}
			]
		}
	},
	{
		id: 3,
		title: 'Reddit GIF fix',
		category: 'Discord Bot',
		img: require('@/assets/images/projects/redditGIFfix/icon.png'),
		extededDescription:{
			date: 1649282824000,
			description: [
				{
					id: 1,
					details: "A Discord bot to properly embed Reddit GIFs.",
				}
			],
			status: "Completed",
			images: [
			],
			tools: [
				"Node.js",
				"JavaScript",
				"Eris"
			],
			links: [
				{
					id: 1,
					name: 'GitHub repo',
					icon: 'github',
					url: 'https://github.com/numselli/redditGifFix',
				},
				{
					id: 2,
					name: 'Invite',
					icon: 'user-plus',
					url: 'https://discord.com/oauth2/authorize?client_id=961376176541138944&permissions=83968&scope=bot',
				}
			]
		}
	},
	{
		id: 4,
		title: 'loading',
		category: 'Video Game',
		img: require('@/assets/images/projects/loading/icon.png'),
		extededDescription:{
			date: 1564691355000,
			description: [
				{
					id: 1,
					details: "Will the game ever load? We may never know. While you wait to find out enjoy this simple yet fun game about a loading bar.",
				}
			],
			status: "Completed",
			images: [
				{
					id: 1,
					title: 'Main page of game',
					img: require('@/assets/images/projects/loading/mainApp.png'),
				},
				{
					id: 2,
					title: 'Settings menu',
					img: require('@/assets/images/projects/loading/appSettings.png'),
				}
			],
			tools: [
				"Unity",
				"C#"
			],
			links: [
				{
					id: 1,
					name: 'GitHub repo',
					icon: 'github',
					url: 'https://github.com/numselli/loading-game',
				},
				{
					id: 2,
					name: 'Play',
					icon: 'external-link',
					url: 'https://loading.numselli.xyz/',
				},
				{
					id: 3,
					name: 'Play',
					icon: 'shopping-bag',
					url: 'https://apps.microsoft.com/store/detail/infinite-loading/9NRV20M1SGRR',
				}
			]
		}
	},
	{
		id: 5,
		title: 'Platformer',
		category: 'Video Game',
		img: require('@/assets/images/projects/platformer/icon.png'),
		extededDescription:{
			date: 1441916955000,
			description: [
				{
					id: 1,
					details: "This mario like game with randomly generated levels was made for a Under the GUI Unity class.",
				}
			],
			status: "Completed",
			images: [
				{
					id: 1,
					title: 'Level 0 not possable',
					img: require('@/assets/images/projects/platformer/level0NotPossable.png'),
				},
				{
					id: 2,
					title: 'level 0 close to win',
					img: require('@/assets/images/projects/platformer/level0CloseToWin.png'),
				},
				{
					id: 3,
					title: 'Level 0 win',
					img: require('@/assets/images/projects/platformer/level0Win.png'),
				}
			],
			tools: [
				"Unity",
				"C#"
			],
			links: [
				{
					id: 1,
					name: 'GitHub repo',
					icon: 'github',
					url: 'https://github.com/numselli/platformer-game',
				},
				{
					id: 2,
					name: 'Play',
					icon: 'external-link',
					url: 'https://platformer.numselli.xyz/',
				}
			]
		}
	},
	{
		id: 6,
		title: 'Meme Shooter',
		category: 'Video Game',
		img: require('@/assets/images/projects/memeShooter/icon.png'),
		extededDescription:{
			date: 1442422986000,
			description: [
				{
					id: 1,
					details: "An alien shooter style game based around memes. This game was made for a Under the GUI Unity class.",
				}
			],
			status: "Canceled",
			images: [
			],
			tools: [
				"Unity",
				"C#"
			],
			links: [
				{
					id: 1,
					name: 'GitHub repo',
					icon: 'github',
					url: 'https://github.com/numselli/meme-shooter-game',
				},
				{
					id: 2,
					name: 'Play',
					icon: 'external-link',
					url: 'https://meme-shooter.numselli.xyz/',
				}
			]
		}
	},
	{
		id: 7,
		title: 'XD Hacks',
		category: 'Web Application',
		img: require('@/assets/images/projects/xdhacks/icon.png'),
		extededDescription:{
			date: 1617746824000,
			description: [
				{
					id: 1,
					details: "XdHacks Mini is a global high-school Hackathon organization dedicated towards hosting high-school Hackathons to inspire more youth to be engaged with the field of STEAM. Our events are where individuals come together and use technology to transform their ideas into reality in an attempt to create a feasible solution towards solving a relevant, real-world problem.",
				},
				{
					id: 2, 
					details: "Climate Code 2021 is a virtual Hackathon that encourages high-school students from around the world to try and develop prototypes that will help the Environment. Within the span of 36 hours, teams will work together to develop digital ideas aimed towards helping confront environmental challenges that societies encounter today. "
				}
			],
			status: "Completed",
			images: [
				{
					id: 1,
					title: 'Image of landing page',
					img: require('@/assets/images/projects/xdhacks/landingPage.png'),
				},
				{
					id: 2,
					title: 'Image of end page',
					img: require('@/assets/images/projects/xdhacks/endPage.png'),
				}
			],
			tools: [
				'HTML',
				'CSS',
				'JavaScript',
				'Cloudflare pages'
			],
			links: [
				{
					id: 1,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/numselli/XdHacks',
				},
				{
					id: 2,
					name: 'Website',
					icon: 'external-link',
					url: 'https://xdhacks.numselli.xyz/Climate%20Code%202021/Hackathon/',
				}
			]
		}
	},
	{
		id: 8,
		title: 'Discord Chainmail',
		category: 'Web Application',
		img: require('@/assets/images/projects/chainmail/icon.png'),
		extededDescription:{
			date: 1647916824000,
			description: [
				{
					id: 1,
					details: "Discord Chainmail is meant to inform people about fake chain messages on the chat platform Discord. This website was inspired by seeing one of these chain messages and being so frustrated that people believe them. Instead of addressing these messages individually, I decided to create this site to address them all at once. This site primarily focuses on examples from the Discord platform but lots of the points made can apply to other platforms.",
				}
			],
			status: "Completed",
			images: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/projects/chainmail/startOfPage.png'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/projects/chainmail/endOfPage.png'),
				}
			],
			tools: [
				"HTML",
				"CSS",
				"JavaScript",
				"Cloudflare pages"
			],
			links: [
				{
					id: 1,
					name: 'GitHub',
					icon: 'twitter',
					url: 'https://github.com/numselli/discord-chainmail',
				},
				{
					id: 2,
					name: 'Website',
					icon: 'instagram',
					url: 'https://discord-chainmail.numselli.xyz/',
				}
			]
		}
	}
];

export default projects;