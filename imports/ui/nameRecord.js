import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Names } from '../api/names.js';
 
import './nameRecord.html';
import './body.html';
 
 // var toggleItems = [];

Template.body.events({
  'click .toggle-checked'(event) {

    Names.update(this._id, {$set: {checked: event.target.checked}});
   
  },
  'click .delete'() {
     Names.remove(this._id);

  },
  'click .toggle-private'() {
  
  },
  'click .update'() {
     
}, 
'click .row-click'(){

     var form = document.getElementById('new-name');
     form.fname.value = this.firstname;
     form.lname.value = this.lastname;
     form.gender.value = this.gender;
     form.bday.value = this.bdy;
}
});




