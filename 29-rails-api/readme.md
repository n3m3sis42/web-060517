1. why need rails/what belongs in rails
  a. database
  b. discounted store
    should a calculation be made on the rails side or the javascript side


    server
      because you can check your math
      hide logic
    javascript


    api
      server

    ios
    android
    web



  c. modeling on both sides
    user.songs().map((song) => {
      `<li> ${song.html}</li>`
      })
  store = {tasks: {completed: true}}
  d. when to send to the rails app

  e. working with post requests

https://en.wikipedia.org/wiki/Same-origin_policy
https://github.com/cyu/rack-cors
  jQuery.ajax({
  type: 'POST',
  url: 'http://localhost:3000/actors',
  dataType: 'json',
  contentType: 'application/json',
  data: JSON.stringify({ actor: { name: "Yehuda", hometown: "Katz" } }),
  success: function(json) { console.log(json) }
});
