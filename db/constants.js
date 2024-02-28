module.exports = {
    items: [
        {
            name: 'acorn_collar',
            display_name: 'Acorn Collar',
            description: 'Star items gain 5% critical hit chance per luck',
            rarity: 3,
            type: 1,
            subtype: 3,
            cost: 6,
            class: [1],
            id: 1
        },
        {
            name: 'bag_of_stones',
            display_name: 'Bag of Stones',
            description: 'Star stones above can be thrown repeatedly',
            rarity: 2,
            type: 1,
            subtype: null,
            cost: 3,
            class: [1, 2],
            id: 2
        },
        {
            name: 'blood_amulet',
            display_name: 'Blood Amulet',
            description: 'Start of battle: Gain 2 Vampirism and 20 maximum health',
            rarity: 4,
            type: 1,
            subtype: 5,
            cost: 9,
            class: [1, 2],
            id: 3
        },
        {
            name: 'glowing_crown',
            display_name: 'Glowing Crown',
            description: 'Every 2.5s: Cleanse 1 Blind and heal for 5. Use 10 mana: Become invulnerable for 2s (once)',
            rarity: 5,
            type: 1,
            subtype: 2,
            cost: 12,
            class: [1, 2],
            id: 4
        },
        {
            name: 'box_of_riches',
            display_name: 'Box of Riches',
            description: 'Shop entered: Generate a low-quality gemstone. Gemstones are offered in the shop',
            rarity: 2,
            type: 1,
            subtype: null,
            cost: 5,
            class: [1, 2],
            id: 5
        },
        {
            description: 'Increases the rarity of 1 item in the shop every time it refreshes',
            name: 'customer_card',
            display_name: 'Customer Card',
            rarity: 2,
            type: 1,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 6
        },
        {
            description: 'Playing cards are offered in the shop. Start of battle: Gain 2 Luck. After 1s: reveal the star Playing card',
            name: 'deck_of_cards',
            display_name: 'Deck of Cards',
            rarity: 2,
            type: 1,
            subtype: null,
            cost: 3,
            class: [2],
            id: 7
        },
        {
            description: 'Every 2s: Gain 1 Luck, 1 Spikes, or 1 Mana, depending on what you have the least of. Use 7 Block, 7 Luck, 7 Spikes, 7 Mana, and 27 Health: Give the star Weapon +27 damage',
            name: 'djinn_lamp',
            display_name: 'Djinn Lamp',
            rarity: 5,
            type: 1,
            subtype: null,
            cost: 11,
            class: [1, 2],
            id: 8
        },
        {
            description: 'Randomly gain 1 Empower or 3 Mana and remove 2 Mana from opponent or remove 1 stamina from opponent. Triggers 10% faster for each Star item',
            name: 'fanfare',
            display_name: 'Fanfare',
            rarity: 4,
            type: 1,
            subtype: null,
            cost: 7,
            class: [1, 2],
            id: 9
        },
        {
            description: 'Every 5s: Randomly gain 12 Block or 2 stamina or 2 Luck. Triggers 10% faster for each star item',
            name: 'flute',
            display_name: 'Flute',
            rarity: 3,
            type: 1,
            subtype: null,
            cost: 6,
            class: [1, 2],
            id: 10
        },
        {
            description: 'Start of battle: Gain 2 Regeneration',
            name: 'healing_herbs',
            display_name: 'Healing Herbs',
            rarity: 1,
            type: 1,
            subtype: 3,
            cost: 4,
            class: [1, 2],
            id: 11
        },
        {
            description: 'Start of battle: Gain 2 Luck',
            name: 'lucky_clover',
            display_name: 'Lucky Clover',
            rarity: 2,
            type: 1,
            subtype: 3,
            cost: 2,
            class: [1],
            id: 12
        },
        {
            description: 'Star item activates: 50% chance to gain 1 Mana. Use 30 Mana: Gain 12 random other buffs',
            name: 'mana_orb',
            display_name: 'Mana Orb',
            rarity: 3,
            type: 1,
            subtype: null,
            cost: 6,
            class: [1, 2],
            id: 13
        },
        {
            description: 'Shop entered: Gain 1 gold. Start of battle: Gain 2 maximum health for each star Start of Battle item',
            name: 'piggybank',
            display_name: 'Piggybank',
            rarity: 1,
            type: 1,
            subtype: null,
            cost: 3,
            class: [1, 2],
            id: 14
        },
        {
            description: 'Start of battle: Inflict 1 Blind',
            name: 'pocket_sand',
            display_name: 'Pocket Sand',
            rarity: 1,
            type: 1,
            subtype: 3,
            cost: 2,
            class: [1, 2],
            id: 15
        },
        {
            description: 'Start of battle: Gain 1 Spikes',
            name: 'walrus_tusk',
            display_name: 'Walrus Tusk',
            rarity: 1,
            type: 1,
            subtype: 3,
            cost: 4,
            class: [1, 2],
            id: 16
        },
        {
            description: 'Start of battle: Star weapons gain +1 damage',
            name: 'whetstone',
            display_name: 'Whetstone',
            rarity: 1,
            type: 1,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 17
        },
        {
            description: 'Start of battle: Gain 55 block. Gain 2 Regeneration for each star Holy item. Every 3s: Cleanse 2 Poison',
            name: 'holy_armor',
            display_name: 'Holy Armor',
            rarity: 4,
            type: 2,
            subtype: 2,
            cost: 13,
            class: [1, 2],
            id: 18
        },
        {
            description: 'Start of battle: Gain 45 Block. Resist 3 debuffs',
            name: 'leather_armor',
            display_name: 'Leather Armor',
            rarity: 2,
            type: 2,
            subtype: null,
            cost: 7,
            class: [1, 2],
            id: 19
        },
        {
            description: 'Add 2 backpack slots. Items inside trigger 10% faster',
            name: 'fanny_pack',
            display_name: 'Fanny Pack',
            rarity: 2,
            type: 3,
            subtype: null,
            cost: 3,
            class: [1, 2],
            id: 20
        },
        {
            description: 'Add 4 backpack slots',
            name: 'leather_bag',
            display_name: 'Leather Bag',
            rarity: 1,
            type: 3,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 21
        },
        {
            description: 'Add 4 backpack slots. First Potion inside consumed: Gain a random buff. 4 Potions inside consumed: Cleanse 4 debuffs',
            name: 'potion_belt',
            display_name: 'Potion Belt',
            rarity: 4,
            type: 3,
            subtype: null,
            cost: 5,
            class: [1, 2],
            id: 22
        },
        {
            description: 'Add 1 backpack slot. Start of battle: Gain 5 Block',
            name: 'protective_purse',
            display_name: 'Protective Purse',
            rarity: 5,
            type: 3,
            subtype: null,
            cost: 2,
            class: [1, 2],
            id: 23
        },
        {
            description: 'Add 3 backpack slots. Gain 1 maximum stamina',
            name: 'stamina_sack',
            display_name: 'Stamina Sack',
            rarity: 3,
            type: 3,
            subtype: null,
            cost: 5,
            class: [1, 2],
            id: 24
        },
        {
            description: 'Every 5s: Heal for 4 and regenerate 1 stamina',
            name: 'banana',
            display_name: 'Banana',
            rarity: 1,
            type: 4,
            subtype: 3,
            cost: 3,
            class: [1, 2],
            id: 25
        },
        {
            description: 'Every 3.5s: Gain 1 Mana. If you have at least 10 Mana: Gain 1 Luck instead',
            name: 'blueberries',
            display_name: 'Blueberries',
            rarity: 2,
            type: 4,
            subtype: 3,
            cost: 2,
            class: [1, 2],
            id: 26
        },
        {
            description: 'Every 3.5s: Cleanse 1 random debuff. If you have at least 5 Luck: 50% chance to gain 1 Empower',
            name: 'carrot',
            display_name: 'Carrot',
            rarity: 2,
            type: 4,
            subtype: 3,
            cost: 3,
            class: [1],
            id: 27
        },
        {
            description: 'Every 5s: Inflict 1 Poison',
            name: 'fly_agaric',
            display_name: 'Fly Agaric',
            rarity: 2,
            type: 4,
            subtype: 3,
            cost: 3,
            class: [2],
            id: 28
        },
        {
            description: 'Every 4s: Gain 3 Block. 30% chance to remove 1 Vampirism from you opponent',
            name: 'garlic',
            display_name: 'Garlic',
            rarity: 1,
            type: 4,
            subtype: 3,
            cost: 2,
            class: [1, 2],
            id: 29
        },
        {
            description: 'Every 4s: Gain 1 Spikes and heal for 3',
            name: 'pineapple',
            display_name: 'Pineapple',
            rarity: 4,
            type: 4,
            subtype: 3,
            cost: 7,
            class: [1, 2],
            id: 30
        },
        {
            damage: '6-9 (2.5/s)',
            stamina: '0 (0/s)',
            cooldown: '5s',
            accuracy: '90%',
            description: 'On hit: 50% chance to stun for 0.5s. Fatigue starts: Gain 10 Heat',
            name: 'pumpkin',
            display_name: 'Pumpkin',
            rarity: 6,
            type: 4,
            subtype: 3,
            cost: 9,
            class: [1, 2],
            id: 31,
        },
        {
            description: 'Start of battle: Star items trigger 20% faster',
            name: 'gloves_of_haste',
            display_name: 'Gloves of Haste',
            rarity: 2,
            type: 6,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 32
        },
        {
            description: 'Start of battle: Reduce damage taken by 25% for 3s. 15% chance to prevent a hit from being critical. 15% chance to prevent being stunned',
            name: 'cap_of_resilience',
            display_name: 'Cap of Resilience',
            rarity: 3,
            type: 7,
            subtype: null,
            cost: 7,
            class: [1, 2],
            id: 33
        },
        {
            damage: '8-14 (2.8/s)',
            stamina: '0.5 (0.1/s)',
            accuracy: '90%',
            cooldown: '4s',
            description: 'Star items give 100% Vampirism. Attacks 5% faster for every Vampirism',
            name: 'blood_harvester',
            display_name: 'Blood Harvester',
            rarity: 6,
            type: 8,
            subtype: 5,
            cost: 11,
            class: [1, 2],
            id: 34
        },
        {
            damage: '2-4 (1.8/s)',
            stamina: '1.2 (0.7/s)',
            accuracy: '95%',
            cooldown: '1.7s',
            description: 'Opponent misses attack: Gain +2 damage for the next attack. On hit: 35% chance to inflict 1 Blind',
            name: 'broom',
            display_name: 'Broom',
            rarity: 1,
            type: 8,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 35
        },
        {
            damage: '2-5 (1/s)',
            stamina: '0 (0/s)',
            accuracy: '95%',
            cooldown: '3.5s',
            description: 'On stun: Trigger extra attack',
            name: 'dagger',
            display_name: 'Dagger',
            rarity: 2,
            type: 8,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 36
        },
        {
            damage: '10-16 (8.1/s)',
            stamina: '1 (0.6/s)',
            accuracy: '60%',
            cooldown: '1.6s',
            description: 'On hit: Use 3 Luck to gain 3 damage. On miss: Gain 3 Luck',
            name: 'fancy_fencing_rapier',
            display_name: 'Fancy Fencing Rapier',
            rarity: 5,
            type: 8,
            subtype: null,
            cost: 12,
            class: [1, 2],
            id: 37
        },
        {
            damage: '8-12 (5/s)',
            stamina: '3 (1.5/s)',
            accuracy: '75%',
            cooldown: '2s',
            description: 'On hit: 50% chance to stun your opponent for 0.5s',
            name: 'hammer',
            display_name: 'Hammer',
            rarity: 2,
            type: 8,
            subtype: null,
            cost: 8,
            class: [1, 2],
            id: 38
        },
        {
            damage: '2-5 (2.1/s)',
            stamina: '1 (0.6/s)',
            accuracy: '90%',
            cooldown: '1.7s',
            description: 'Start of battle: Gain 1 Vampirism. On hit: Convert 1 Regeneration to 1 Vampirism. Maximum damage increased by 1 per Vampirism',
            name: 'hungry_blade',
            display_name: 'Hungry Blade',
            rarity: 3,
            type: 8,
            subtype: 5,
            cost: 7,
            class: [1, 2],
            id: 39
        },
        {
            damage: '40-50 (9/s)',
            stamina: '5 (1/s)',
            accuracy: '90%',
            cooldown: '5s',
            description: 'While you have at least 5 Empower, decrease stamina usage to 3 and cooldown to 3s',
            name: 'impractically_large_greatsword',
            display_name: 'Impractically Large Greatsowrd',
            rarity: 5,
            type: 8,
            subtype: null,
            cost: 14,
            class: [1, 2],
            id: 40
        },
        {
            damage: '5-9 (4.7/s)',
            stamina: '1.2 (0.8/s)',
            accuracy: '95%',
            cooldown: '1.5s',
            description: 'Use 3 Regeneration: Inflict 7 Blind for 5s (unstackable). Deals +1 damage for each Blind of your opponent',
            name: 'lightsaber',
            display_name: 'Lightsaber',
            rarity: 5,
            type: 8,
            subtype: 2,
            cost: 12,
            class: [1, 2],
            id: 41
        },
        {
            damage: '3-4 (1.6/s)',
            stamina: '2 (0.9/s)',
            accuracy: '85%',
            cooldown: '2.2s',
            description: 'Deals +1 damage for each Star food',
            name: 'pan',
            display_name: 'Pan',
            rarity: 1,
            type: 8,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 42
        },
        {
            damage: '8-10 (5/s)',
            stamina: '1.5 (0.8/s)',
            accuracy: '90%',
            cooldown: '1.8s',
            description: 'On hit: Remove 2 Regeneration and 2 Spikes from your opponent',
            name: 'ripsaw_blade',
            display_name: 'Ripsaw Blade',
            rarity: 5,
            type: 8,
            subtype: null,
            cost: 10,
            class: [1, 2],
            id: 43
        },
        {
            damage: '2-8 (3.3/s)',
            stamina: '1 (0.7/s)',
            accuracy: '85%',
            cooldown: '1.5s',
            description: 'On hit: Destroy 4 block for each free Star space',
            name: 'spear',
            display_name: 'Spear',
            rarity: 2,
            type: 8,
            subtype: null,
            cost: 6,
            class: [1, 2],
            id: 44
        },
        {
            damage: '4-9 (2.7/s)',
            stamina: '2.5 (1/s)',
            accuracy: '80%',
            cooldown: '2.4s',
            description: 'On hit: Gain 1 Spikes. Deals +1 damage per Spikes',
            name: 'thorn_whip',
            display_name: 'Thorn Whip',
            rarity: 3,
            type: 8,
            subtype: 3,
            cost: 8,
            class: [1, 2],
            id: 45
        },
        {
            damage: '2-4 (2.3/s)',
            stamina: '0.7 (0.5/s)',
            accuracy: '90%',
            cooldown: '1.3s',
            description: 'Star Melee Weapons deal -2 damage. Deals +4 damage for each Star Melle Weapon',
            name: 'villian_sword',
            display_name: 'Villain Sword',
            rarity: 6,
            type: 8,
            subtype: 1,
            cost: 11,
            class: [1, 2],
            id: 46
        },
        {
            damage: '1-3 (1.4/s)',
            stamina: '1 (0.7/s)',
            accuracy: '90%',
            cooldown: '1.4s',
            description: '',
            name: 'wooden_sword',
            display_name: 'Wooden Sword',
            rarity: 1,
            type: 8,
            subtype: null,
            cost: 3,
            class: [1, 2],
            id: 47
        },
        {
            description: 'Reflect 2 debuffs. Hatches after 2 rounds in your backpack',
            name: 'ruby_egg',
            display_name: 'Ruby Egg',
            rarity: 4,
            type: 9,
            subtype: null,
            cost: 10,
            class: [1, 2],
            id: 48
        },
        {
            description: 'Every 3s: Star items trigger 5% faster (up to 40%). Remove 1 Luck from your opponent',
            name: 'jynx_torquilla',
            display_name: 'Jynx Torquilla',
            rarity: 4,
            type: 9,
            subtype: 3,
            cost: 9,
            class: [1, 2],
            id: 49
        },
        {
            description: '5 Star activations: Heal for 9',
            name: 'goobert',
            display_name: 'Goobert',
            rarity: 2,
            type: 9,
            subtype: null,
            cost: 6,
            class: [1, 2],
            id: 50
        },
        {
            description: 'On reveal: Your next hit is critical. If the number of cards before is odd, gain 2 Luck and 2 spikes',
            name: 'ace_of_spades',
            display_name: 'Ace of Spades',
            rarity: 2,
            type: 10,
            subtype: null,
            cost: 4,
            class: [2],
            id: 51
        },
        {
            description: 'On reveal: For each card before, gain 3 Mana and remove 3 random buffs from your opponent',
            name: 'darkest_lotus',
            display_name: 'Darkest Lotus',
            rarity: 5,
            type: 10,
            subtype: null,
            cost: 7,
            class: [2],
            id: 52
        },
        {
            description: 'On reveal: Deal 10 + 4 damage for each card before. Gain 3 Heat',
            name: 'holo_fire_lizard',
            display_name: 'Holo Fire Lizard',
            rarity: 4,
            type: 10,
            subtype: null,
            cost: 6,
            class: [2],
            id: 53
        },
        {
            description: 'On reveal: Steal 11 life. If the number of cards before is even, gain 2 Regeneration',
            name: 'the_lovers',
            display_name: 'The Lovers',
            rarity: 1,
            type: 10,
            subtype: null,
            cost: 3,
            class: [2],
            id: 54
        },
        {
            description: 'On reveal: Gain 12 Block + 3 for each card before. Inflict 3 Cold',
            name: 'white_eyes_blue_dragon',
            display_name: 'White Eyes Blue Dragon',
            rarity: 4,
            type: 10,
            subtype: null,
            cost: 5,
            class: [2],
            id: 55
        },
        {
            description: 'Opponent drops below 50% health: Consume this and deal 0.35 damage for each debuff on your opponent',
            name: 'demonic_flask',
            display_name: 'Demonic Flask',
            rarity: 5,
            type: 11,
            subtype: null,
            cost: 8,
            class: [2],
            id: 56
        },
        {
            description: 'Health drops below 50%: Consume this and heal 11 and cleanse 4 Poison',
            name: 'health_potion',
            display_name: 'Health Potion',
            rarity: 2,
            type: 11,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 57
        },
        {
            description: 'Out of stamina: Consume this and gain 2 stamina and 1 Empower',
            name: 'heroic_potion',
            display_name: 'Heroic Potion',
            rarity: 4,
            type: 11,
            subtype: null,
            cost: 6,
            class: [1, 2],
            id: 58
        },
        {
            description: 'Opponent regenerates health: Consume this and inflict 3 Poison and 1 Poison to yourself',
            display_name: 'Pestilence Flask',
            cost: 7
        },
        {
            description: 'When you have at least 20 Block: Consume this and convert 15 health to 30 Block',
            display_name: 'Stoneskin Potion',
            cost: 6
        },
        {
            description: 'Can only be thrown once per battle. On hit: Inflict 3 Cold. Star Weapon hits: Inflict 1 Cold',
            display_name: 'Artifact Stone: Cold',
            cost: 10
        },
        {
            description: 'Star Weapon hits: Bow and Arrow gains +1 damage (up to 7)',
            display_name: 'Bow and Arrow',
            cost: 8
        },
        {
            damage: '2-4 (0.8/s)',
            stamina: '0 (0/s)',
            accuracy: '70%',
            cooldown: '4s',
            description: 'Can only be thrown once per battle. On hit: Destroy 3 Block',
            display_name: 'Stone',
            cost: 1
        },
        {
            description: 'On attacked (melee): 35% chance to prevent 12 damage and remove 0.7 stamina from opponent. Star items give 30% more Block',
            display_name: 'Shield of Valor',
            cost: 12
        },
        {
            description: 'On attacked (melee): 35% chance to prevent 4 damage and remove 0.3 stamina from opponent',
            display_name: 'Wooden Buckler',
            cost: 4
        },
        {
            description: 'Health drops below 70%: Gain 1 Luck, 1 Empower, and 8 Block (once)',
            display_name: 'Dragonskin Boots',
            cost: 6
        },
        {
            description: 'Weapon socket: On hit: 20% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 15%. Backpack: Every 8s: Cleanse a random debuff',
            display_name: 'Chipped Amethyst',
            cost: 1
        },
        {
            description: 'Weapon socket: On hit: 30% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 20%. Backpack: Every 6s: Cleanse a random debuff',
            name: 'flawed_amethyst',
            display_name: 'Flawed Amethyst',
            rarity: 2,
            type: 5,
            subtype: null,
            cost: 2,
            class: [1, 2],
            id: 69
        },
        {
            description: 'Weapon socket: On hit: 45% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 25%. Backpack: Every 5s: Cleanse a random debuff',
            name: 'regular_amethyst',
            display_name: 'Regular Amethyst',
            rarity: 3,
            type: 5,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 70
        },
        {
            description: 'Weapon socket: On hit: 65% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 30%. Backpack: Every 4s: Cleanse a random debuff',
            name: 'flawless_amethyst',
            display_name: 'Flawless Amethyst',
            rarity: 4,
            type: 5,
            subtype: null,
            cost: 8,
            class: [1, 2],
            id: 71
        },
        {
            description: 'Weapon socket: On hit: 100% chance to remove a random buff from your opponent. Armor & other sockets: Your opponents healing is reduced by 40%. Backpack: Every 2.5s: Cleanse a random debuff',
            name: 'perfect_amethyst',
            display_name: 'Perfect Amethyst',
            rarity: 5,
            type: 5,
            subtype: null,
            cost: 16,
            class: [1, 2],
            id: 72
        },
        {
            description: 'Weapon socket: 25% chance to inflict 1 Poison. Armor & other sockets: 10% chance to resist Poison. Backpack: After 6s: Gain 1 Regeneration',
            name: 'chipped_emerald',
            display_name: 'Chipped Emerald',
            rarity: 1,
            type: 5,
            subtype: null,
            cost: 1,
            class: [1, 2],
            id: 73
        },
        {
            description: 'Weapon socket: 35% chance to inflict 1 Poison. Armor & other sockets: 15% chance to resist Poison. Backpack: After 4s: Gain 1 Regeneration',
            name: 'flawed_emerald',
            display_name: 'Flawed Emerald',
            rarity: 2,
            type: 5,
            subtype: null,
            cost: 2,
            class: [1, 2],
            id: 74
        },
        {
            description: 'Weapon socket: 50% chance to inflict 1 Poison. Armor & other sockets: 20% chance to resist Poison. Backpack: After 4s: Gain 2 Regeneration',
            name: 'regular_emerald',
            display_name: 'Regular Emerald',
            rarity: 3,
            type: 5,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 75
        },
        {
            description: 'Weapon socket: 60% chance to inflict 1 Poison. Armor & other sockets: 25% chance to resist Poison. Backpack: After 4s: Gain 3 Regeneration',
            name: 'flawless_emerald',
            display_name: 'Flawless Emerald',
            rarity: 4,
            type: 5,
            subtype: null,
            cost: 8,
            class: [1, 2],
            id: 76
        },
        {
            description: 'Weapon socket: 80% chance to inflict 1 Poison. Armor & other sockets: 35% chance to resist Poison. Backpack: After 3s: Gain 4 Regeneration',
            name: 'perfect_emerald',
            display_name: 'Perfect Emerald',
            rarity: 5,
            type: 5,
            subtype: null,
            cost: 16,
            class: [1, 2],
            id: 77
        },
        {
            description: 'Weapon socket: Lifesteal 10% of damage dealt. Armor & other sockets: Increase healing by 10%. Backpack: After 5s: Steal 4 life',
            name: 'chipped_ruby',
            display_name: 'Chipped Ruby',
            rarity: 1,
            type: 5,
            subtype: null,
            cost: 1,
            class: [1, 2],
            id: 78
        },
        {
            description: 'Weapon socket: Lifesteal 15% of damage dealt. Armor & other sockets: Increase healing by 15%. Backpack: After 5s: Steal 6 life',
            name: 'flawed_ruby',
            display_name: 'Flawed Ruby',
            rarity: 2,
            type: 5,
            subtype: null,
            cost: 2,
            class: [1, 2],
            id: 79
        },
        {
            description: 'Weapon socket: Lifesteal 20% of damage dealt. Armor & other sockets: Increase healing by 20%. Backpack: After 5s: Steal 10 life',
            name: 'regular_ruby',
            display_name: 'Regular Ruby',
            rarity: 3,
            type: 5,
            subtype: null,
            cost: 4,
            class: [1, 2],
            id: 80
        },
        {
            description: 'Weapon socket: Lifesteal 25% of damage dealt. Armor & other sockets: Increase healing by 25%. Backpack: After 5s: Steal 15 life',
            display_name: 'Flawless Ruby',
            cost: 8,
            rarity: 4,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: Lifesteal 35% of damage dealt. Armor & other sockets: Increase healing by 35%. Backpack: After 5s: Steal 30 life',
            display_name: 'Perfect Ruby',
            cost: 16,
            rarity: 5,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: 20% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 2 Block. After 5s: Inflict 1 Cold',
            display_name: 'Chipped Sapphire',
            cost: 1,
            rarity: 1,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: 30% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 3 Block. After 4s: Inflict 1 Cold',
            display_name: 'Flawed Sapphire',
            cost: 2,
            rarity: 2,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: 50% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 4 Block. After 4s: Inflict 2 Cold',
            display_name: 'Regular Sapphire',
            cost: 4,
            rarity: 3,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: 70% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 5 Block. After 4s: Inflict 3 Cold',
            display_name: 'Flawless Sapphire',
            cost: 8,
            rarity: 4,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: 100% chance to attack health directly, gain 1 Mana, and inflict 1 Cold. Armor & other sockets: 5 Mana gained: Gain 7 Block. After 3s: Inflict 4 Cold',
            display_name: 'Perfect Sapphire',
            cost: 16,
            rarity: 5,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: Attacks 10% faster. Armor & other sockets: 10% chance to resist a stun. 4% chance to prevent a hit from being a crit. Backpack: Increase base stamina regeneration by 10%',
            display_name: 'Chipped Topaz',
            cost: 1,
            rarity: 1,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: Attacks 15% faster. Armor & other sockets: 15% chance to resist a stun. 6% chance to prevent a hit from being a crit. Backpack: Increase base stamina regeneration by 15%',
            display_name: 'Flawed Topaz',
            cost: 2,
            rarity: 2,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: Attacks 20% faster. Armor & other sockets: 20% chance to resist a stun. 8% chance to prevent a hit from being a crit. Backpack: Increase base stamina regeneration by 20%',
            display_name: 'Regular Topaz',
            cost: 4,
            rarity: 3,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: Attacks 25% faster. Armor & other sockets: 30% chance to resist a stun. 10% chance to prevent a hit from being a crit. Backpack: Increase base stamina regeneration by 30%',
            display_name: 'Flawless Topaz',
            cost: 8,
            rarity: 4,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            description: 'Weapon socket: Attacks 35% faster. Armor & other sockets: 35% chance to resist a stun. 15% chance to prevent a hit from being a crit. Backpack: Increase base stamina regeneration by 50%',
            display_name: 'Perfect Topaz',
            cost: 16,
            rarity: 5,
            type: 5,
            subtype: null,
            class: [1, 2],
        },
        {
            damage: '4-7 (2.3/s)',
            stamina: '1.7 (0.7/s)',
            accuracy: '95%',
            cooldown: '2.4s',
            description: 'On hit: 40% chance to inflict 1 Blind. Shop entered: Dig up a random item',
            display_name: 'Shovel',
            recipe: 'Broom + Pan',
        },
        {
            damage: '2-3 (1.8/s)',
            stamina: '1 (0.7/s)',
            accuracy: '90%',
            cooldown: '1.4s',
            description: 'On hit: 25% chance to gain 1 damage',
            display_name: 'Torch',
            recipe: 'Coal + Wooden Sword'
        },
        {
            description: 'On attacked (Melee): 35% chance to prevent 4 damage, remove 0.3 stamina from opponent, and gain 1 Spikes (up to 3)',
            display_name: 'Spiked Shield',
            recipe: 'Tusk + Wooden Buckler'
        },
        {
            description: 'Weapon socket: 12% chance to deal +6 damage and gain 1 Heat. Armor & other sockets: Start of battle: Gain 15 Block, resist 3 Cold. Backpack: After 5s: Gain 2 Heat, cleanse 3 debuffs',
            display_name: 'Burning Coal',
            recipe: 'Coal + fire source'
        },
        {
            description: "They don't do anything. But you can sell them for profit!",
            display_name: 'Bunch of Coins',
            recipe: 'Piggybank + Hammer'
        },
        {
            damage: '2-4 (2.1/s)',
            stamina: '0.7 (0.5/s)',
            accuracy: '90%',
            cooldown: '1.4s',
            description: 'Start of battle: Star weapons gain 2 damage',
            display_name: 'Hero Sword',
            recipe: 'Whetstone + Whetstone + Wooden Sword'
        },
        {
            damage: '3-6 (1.5/s)',
            stamina: '0 (0/s)',
            accuracy: '95%',
            cooldown: '3s',
            description: 'On hit: Inflict 2 Poison. On stun: Triggers extra attack',
            display_name: 'Poison Dagger',
            recipe: 'Dagger + Pestilence Flask'
        },
        {
            damage: '3-5 (2.5/s)',
            stamina: '0.5 (0.3/s)',
            accuracy: '90%',
            cooldown: '1.6s',
            description: 'Attacks 5% faster for every Spikes. After 5 hits, gain 1 Empower',
            display_name: 'Claws of Attack',
            recipe: 'Gloves of Haste + Tusk'
        },
        {
            damage: '3-5 (2.9/s)',
            stamina: '1 (0.7/s)',
            accuracy: '90%',
            cooldown: '1.4s',
            description: 'Start of battle: Gain 2 Heat. On hit: 35% chance to gain 1 damage. If you have at least 15 Heat, gain 2 damage instead',
            display_name: 'Burning Torch',
            recipe: 'Torch + fire source'
        },
        {
            damage: '5-7 (3/s)',
            stamina: '1 (0.5/s)',
            accuracy: '90%',
            cooldown: '2s',
            description: 'On attack: Use 3 Mana to deal +6 damage and increase its damage by 2 until the end of battle',
            display_name: 'Magic Staff',
            recipe: 'Broom + Mana Orb'
        },
        {
            display_name: 'Strong Health Potion',
            description: 'Health drops below 50%: Consume this and heal for 18, gain 2 Regeneration, and cleanse 4 Poison',
            recipe: 'Healing Herbs + Health Potion'
        },
        {
            display_name: 'Mana Potion',
            description: 'Mana used or health drops below 50%: Consume this and gain 4 Mana and 15 maximum health',
            recipe: 'Blueberry + Health Potion'
        },
        {
            display_name: 'Platinum Customer Card',
            description: 'Reflect 2 debuffs per Star Legendary, Godly, and Unique item. Increases chance to find Unique items by 10%. You can obtain +1 Unique item',
            recipe: 'Customer Card + Customer Card'
        },
        {
            damage: '2-5 (1.4/s)',
            stamina: '0 (0/s)',
            accuracy: '95%',
            cooldown: '2.5s',
            display_name: 'Spectral Dagger',
            description: 'On attack: Use 1 Mana to attack health directly and deal +7 damage. On stun: Triggers extra attack',
            recipe: 'Dagger + Mana Potion'
        },
        {
            damage: '5-7 (3.3/s)',
            stamina: '1 (0.6/s)',
            accuracy: '90%',
            cooldown: '1.8s',
            display_name: 'Critwood Staff',
            description: 'On attack: Use 4 Mana to deal +7 damage and for the next 1s, all your attacks are critical',
            recipe: 'Acorn Collar + Magic Staff'
        },
        {
            display_name: 'Carrot Goobert',
            description: '5 Star item activations: Cleanse 3 random debuffs and gain 2 Empower for 4s',
            recipe: 'Carrot + Carrot + Goobert'
        },
        {
            display_name: 'Steel Goobert',
            description: '5 Star item activations: Diamond Weapons gain +2 damage. Gain 16 Block',
            recipe: 'Goobert + Hero Sword'
        },
        {
            display_name: 'Lucky Piggy',
            description: 'Shop entered: Gain 1 gold. Start of battle: Gain 2 Luck. Chance-based effects of the Star item are 15% more likely to trigger',
            recipe: 'Lucky Clover + Lucky Clover + Piggybank'
        },
        {
            damage: '5-7 (3.8/s)',
            stamina: '1 (0.6/s)',
            accuracy: '90%',
            cooldown: '1.6s',
            display_name: 'Hero Longsword',
            description: 'Start of battle: Star Weapons gain 4 damage',
            recipe: 'Hero Sword + Whetstone + Whetstone'
        },
        {
            damage: '4-5 (2.1/s)',
            stamina: '1 (0.5/s)',
            accuracy: '100%',
            cooldown: '2.1s',
            display_name: 'Falcon Blade',
            description: 'Attacks twice. Start of battle: Star items trigger 30% faster',
            recipe: 'Gloves of Haste + Gloves of Haste + Hero Sword'
        },
        {
            damage: '8-9 (5.7/s)',
            stamina: '1.3 (0.9/s)',
            accuracy: '90%',
            cooldown: '1.5s',
            display_name: 'Eggscalibur',
            description: 'Deals +1 damage for each Star food. On attack: Use 12 Mana: Trigger all Star food',
            recipe: 'Heroic Potion + Pan'
        },
        {
            damage: '9-11 (5/s)',
            stamina: '0.7 (0.3/s)',
            accuracy: '90%',
            cooldown: '2s',
            display_name: 'Pandamonium',
            description: 'Star Food activates: Inflict 1 Poison',
            recipe: 'Corrupted Crystal + Pan'
        },
        {
            damage: '3-6 (3.2/s)',
            stamina: '1 (0.7/s)',
            accuracy: '200%',
            cooldown: '1.4s',
            display_name: 'Magic Torch',
            description: 'On hit: Use 1 Mana: This and Star Weapons gain 1 damage',
            recipe: 'Mana Potion + Torch'
        },
        {
            display_name: 'Strong Stone Skin Potion',
            description: 'When you have at least 45 Block: Consume this and convert 15 health to 35 Block and gain 2 Spikes for 4s',
            recipe: 'Stone + Stone + Stone Skin Potion'
        },
        {
            damage: '4-7 (1.8/s)',
            stamina: '0 (0/s)',
            accuracy: '95%',
            cooldown: '3s',
            display_name: 'Bloody Dagger',
            description: 'On hit: Gain 1 Vampirism (up to 5 per battle). Heal 4 per Star Vampiric Item. On stun: Triggers extra attack',
            recipe: 'Blood Gem + Dagger'
        },
        {
            damage: '5-7 (4.3/s)',
            stamina: '0.5 (0.4/s)',
            accuracy: '200%',
            cooldown: '1.4s',
            display_name: 'Manathirst',
            description: 'On hit: Gain 1 Mana. 20 Mana gained: Steal 10 life, increased by 1 for each Vampirism',
            recipe: 'Hungry Blade + Mana Orb'
        },
        {
            display_name: 'Strong Heroic Potion',
            description: 'Out of stamina: Consume this and regenerate 4 stamina and gain 1 Empower',
            recipe: 'Banana + Heroic Potion'
        },
        {
            display_name: 'Vampiric Armor',
            description: 'Start of battle: Convert 30 health into 60 Block and gain 2 Vampirism. Every 3s: Convert 10 health into 20 Block',
            recipe: 'Blood Gem + Leather Armor'
        },
        {
            display_name: 'Strong Pestilence Flask',
            description: 'Opponent regenerates health: Consume this and inflice 3 Poison and 1 Poison to yourself. After 6s, inflict another 3 Poison',
            recipe: 'Fly Argaric + Pestilence Flask'
        },
        {
            display_name: 'Blood Goobert',
            description: 'Start of battle: Gain 2 Vampirism. 6 item activations: Steal 10 life, increased by 1 for each Vampirism',
            recipe: 'Blood Gem + Goobert'
        },
        {
            damage: '9-12 (3.5/s)',
            stamina: '1.5 (0.5/s)',
            accuracy: '85%',
            cooldown: '3s',
            display_name: 'Tusk Piercer',
            description: 'Start of battle: Gain 2 Spikes. Star Weapon hits: Use 1 Spikes: Next attack with Tusk Piercer deals +8 damage',
            recipe: 'Bow and Arrow + Tusk'
        },
        {
            damage: '6-9 (2.5/s)',
            stamina: '1.5 (0.5/s)',
            accuracy: '85%',
            cooldown: '3s',
            display_name: "Fortuna's Grace",
            description: "Start of battle: Gain 2 Luck. Star Weapon crits: Next attack with Fortuna's Grace hits twice",
            recipe: 'Bow and Arrow + Lucky Clover + Lucky Clover'
        },
        {
            display_name: 'Vampiric Gloves',
            description: 'After 4s: Gain 5 Vampirism, Star items trigger 35% faster',
            recipe: 'Blood Gem + Gloves of Haste'
        },
        {
            damage: '6-9 (2.5/s)',
            stamina: '1.5 (0.5/s)',
            accuracy: '85%',
            cooldown: '3s',
            display_name: "Belladonna's Whisper",
            description: "Star Weapon deals 9 damage: Next attack with Belladonna's Whisper inflicts +1 Poison. Deals 0.5 damage per Poison of your opponent.",
            recipe: "Bow and Arrow + Pestilence Flask"
        },
        {
            damage: '4-8 (3.5/s)',
            stamina: '1.8 (1.1/s)',
            accuracy: '90%',
            cooldown: '1.7s',
            display_name: 'Bloodthorne',
            description: 'On hit: Convert 1 Regeneration into 1 Vampirism and 1 Spikes. Deals +1 damage for each Vampirism and Spikes',
            recipe: "Hungry Blade + Thorn Whip"
        },
        {
            display_name: 'Light Goobert',
            description: '6 item activations: Heal for 20 and inflict 6 Blind for 3s',
            recipe: 'Goobert + Lightsaber'
        },
        {
            display_name: 'Staff of Unhealing',
            stamina: '1.5 (0.8/s)',
            cooldown: '2s',
            description: 'Every 2s: Heal for 10. Use 6 Mana: For 2s, healing also deals damage',
            recipe: 'Demonic Flask + Magic Staff'
        },
        {
            damage: '7-12 (6.3/s)',
            stamina: '1.2 (0.8/s)',
            accuracy: '95%',
            cooldown: '1.5s',
            display_name: 'Darksaber',
            description: 'Deal +0.5 damage for each debuff of your opponent. On attack: Use 1 Mana to inflict 1 Blind',
            recipe: 'Corrupted Crystal + Lightsaber'
        },
        {
            damage: '9-12 (7/s)',
            stamina: '1 (0.7/s)',
            accuracy: '100%',
            cooldown: '1.5s',
            display_name: 'Crossblades',
            description: 'Start of battle: The Star Weapon gains 10 damage. The diamond item triggers 60% faster',
            recipe: 'Falcon Blade + Hero Longsword'
        },
        {
            damage: '5-12 (3.3/s)',
            stamina: '1 (0.7/s)',
            accuracy: '100%',
            cooldown: '1.4s',
            display_name: 'Holy Spear',
            description: 'On hit: Destroy 6 Block and cleanse 1 debuff for each Star free slot or Holy item in front of it. Use 25 Mana: Become invulnerable and attack 100% faster for 3s (once)',
            recipe: 'Glowing Crown + Spear'
        },
        {
            display_name: 'Rainbow Goobert Megasludge Alphapuddle',
            description: '6 item activations: Heal for 20, gain 20 Block, 2 Vampirism and 2 Empower, inflict 4 Blind, and give Star Weapons +4 damage',
            recipe: 'Blood Goobert + Carrot Goobert + Goobert + Light Goobert + Steel Goobert'
        },
        {
            display_name: 'Strong Demonic Flask',
            description: "Opponent drops below 50%: Consume this and steal 0.4 life for each debuff of your opponent, and for 3s, reduce opponent's healing by 30%",
            recipe: 'Corrupted Crystal + Demonic Flask'
        },
        {
            damage: '15-20 (8.8/s)',
            stamina: '0 (0/s)',
            accuracy: '90%',
            cooldown: '2s',
            display_name: 'Ruby Chonk',
            description: 'On hit: Gain 1 Heat. When you have at least 15 Heat, has a 30% chance to stun your opponent for 0.4s',
            recipe: 'Holo Fire Lizard + Ruby Whelp'
        },
        {
            display_name: 'Rainbow Goobert Omegaooze Primeslime',
            description: '6 item activations: Heal for 20, gain 20 Block and 2 Vampirism, inflict 4 Blind and 4 Poison, and give Star Weapons +4 damage',
            recipe: 'Blood Goobert + Light Goobert + Goobert + Poison Goobert + Steel Goobert'
        },
        {
            display_name: 'Cap of Discomfort',
            description: "Start of battle: Reduce damage taken by 25% for 5s. Opponent gains buff: 15% chance to nullify it. Your opponent's healing is reduced by 30%.",
            recipe: 'Corrupted Crystal + Cap of Resilience'
        },
        {
            display_name: 'Tim',
            description: 'Weapon socket: On hit: 50% chance to steal a random buff from your opponent. Armor & other sockets: 30% chance to resist a debuff or crit. Backpack: Opponent drops below 30% health: Heal for 50 and gain 5 empower',
            cost: 11
        },
        {
            display_name: 'Gingerbread Jerry',
            description: 'Start of battle: Gain 40 maximum health. Every 3s: Use 1 Luck, 1 Heat, and 1 Mana: Gain 1 Empower, 3 Regeneration, and 20 maximum health',
            cost: 8
        },
        {
            display_name: 'Mr. Struggles',
            description: 'Every 3s: Inflict Fatigue damage. On debuffed: 35% chance to inflict the same debuff. Health drops below 50%: Star items trigger 100% faster for 6s',
            cost: 10
        },
        {
            display_name: 'Piercing Arrow',
            description: 'Star Weapons deal +30% critical damage. They remove 5 Block on crit',
            cost: 10
        },
        {
            display_name: 'Yggdrasil Leaf',
            description: 'Start of battle: Gain 1 Mana and 1 Regeneration for each Star Nature item. 5 Mana used: Heal for 5 and cleanse 2 debuffs',
            cost: 10
        },
        {
            display_name: 'Poison Ivy',
            description: 'You have a 5% chance to resist debuffs for each Star Nature item. Spike gained: Inflict 2 Poison. Opponent reaches 19 Poison: They take +20% damage',
            cost: 10
        },
        {
            damage: '3-7 (2.5/s)',
            stamina: '0 (0/s)',
            accuracy: '95%',
            cooldown: '2.2s',
            display_name: 'Cursed Dagger',
            description: 'On stun: Triggers extra attack. On hit: Inflict 2 random debuffs. This and Star items have +1% accurace and +1% crit chance per debuff of your opponent',
            cost: 10
        },
        {
            display_name: 'Nocturnal Lock Lifter',
            description: 'Start of battle: Gain 2 Vampirism. Star Weapons steal 20% life. Your healing is amplified by 25%. Your Poison steals life through Vampirism',
            cost: 10
        },
        {
            display_name: 'Ranger Bag',
            description: 'Add 6 backpack slots. Items inside gain 10% critical hit chance + 3% for each Luck'
        },
        {
            display_name: 'Storage Coffin',
            description: 'Add 8 backpack slots. Item inside activates: 25% chance to inflict 1 Poison'
        },
        {
            display_name: 'Moon Shield',
            description: 'Star items give +30% Black. For ever 12 Block they gain, gain 1 Mana. On attacked: 35% chance to prevent 12 damage and remove 0.7 stamina from your opponent',
            recipe: 'Mana Orb + Shield of Valor'
        },
        {
            display_name: 'Corrupted Armor',
            description: 'Star Holy items are Dark. 10% chance for each Star Dark item to protect debuffs on your opponent from being cleansed. Start of battle: Gain 70 Block. Ever 3s: Cleanse 2 debuffs and inflict them on your opponent',
            recipe: 'Corrupted Crystal + Holy Armor'
        },
        {
            damage: '15-20 (8/s)',
            stamina: '2 (0.9/s)',
            accuracy: '85%',
            cooldown: '2.2s',
            display_name: 'Dancing Dragon',
            description: 'Deals +1 damager per Heat. You have a 2% chance to resist debuffs for each Luck. Start of battle: Gain 1 Heat and 1 Luck for each Star Magic item',
            cost: 12
        },
        {
            display_name: 'Wolpertinger',
            description: 'Increase stamina regeneration by 0.7% for each buff you have. Every 5s: Gain 3 of the buff you have the least of. Triggers 15% faster for each Star Pet',
            cost: 12
        },
        {
            display_name: 'Heart Container',
            description: 'Every 3s: Gain 1 Regeneration. User 7 Regeneration: Gain 80 maximum health, 3 Empower and your healing is increased by 15% (once)',
            cost: 12
        },
        {
            display_name: 'The Fool',
            description: 'On reveal: Cards are revealed 25% faster. If this is the first card in the chain, gain 1 Empower',
            cost: 5
        },
    ]
}