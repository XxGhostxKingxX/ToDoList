$(function () {
    var APPLICATION_ID = "3C244946-95D6-B314-FF4C-04BA159A8800",
        SECRET_KEY = "36FFFEED-05E1-66BC-FFA7-B16C1B97C000",
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