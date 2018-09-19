import { Template } from 'meteor/templating'; 
import { Names } from '../api/names.js';
import { ReactiveDict } from 'meteor/reactive-dict';
 
import './body.html';
import './nameRecord.js'



Template.body.helpers({
  names() {

    return Names.find({}, { sort: { createdAt: -1 } });
  },
});




Template.body.events({
  'submit .newName':function(event) {

    event.preventDefault();
 
    const target = event.target;
    const firstname = target.firstname.value;
    const lastname = target.lastname.value;
    const gender = target.gender.value;
    const bdy = target.bday.value;

    Names.insert({
      firstname,
      lastname,
      gender,
      bdy,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      
     });
 
    target.firstname.value = '';
    target.lastname.value = '';
  

  },

  'click .Deleteall'(event){

      Names.find({checked:true}).forEeach(function(name){
      Names.remove(name._id);
   
  });

  }
 
})