var rootNode = document.getElementById("root");

var tree = document.createElement("ul");
rootNode.appendChild(tree);


function createTree(elem, parent){
    for (var i = 0; i < elem.length; i++){
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        var p = document.createElement("p");
        var icon = document.createElement("i");
        icon.class = "material-icons";

        if (elem[i].folder){
            icon.innerHTML = "folder";
        }else{
            icon.innerHTML = "insert_drive_file";
        }

        var span = document.createElement("span");
        span.innerHTML = elem[i].title;
        span.class = "span-text";

        p.appendChild(icon);
        li.appendChild(p);
        parent.appendChild(li);
        p.addEventListener("click", function(el){
            if (this.nextElementSibling.style.display === "none"){
                this.nextElementSibling.style.display = "block";
                this.firstElementChild.innerHTML = "folder_open";
            } else {
                this.nextElementSibling.style.display = "none";
                this.firstElementChild.innerHTML = "folder";
            }
})

        if (elem[i].children){
            li.appendChild(ul);
            if (elem[i].folder){
                icon.innerHTML = "folder";
            }else{
                icon.innerHTML = "insert_drive_file";
            }

            ul.style.display = "none";
            createTree(elem[i].children, ul);

        }else if (elem[i].folder && !elem[i].children){
            parent.appendChild(ul);

            var empty = document.createElement("li");
            empty.class = "empty-text";
            empty.innerHTML = "Folder is empty";
            li.appendChild(empty);
            empty.style.display = "none";
        }
        
    }

}

createTree(structure, tree);
rootNode.appendChild(tree);