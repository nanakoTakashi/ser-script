import { World, Commands } from "mojang-minecraft"

//Prefix for all custom commands
const commandPrefix = "!!"

case 'hi':
  // code
  Commands.run(`execute "${player.nameTag}" ~~~ give @s diamond 1`, dimension)
  break;





//Checks if a command was run (checks for the prefix)
World.events.beforeChat.subscribe(msg => {
  if(!msg.message.startsWith(commandPrefix)) return
   const args = msg.message.slice(commandPrefix.length).trim().split(/\s+/);
  msg.cancel = true
  const player = msg.sender
  const command = args.shift()
  customCommand(command, args, args.join(" "), player)
}
