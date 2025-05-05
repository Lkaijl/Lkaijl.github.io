var posts=["2025/03/31/CTFshow/Ctfshow_php特性/","2025/04/22/CTFshow/反序列化/","2025/04/21/CTFshow/upload/","2025/03/15/GHCTF/ghctf/","2025/03/24/Hook/IAT_Hook/","2025/04/07/kali/kali安装docker/","2025/03/20/Hook/inline_hook/","2025/03/24/Linux/Linux基础知识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };