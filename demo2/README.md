# Package
     1. 将文件放大node_modules/demo2中, ./node_modules : save modules
     2. put many submodules into one folder, and we need entrance to enter these submodules

        node_modules/demo2
                     -main.js
                            /foo
                             -add.js
                             -minus.js

        通过main.js来调用add.js and minus.js
        在node.js/demo2中 execute.js 直接调用main.js