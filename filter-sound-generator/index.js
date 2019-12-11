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
    name: 'alch',
    filterOptions: 'BaseType "Orb of Alchemy"',
  },
  {
    name: 'bbb',
    filterOptions: 'SocketGroup BBB\nItemLevel <= 14\n',
  },
  {
    name: 'bbg',
    filterOptions: 'SocketGroup BBG\nItemLevel <= 14\n',
  },
  {
    name: 'bgg',
    filterOptions: 'SocketGroup BGG\nItemLevel <= 14',
  },
  {
    name: '4 link b',
    filterOptions: 'LinkedSockets 4\nSocketGroup BBBB',
  },
  {
    name: '4 link g',
    filterOptions: 'LinkedSockets 4\nSocketGroup GGGG',
  },
  {
    name: '4 link bg',
    filterOptions: 'LinkedSockets 4\nSocketGroup BBGG',
  },
  {
    name: '4 link bg',
    filterOptions: 'LinkedSockets 4\nSocketGroup BBBG',
  },
  {
    name: '4 link bg',
    filterOptions: 'LinkedSockets 4\nSocketGroup BGGG',
  },
  {
    name: 'quicksilver',
    filterOptions: 'BaseType "Quicksilver Flask"',
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
