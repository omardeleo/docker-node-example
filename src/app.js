new Vue({
  el: '#events',

  data: {
    event: { title: '', detail: '', date: '' },
    events: []
  },

  mounted: function () {
    this.fetchEvents();
  },

  methods: {

    fetchEvents: function () {
      console.log("fetchEvents")

      this.$http.get('/api/events')
        .then(function (res) {
          this.$set(this, 'events', res.body);
          console.log(res.body);
        }, function (err) {
          console.log(err);
        })
    },

    addEvent: function () {
      if (this.event.title.trim()) {
        this.$http.post('/api/events', this.event)
          .then(function (res) {
            this.events.push(this.event);
            console.log('Event added!');
          }, function (err) {
            console.log(err);
          })
      }
    },

    deleteEvent: function (id) {
      if (confirm('Are you sure you want to delete this event?')) {        
        this.$http.delete('api/events/' + id)
          .then(function (res) {
            console.log(res);
            const index = this.events.find(x => x.id === id)
            this.events.splice(index, 1);
          }, function (err) {
            console.log(err);
          })
      }
    }
  }
});