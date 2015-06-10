window.onload = function(){
   var ZippyEditor = document.registerElement('zippy-editor');
   document.body.appendChild(new ZippyEditor());
    document.getElementsByTagName("zippy-editor")[0].innerHTML=
        '<div class="zippyeditor">'+
        '<div class="toolbar-text">'+
                '<ul class="toolbar">'+
                   '<a href="#" onclick="alr()"> <li><i class="fa fa-bold"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-italic"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-underline"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-header"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-font"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-undo"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-repeat"></i></li></a>'+
                    ' <a href="#"><li ><i class="fa fa-align-left"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-align-justify"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-align-right"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-list-ol"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-list-ul"></i></li></a>'+
                   ' <a href="#"><li ><i class="fa fa-table"></i></li></a>'+
                    ' <a href="#"><li ><i class="fa fa-link"></i></li></a>'+
                   ' <a href="#"><li ><i class="fa fa-image"></i></li></a>'+
                   ' <a href="#"><li ><i class="fa fa-paperclip"></li></i></a>'+
                   ' <a href="#"><li ><i class="fa fa-save"></i></li></a>'+
                '</ul>'+
        '</div>'+
             '<textarea class="zippy-text-area"></textarea>'+
    '</div>';
    
};
function alr()
{
    alert("test");
}