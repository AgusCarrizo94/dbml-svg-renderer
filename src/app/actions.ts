"use server";

import { exec } from "child_process";
import path from "path";

export async function renderDBML() {
  return new Promise((resolve, reject) => {
    const inputFile = "src/app/input/example.dbml";
    const outputFile = "src/app/output/output.svg";

    const inputFilePath = path.resolve(process.cwd(), inputFile);
    const outputFilePath = path.resolve(process.cwd(), outputFile);

    const command = `dbml-renderer -i ${inputFilePath} -o ${outputFilePath}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error executing command: ${error.message}`);
        return;
      }

      if (stderr) {
        reject(`Error: ${stderr}`);
        return;
      }

      console.log("Success!");
      resolve(stdout);
    });
  });
}
