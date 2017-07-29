const db = require('../');

const Investor = db.Model.extend({
  tableName: 'investors',
  funds: () => this.belongsTo('funds'),
  investors: () => this.belongsTo('investors'),
});

module.exports = db.model('Investor', Investor);
