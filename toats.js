import Vue from "vue";
//import Toasted from "vue-toasted";


//Vue.use( Toasted );


const option = {
  position: "top-center",
  duration: 3000
};


let toasted = {

  success: function(message) {
    console.log('Vue Toasted success message:', message);
    //Vue.toasted.success( message, option );
  },

  error: function(message) {
    console.log('Vue Toasted error message:', message);
    //Vue.toasted.error( message, option );
  }

};

export {
  toasted
};