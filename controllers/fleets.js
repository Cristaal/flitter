Flitter.FleetController = Ember.ArrayController.extend({
  itemController: 'date',
  sortAscending: false,
  sortProperties: ['date'],
  actions: {
    sortByDate: function() {
      this.set('sortProperties', ['date']);

    }
  }
});
