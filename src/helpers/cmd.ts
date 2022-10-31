import * as shell from "shelljs";
import { CLICommand } from "./cli-command";

export const runCommand = async (command: CLICommand, ...args) => {
    return shell.exec(`suitecloud ${command} ${args}`);
}