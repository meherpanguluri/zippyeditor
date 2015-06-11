window.onload = function() {
   var ZippyEditor = document.registerElement('zippy-editor');
   document.body.appendChild(new ZippyEditor());
    document.getElementsByTagName("zippy-editor")[0].innerHTML=
        '<div  id="editor_container">'+
        '<div  id="toolbar_header">'+
                '<ul id="toolbar">'+
                   '<a href="#" onclick="ShowSelection()"> <li><i class="fa fa-bold"></i></li></a>'+
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
             '<textarea id="zippy-text-area"></textarea>'+
    '</div>';
   editorCSS();
 
};
function editorCSS()
{
    var editor_container = document.getElementById("editor_container");
    editor_container.style.width= "1000px";
    editor_container.style.verticalAlign="middle";
    editor_container.style.margin="160px auto";
    var editor_toolbar = document.getElementById("toolbar_header");
    editor_toolbar.style.height="40px";
    editor_toolbar.style.backgroundColor="#ffffff";
    editor_toolbar.style.verticalAlign="middle";
    editor_toolbar.style.textAlign="center";
    editor_toolbar.style.marginLeft="-50px";
    var editor_toolbar_ul = document.getElementById("toolbar");
    editor_toolbar_ul.style.listStyleType="none";
    editor_toolbar_ul.style.textAlign="center";
    var editor_toolbar_ul_li = editor_toolbar_ul.getElementsByTagName("li");
    for(var i=0;i<editor_toolbar_ul_li.length;i++)
    {
        editor_toolbar_ul_li[i].style.display="inline";
        editor_toolbar_ul_li[i].style.textDecoration="none";
        editor_toolbar_ul_li[i].style.padding=".7em 1em";
        editor_toolbar_ul_li[i].style.color="#000";
        editor_toolbar_ul_li[i].style.borderRadius="2px";
        editor_toolbar_ul_li[i].style.border="1px solid #ddd";
        editor_toolbar_ul_li[i].style.width="5px";
        editor_toolbar_ul_li[i].style.height="40px";
    }
    var editor_text = document.getElementById("zippy-text-area");
    editor_text.style.width="1000px";
    editor_text.style.marginTop="0px";
    editor_text.style.marginBottom="0px";
    editor_text.style.height="370px";
    editor_text.style.overflowY="scroll";
    editor_text.style.resize="none";
    
}
function ShowSelection()
{
  var textComponent = document.getElementById('zippy-text-area');
  var selectedText;
  // IE version
  if (document.selection != undefined)
  {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  }
  // Mozilla version
  else if (textComponent.selectionStart != undefined)
  {
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    //var prev = textComponent.value.substring(0, startPos-1) + "<b>"
    
    selectedText = textComponent.value.substring(startPos, endPos) 
    //var suc = "</b>"+textComponent.value.substring(endPos+1)
    textComponent.style.fontWeight="bolder"
    //textComponent.value = prev+selectedText+suc
  }
  alert("You selected: " + selectedText);
}