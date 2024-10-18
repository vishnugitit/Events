// parent = document.getElementsByClassName("parent");
//       parent[0].addEventListener("click", (e) => {
//         console.log("Parent Triggered");
//       });
//       child = document.getElementsByClassName("child");
//       child[0].addEventListener("click", (e) => {
//         // e.stopImmediatePropagation();
//         console.log("Child_Triggered");
//       });
//       gchild = document.getElementsByClassName("gchild");
//       gchild[0].addEventListener(
//         "click",
//         (e) => {
//           e.stopImmediatePropagation();
//           console.log("GrandChild_Triggered");
//         },
//         true
//       );
//       ggchild = document.getElementsByClassName("ggchild");
//       ggchild[0].addEventListener("click", (e) => {
//         console.log("Great_Grand_Child_Triggered");
//       });