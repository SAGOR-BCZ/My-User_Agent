var userAgent = window.navigator.userAgent;
(async () => {
   var ip = (await fetch("https://api.ipify.org/?format=json").then(r => r.json())).ip;
      document.getElementById("ip").innerHTML = ip;
})();
document.getElementById("UserAgent").innerHTML = userAgent;
