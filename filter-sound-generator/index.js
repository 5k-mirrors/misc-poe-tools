const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

const defaultStyles = `SetFontSize 45
SetTextColor 255 0 0 255                # TEXTCOLOR:	 T0 Item
SetBorderColor 255 0 0 255              # BORDERCOLOR:	 T0 Item
SetBackgroundColor 255 255 255 255      # BACKGROUND:	 T0 Drop
PlayEffect Red
MinimapIcon 0 Red Star`

const speed = 2;
const volume = 1;

const customFilters = [
  {
    name: 'wisdom',
    filterOptions: 'BaseType "Scroll of Wisdom"',
  },
  {
    name: 'portal',
    filterOptions: 'BaseType "Portal Scroll"',
  },
  {
    name: 'augment',
    filterOptions: 'BaseType "Orb of Augmentation"',
  },
  {
    name: 'wisdoms',
    filterOptions: 'BaseType "Blacksmith\'s Whetstone"',
  },
  {
    name: 'wisdoms',
    filterOptions: 'BaseType "Armourer\'s Scrap"',
  },
  {
    name: 'topaz',
    filterOptions: 'BaseType "Topaz Ring"',
  },
  {
    name: 'sapphire',
    filterOptions: 'BaseType "Sapphire Ring"',
  },
  {
    name: 'transmute',
    filterOptions: 'BaseType "Orb of Transmutation"',
  },
  {
    name: 'alt',
    filterOptions: 'BaseType "Orb of Alteration"',
  },
  {
    name: 'chance',
    filterOptions: 'BaseType "Orb of Chance"',
  },
  {
    name: 'chrome',
    filterOptions: 'BaseType "Chromatic Orb"',
  },
  {
    name: 'chrome',
    filterOptions: 'SocketGroup RGB',
  },
  {
    name: 'alchemy',
    filterOptions: 'BaseType "Orb of Alchemy"',
  },
  {
    name: 'bbb',
    filterOptions: 'LinkedSockets 3\nSocketGroup BBB\nItemLevel <= 15\nClass "Boots" "Gloves" "Helmets" "Sceptres" "Wands" "Daggers" "Rune Dagger"',
  },
  {
    name: 'bbg',
    filterOptions: 'LinkedSockets 3\nSocketGroup BBG\nItemLevel <= 15\nClass "Boots" "Gloves" "Helmets" "Sceptres" "Wands" "Daggers" "Rune Dagger"',
  },
  {
    name: 'bgg',
    filterOptions: 'LinkedSockets 3\nSocketGroup BGG\nItemLevel <= 15\nClass "Boots" "Gloves" "Helmets" "Sceptres" "Wands" "Daggers" "Rune Dagger"',
  },
  {
    name: '4 link b',
    filterOptions: 'LinkedSockets 4\nSocketGroup BBBB\nClass "Boots" "Gloves" "Helmets" "Body Armour"',
  },
  {
    name: '4 link g',
    filterOptions: 'LinkedSockets 4\nSocketGroup GGGG\nClass "Boots" "Gloves" "Helmets" "Body Armour"',
  },
  {
    name: '4 link bg',
    filterOptions: 'LinkedSockets 4\nSocketGroup BBGG\nClass "Boots" "Gloves" "Helmets" "Body Armour"',
  },
  {
    name: '4 link bg',
    filterOptions: 'LinkedSockets 4\nSocketGroup BBBG\nClass "Boots" "Gloves" "Helmets" "Body Armour"',
  },
  {
    name: '4 link bg',
    filterOptions: 'LinkedSockets 4\nSocketGroup BGGG\nClass "Boots" "Gloves" "Helmets" "Body Armour"',
  },
  {
    name: 'quicksilver',
    filterOptions: 'BaseType "Quicksilver Flask"',
  },
  {
    name: '5 link bbb',
    filterOptions: 'LinkedSockets 5\nSocketGroup BBB\nClass "Body Armour"',
  },
  {
    name: '5 link ggg',
    filterOptions: 'LinkedSockets 5\nSocketGroup GGG\nClass "Body Armour"',
  },
  {
    name: '6 link',
    filterOptions: 'LinkedSockets 6\nClass "Body Armour"',
  },
];

let filterOutput = "";

const createFilterStyle = (soundFileName, filterOptions) => {
  return `Show
${filterOptions}
${defaultStyles}
CustomAlertSound "${soundFileName}"

`;
}

customFilters.forEach((customFilter) => {
  const outputFileName = `${customFilter['name']}.mp3`
  const outputFilePath = `output/${outputFileName}`

  const request = {
    input: {text: customFilter['name']},
    voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
    audioConfig: {audioEncoding: 'MP3', speakingRate: speed, volumeGainDb: volume},
  };

  filterOutput += createFilterStyle(outputFileName, customFilter['filterOptions']);

  client.synthesizeSpeech(request).then(([response]) => {
    const writeFile = util.promisify(fs.writeFile);
    return writeFile(outputFilePath, response.audioContent, 'binary');
  }).then(() => {
    console.log(`Audio content written to file: ${outputFilePath}`);
  }).catch((e) => {
    console.error(e);
  });
});

console.log("Add this to your filter:\n");
console.log(filterOutput);
