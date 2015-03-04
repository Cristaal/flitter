Flitter.FleetsRoute = Ember.Route.extend({
  controllerName: 'fleets',
  renderTemplate: function() {
    this.render('fleets');
  },
  model: function() {
    return fleets;
  }
});
