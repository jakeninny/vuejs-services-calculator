new Vue({
  el: '#app',
  data: {
    //list services as array of objects
    services: [
      {
        name: 'Website Design',
        price: 400,
        active: false
      },
      {
        name: 'Branding',
        price: 400,
        active: false
      },
      {
        name: 'Logo Design',
        price: 400,
        active: false
      },
      {
        name: 'Website Development',
        price: 400,
        active: false
      },
      {
        name: 'Number of pages: 1 - 3',
        price: 400,
        active: false
      },
      {
        name: 'Number of pages: 4 - 6',
        price: 400,
        active: false
      },
      {
        name: 'Number of pages: 7 +',
        price: 400,
        active: false
      },
    ]
  },
  methods: {
    toggleActive: function(service) {
      service.active = !service.active;
    },

    calcTotal: function() {
      var total = 0;

      this.services.forEach(function(service){
        if (service.active) {
          total += service.price;
        }
      });

      return total;
    }

  }


});
