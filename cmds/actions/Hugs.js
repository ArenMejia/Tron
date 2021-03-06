const Command = require('../BaseCmd')

const IOTools = require('../../util/IOTools')
const ioTools = new IOTools()

module.exports = class Hug extends Command {
  constructor (client) {
    super(client, {
      name: 'hug',
      group: 'actions',
      memberName: 'hug',
      guildOnly: true,
      aliases: ['hugs', 'cuddle', 'cuddles'],
      description: 'Returns a random love gif and if a user is mentioned, includes their name.',
      examples: ['+hugs @Alcha#0042'],
      argsType: 'multiple'
    })
  }

  async run (msg, args) {
    if (msg.mentions.users.size > 0) {
      var content = `${this.getMentionedUsernames(msg)}, you've been hugged by **${msg.author.username}**. :heart:`
    }

    let image = await ioTools.getRandomImage('hug', args)
    return Command.sendMessage(msg.channel, content, this.client.user, { files: [image] })
  }
}
