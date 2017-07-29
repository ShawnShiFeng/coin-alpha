const db = require('../');

const FundHistory = db.Model.extend({
  tableName: 'fund_history',
  funds: () => this.belongsTo('funds'),
});

module.exports = db.model('FundHistory', FundHistory);
