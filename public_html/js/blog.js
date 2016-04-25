$(function () {
    var APPLICATION_ID = "75C09C4D-40BA-C49A-FF5F-A46BB185AB00",
        SECRET_KEY = "13A9C922-579B-3E92-FFA1-0F8BAE2D1200",
        VERSION = "v1";
    
   Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
   
    var postsCollection = Backendless.Persistence.of(Posts).find();
   
   console.log(postsCollection);
   
   var wrapper = {
       posts: postsCollection.data
   };
   
   Handlebars.registerHelper('format', function (time) {
       return moment(time).format("dddd, MMMM, Do YYYY");
   });
   
   var blogScript = $("#blogs-template").html();
   var blogTemplate = Handlebars.compile(blogScript);
   var blogHTML = blogTemplate(wrapper);
   
   $('.main-container').html(blogHTML);
   
 });
 
 function Posts(args){
     args = args || {};
     this.title = args.title || "";
     this.content = args.content || "";
     this.authorEmail = args.authorEmail || "";
 }