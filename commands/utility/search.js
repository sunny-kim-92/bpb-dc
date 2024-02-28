const { SlashCommandBuilder } = require('discord.js');
const Fuse = require('fuse.js')
const { items } = require("../../db/constants.js")

//Initialize search object
const searchOptions = {
	includeScore: true,
	keys: ['display_name']
}

const fuse = new Fuse(items, searchOptions)

async function lookup(body) {
	let result = 'No item found.'

	const searchObject = await fuse.search(body, { limit: 1 })
	if (searchObject.length) {
		const item = searchObject[0].item
		if (item.damage) {
			result = item.display_name + ' | Damage: ' + item.damage + ' | Stamina: ' + item.stamina + ' | Accuracy: ' + item.accuracy + ' | Cooldown: ' + item.cooldown + ' | ' + item.description
		} else {
			result = item.display_name + ' | ' + item.description
		}
		if (item.recipe) {
			result = result + ' | Recipe: ' + item.recipe
		}
		if (item.cost) {
			result = result + ' | Cost: ' + item.cost
		}
	}
	return result
}

function getSuggestions(body) {
	const searchObject = fuse.search(body, { limit: 8 })
	return searchObject.map((result) => {
		const item = result.item
		return { name: item.display_name, value: item.display_name }
	})
}

const data = new SlashCommandBuilder()
	.setName('search')
	.setDescription('Search any Backpack Battles item')
	.addStringOption(option =>
		option.setName('item')
			.setDescription('Name of item')
			.setAutocomplete(true)
	)

module.exports = {
	data: data,
	async execute(interaction) {
		const text = interaction.options.getString('item')
		const result = await lookup(text)
		await interaction.reply(result);
	},
	async autocomplete(interaction) {
		const text = interaction.options.getFocused();
		const result = getSuggestions(text)
		await interaction.respond(result);
	},
};