const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

const texts = [
  'bbb',
  'bbg',
  'bgg',
  '4 link b',
  '4 link g',
  '4 link bg',
  '5 link bg',
];
const speed = 2;

texts.forEach((text) => {
  const outputFile = `output/${text}.mp3`

  const request = {
    input: {text: text},
    voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
    audioConfig: {audioEncoding: 'MP3', speakingRate: speed},
  };
  client.synthesizeSpeech(request).then(([response]) => {
    const writeFile = util.promisify(fs.writeFile);
    return writeFile(outputFile, response.audioContent, 'binary');
  }).then(() => {
    console.log(`Audio content written to file: ${outputFile}`);
  }).catch((e) => {
    console.error(e);
  });
});
