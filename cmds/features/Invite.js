const Command = require('../BaseCmd')

class Invite extends Command {
  constructor (client) {
    super(client, {
      name: 'invite',
      group: 'features',
      memberName: 'invite',
      description: 'Returns an invite link to add Tron to your server.',
      examples: ['+invite']
    })
  }

  async run (msg, args) {
    return Command.sendMessage(msg.channel, 'would you like me to join your server? :smiley:\nhttps://discordapp.com/oauth2/authorize?client_id=258162570622533635&scope=bot', this.client.user)
  }
}

module.exports = Invite
