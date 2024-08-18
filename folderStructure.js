// Function to print the folder structure
function printFolderStructure(path, level = 0) {
    // Read the contents of the current directory
    const fs = require('fs');
    const dirContents = fs.readdirSync(path);

    // Print each item in the directory at the correct indentation level
    for (const item of dirContents) {
        if (!item.startsWith('.')) { // Ignore folders that start with "."
            console.log(repeatString('|---', level) + ' ' + item);
            const itemPath = `${path}/${item}`;
            if (fs.statSync(itemPath).isDirectory()) {
                printFolderStructure(itemPath, level + 1);
            }
        }
    }

    // If the current directory is a file, just print its name
    const fileStat = fs.statSync(path);
    if (!fileStat.isDirectory() && !path.startsWith('.')) { // Ignore files that start with "."
        console.log(repeatString('|   ', level) + ' ' + path);
    }
}

// Helper function to repeat a string n times
function repeatString(str, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

// Get the current working directory
const cwd = process.cwd();

// Print the folder structure of the current directory
printFolderStructure(cwd);