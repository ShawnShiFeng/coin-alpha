const db = require('../');

const FundInvestor = db.Model.extend({
  tableName: 'investors',
  funds: () => this.belongsTo('funds'),
  investors: () => this.belongsTo('investors'),
});

module.exports = db.model('FundInvestor', FundInvestor);
