function fixFiles(files) {
    let filesStack={};
    return files.map(
      file => {
        if(filesStack.hasOwnProperty(file)){
          filesStack[file]++;
          return file.concat('(',filesStack[file],')');
        }else{
          filesStack[file]=0;
          return file;
        }
      }
    );
  }

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game'];
console.log(fixFiles(files2));
// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']