var posts=["2025/03/15/GHCTF/ghctf/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };