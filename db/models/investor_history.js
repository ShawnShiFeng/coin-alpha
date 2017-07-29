const db = require('../');

const InvestorHistory = db.Model.extend({
  tableName: 'investor_history',
  funds: () => this.belongsTo('funds'),
  investors: () => this.belongsTo('investors'),
});

module.exports = db.model('InvestorHistory', InvestorHistory);
