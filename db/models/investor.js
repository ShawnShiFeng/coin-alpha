const db = require('../');

const Investor = db.Model.extend({
  tableName: 'investors',
  funds: () => this.hasMany('funds').through('funds_investors'),
  funds_investors: () => this.hasMany('funds_investors'),
});

module.exports = db.model('Investor', Investor);
