console.log('This is a command line dictionary tool that uses foutytwowords words api');
const http = require('http');
const args = process.argv;
const userargs = args.slice(2);
const userargslength = userargs.length;
const baseapi = 'http://fourtytwowords.herokuapp.com/';
const wordapi = baseapi + 'word.json/';
const wordsapi = baseapi + 'words.json/';
const api_key ='9e6759e60c71e91458f697bb4773fd5f70c151a3ac21a78745ef83c129217037abbf20f9d7c78a87ce47b962ef973ff938ba32676e4e6623d162cd2c35ce47c7e20ab9c12733be141662f80ce5fe3395';
const readline = require('readline');
var DictionaryTool = () => {
  if(userargslength == 0){
    wordOftheDay((data) => {
      console.log('Word of the Day - Dictionary:');
      dictionary(data.word);
    });
  }else if(userargslength == 1){
    var word = userargs[0];
    switch(word){
      case 'play':
        playgame();
        break;
        case 'help':
        printHelp();
        break;
      default:
        console.log('The dictionary for the word '+word);
        dictionary(word);
    }
  }else if(userargslength == 2){
    var word = userargs[1];
    var url = '';
    switch(userargs[0]) {
        case 'def':
          printDefinitions(word);
          break;
        case 'syn':
          printSynonyms(word);
          break;
        case 'ant':
          printAntonyms(word);
          break;
        case 'ex':
          examples(word);
          break;
        case 'dict':
          console.log('The dictionary for the word '+word);
          dictionary(word);
          break;
        default:
          printHelp();
    }
  }else{
    printHelp();
  }
};

DictionaryTool();
