const db = require('../');

const Fund = db.Model.extend({
  tableName: 'funds',
  investors: () => this.hasMany('investors').through('funds_investors'),
  funds_investors: () => this.hasMany('funds_investors'),
});

module.exports = db.model('Fund', Fund);
