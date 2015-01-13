if(Meteor.isClient){
  Template.login.creatingAccount = function(){
    return Session.get("creatingAccount");
  }
  Template.login.events({
    
    'click #loginform' : function (){
      Session.set("creatingAccount", false);
    },
    
    'click #accountform': function(){
      Session.set("creatingAccount", true);
    },
    
    'click #createaccount': function(e,t){
      Session.set("creatingAccount", false);
      Accounts.createUser({
        username : t.find("#username").value,
        email : t.find("#email").value,
        password : t.find("#password").value,
        profile : {
          name : t.find("#name").value
        }
      });
    },
    
    'click #logout' : function(){
      Meteor.logout();
    },

    'click #login' : function(e,t){
      Meteor.loginWithPassword(t.find("#username").value, t.find("#password").value);
    }
  });
}