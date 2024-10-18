content = document.getElementsByTagName("h1");
      function impure(a, b) {
        res = Math.floor(Math.random() * 10);
        solution = a + b + res+" Referesh the page";
        return (content[0].innerHTML = solution);
      }
      console.log(impure(2, 3));