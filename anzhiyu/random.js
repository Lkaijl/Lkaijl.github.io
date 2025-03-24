var posts=["2025/03/15/GHCTF/ghctf/","2025/03/24/Linux/Linux基础知识/","2025/03/20/Hook/inline_hook/","2025/03/24/Hook/IAT_Hook/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };