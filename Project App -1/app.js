
function add()
{

    var inputs=document.getElementById("ver");
    var task=inputs.value;
 var list=document.getElementById("list");
    var node=document.createElement("li");
    node.classList.add("texts")
    var exit=document.createElement("p");
    exit.classList.add("done");
    //var exitNode=document.createTextNode("");
    //exit.appendChild(exitNode);

          var nodeValue=document.createTextNode(task);
      node.appendChild(nodeValue);
      list.appendChild(node);
      list.appendChild(exit);

  }
