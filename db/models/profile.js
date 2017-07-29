const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  // projects: () => this.hasMany('projects'),
});

module.exports = db.model('Profile', Profile);
