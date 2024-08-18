const fs = require("fs");
const path = require("path");

const matchingExtensions = [".java", ".js", ".py", ".cpp", ".c"];
const excludedExtension = ".md";

let problemList = [];

// Function to print HTML table
function printHTMLTable(problemList) {
  let htmlTable = '<table border="1" cellpadding="5">';
  htmlTable += "<tr><th>Problem</th><th>Solved</th></tr>";
  problemList.forEach((problem) => {
    const githubLink = getGithubLink(problem.name);
    htmlTable += `<tr><td><a href="${githubLink}">${problem.name}</a></td>`;
    htmlTable += `<td> ${problem.solved ? "&check;" : "&cross;"}</td></tr>`;
  });
  htmlTable += "</table>";
  return htmlTable;
}

function useRegex(input) {
  let regex = /Q\d/i;
  return regex.test(input);
}

function isSolved(folderPath) {
  let hasMatchingFile = false;
  try {
    fs.readdirSync(folderPath).forEach((item) => {
      if (fs.statSync(`${folderPath}/${item}`).isFile()) {
        const fileExtension = "." + item.split(".").pop();
        // Skip files with the .md extension
        if (fileExtension === excludedExtension) return;
        if (matchingExtensions.includes(fileExtension)) {
          hasMatchingFile = true; // Set this flag to true, and we'll use it later
        }
      } else if (fs.statSync(`${folderPath}/${item}`).isDirectory()) {
        const subFolderResult = isSolved(`${folderPath}/${item}`);
        // If the subdirectory has a matching file, set our flag to true immediately
        if (subFolderResult) hasMatchingFile = true;
      }
    });
  } catch (error) {
    console.error(`Error traversing the directory: ${error}`);
  }
  return hasMatchingFile; // Return this flag at the end
}

// Function to traverse through the repo folder and find question folders
function findQuestionFolders(folderPath) {
  const dirContents = fs.readdirSync(folderPath);

  for (const item of dirContents) {
    if (!item.startsWith(".")) {
      // Ignore folders that start with "."
      const itemPath = `${folderPath}/${item}`;
      if (fs.statSync(itemPath).isDirectory()) {
        const match = useRegex(itemPath); // Check for any string containing Q followed by digits and a dot
        if (match) {
          const problemName = item; // Use the full folder name as the problem name
          const githubLink = getGithubLink(problemName);
          const problem = {
            name: problemName,
            githubLink: githubLink,
            solved: isSolved(itemPath),
          };
          console.log("Problem - ", problem);
          problemList.push(problem);
        } else {
          findQuestionFolders(itemPath); // Recursively search through subfolders
        }
      }
    }
  }

  return problemList;
}

// Function to get GitHub link based on folder name
function getGithubLink(folderName) {
  // For simplicity, assume the GitHub link is in the format https://github.com/user/repo/tree/main/folder-name
  const githubLink = `https://github.com/AashishSinghal/data-structures-and-algorithms/tree/master/${folderName}`;
  return githubLink;
}

// Main function to generate README.html file with problem list
function generateREADME(folderPath) {
  const problemList = findQuestionFolders(folderPath);
  const htmlTable = printHTMLTable(problemList);
  // Create README.html file if it doesn't exist, or append to the existing one
  let readmeContent = "";
  try {
    readmeContent = fs.readFileSync("README.md", "utf8");
  } catch (err) {
    // File does not exist, create a new one
  }
  const finalReadmeContent = `${readmeContent}${htmlTable}`;
  fs.writeFileSync("README.md", finalReadmeContent);
}

// Main function to run the program
function main() {
  // Get the current working directory
  const cwd = process.cwd();
  generateREADME(cwd);
}

main();
