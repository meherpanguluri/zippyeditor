var image;
window.onload = function() {
   var ZippyEditor = document.registerElement('zippy-editor');
   document.body.appendChild(new ZippyEditor());
    document.getElementsByTagName("zippy-editor")[0].innerHTML=
        '<div  id="editor_container">'+
        '<div  id="toolbar_header">'+
                '<ul id="toolbar">'+
                   '<a href="#" onclick="boldSelection()"> <li><i class="fa fa-bold"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-italic"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-underline"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-header"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-font"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-undo"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-repeat"></i></li></a>'+
                    ' <a href="#" onclick="alignLeft()"><li ><i class="fa fa-align-left"></i></li></a>'+
                    '<a href="#" onclick="alignJustify()"><li ><i class="fa fa-align-justify"></i></li></a>'+
                    '<a href="#" onclick="alignRight()"><li ><i class="fa fa-align-right"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-list-ol"></i></li></a>'+
                    '<a href="#"><li ><i class="fa fa-list-ul"></i></li></a>'+
                   ' <a href="#" onclick="addTable()"><li ><i class="fa fa-table"></i></li></a>'+
                    ' <a href="#" onclick="showLink()"><li ><i class="fa fa-link"></i></li></a>'+
                   ' <a href="#" onclick="showImage()"><li><i class="fa fa-image"></i></li></a>'+
                   ' <a href="#"><li ><i class="fa fa-paperclip"></li></i></a>'+
                   ' <a href="#"><li ><i class="fa fa-save"></i></li></a>'+
                '</ul>'+
        '</div>'+
             '<div id="zippy-text-area" contentEditable="true">type here</div>'+
    '</div>'+
    '<div id="overlay">'+
     '<div id="zip_image_box">'+
        '<div class="pull-right"><i class="fa fa-close" onclick="showImage()"></i></div>'+
          '<div id="drop_area" ><i class="fa fa-plus fa-3x" style="color:#d8d8d8;margin-top:30px;"></i><h3 style="color:#d8d8d8;">Drag Image </h3> <h4 style="color:#d8d8d8;"> Click here to add image</h4></div>'+
        '<input type="text" name="imageurl" id="imgurl" placeholder="http://www.example.com/123.jpg"/>&nbsp;<input type="submit" id="imgsubmit" value="submit" /><br />'+
        '<div style="margin-top:10px;">Height&nbsp;<input type="range" min="0" max="500" step="10" onchange="rangevalue.value=value">&nbsp;<output id="rangevalue">50</output></div><br />'+
        '<div>Width&nbsp;<input type="range" min="0" max="500" step="10" onchange="rangevalue.value=value">&nbsp;<output id="rangevalue">50</output></div><br />'+
        '<input type="submit" class="imgsubmit" value="submit" onclick="addImage()" />'+
     '</div>'+
'</div>'+
'<div id="linklay">'+
        '<div id="link_box">'+
     '<div class="pull-right"><i class="fa fa-close" onclick="showLink()"></i></div>'+
        '<div>Add Links</div>'+
        '<div class="zip_form">'+
        'URL:<input type="text" name="link" id="link"/><br />'+
        'Alias:<input type="text" name="alias" placeholder="optional" id="alias"/><br />'+
        '<input type="submit" name="submit" value="add link" class="imgsubmit" onclick="addLink()"/>'+
        '</div>'+
        '</div>'+
 '</div>';
   editorCSS();
    //obtaining an image from browser and then rendering preview with the file reader
    var target = document.getElementById("drop_area");
target.addEventListener('dragover', function(e) {
        e.preventDefault();
        return false;
    })
    target.addEventListener('dragenter', function(e) {
        e.target.classList.add("dragover");
        target.style.border = "2px dashed green";
    })
    function onLeave(e) {
        e.target.classList.remove("dragover")
        target.style.border ="2px dashed black"
    }
    target.addEventListener('dragleave', onLeave)
    target.addEventListener('drop', function(e) {
        e.preventDefault()
        onLeave(e)
       
     //rendering a preview with the image obtained
        var reader = new FileReader()
        reader.onload = function (event) {
          image = new Image()
          image.style.width="160px"
          image.style.height="200px"
          image.style.position="relative"
          image.style.top="-179px"
          image.src = event.target.result
          target.appendChild(image)
          
        }
        reader.readAsDataURL(e.dataTransfer.files[0])
    })
};
function editorCSS()
{
    var modal_css = document.createElement('style');
    modal_css.type = "text/css";
    modal_css.id="_zip_id";
    modal_css.innerHTML='#overlay {visibility: hidden;position: absolute;left: 0px;top: 0px;width:100%;height:100%;text-align:center;z-index: 1000;}#linklay {visibility: hidden;position: absolute;left: 0px;top: 0px;width:100%;height:100%;text-align:center;z-index: 1000;}#link_box{width: 480px;margin: 230px auto;border-radius: 3px;height: 175px;background-color: #fff;border: 1px solid #eee;padding: 15px;text-align: center;-webkit-box-shadow: 3px 3px 7px 0px rgba(50, 42, 50, 0.66);-moz-box-shadow: 3px 3px 7px 0px rgba(50, 42, 50, 0.66);box-shadow: 3px 3px 7px 0px rgba(50, 42, 50, 0.66);}#zip_image_box {width: 500px;margin: 150px auto;border-radius: 3px;height: 400px;background-color: #fff;border: 1px solid #eee;padding: 15px;text-align: center;-webkit-box-shadow: 3px 3px 7px 0px rgba(50, 42, 50, 0.66);-moz-box-shadow: 3px 3px 7px 0px rgba(50, 42, 50, 0.66);box-shadow: 3px 3px 7px 0px rgba(50, 42, 50, 0.66);} .pullright{float:right;} #drop_area{  width: 350px;height: 200px;border: 2px dashed #d8d8d8;margin-left: 15%;margin-top: 20px;} #imgurl{width: 375px;height: 28px;margin-top: 30px;margin-left: -10px;border-radius: 2px;border: 1px solid #eee;padding-left:10px;}.imgsubmit{  height: 32px;width: 83px;background-color: rgb(118, 194, 118);border-radius: 2px;border: none;}input[type="range"] {-webkit-appearance: none !important;width: 75%;height: 3px;background-color: #A3CD99;border: 1px solid #97c68b;border-radius: 10px;margin: auto;transition: all 0.3s ease;}input[type="range"]:hover {background-color: #b2d5aa;}input[type="range"]::-webkit-slider-thumb {-webkit-appearance: none !important;width: 20px;height: 20px;background-color: #579E81;border-radius: 30px;box-shadow: 0px 0px 3px #3c6d59;transition: all 0.5s ease;}input[type="range"]::-webkit-slider-thumb:hover {background-color: #457d66;}input[type="range"]::-webkit-slider-thumb:active {box-shadow: 0px 0px 1px #3c6d59;}#rangevalue {text-align: center;font-family: "Quantico", sans-serif;font-size: 18px;display: inline;margin: auto;padding: 10px 10px;width: 100%;color: #579E81;}.zip_form input[type=text],.zip_form input[type=password],.zip_form input[type=submit] {font-family: "Roboto";}.zip_form input[type=text],.zip_form input[type=password] {  width: 70%;height: 40px;margin-bottom: 10px;padding-left: 15px;background: #fff;border: none;color: #e74c3c;outline: none;border: 1px solid #ddd;border-radius: 3px;}';
    document.body.appendChild(modal_css);
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
    editor_text.style.border="1px solid #ddd";
    editor_text.style.borderRadius="2px";
    editor_text.style.padding="10px";
}
/*=============================calling a modal box for adding a new image to the document========================*/
function addImage()
{    
     var editor_text = document.getElementById("zippy-text-area");
     /*var editor_image = document.createElement("img");
    editor_image.src="http://t2.gstatic.com/images?q=tbn:ANd9GcQCze-mfukcuvzKk7Ilj2zQ0CS6PbOkq7ZhRInnNd1Yz3TQzU4e&t=1";
    editor_image.setAttribute("height", "50");
    editor_image.setAttribute("width", "50");
    editor_image.setAttribute("alt", "Flower");*/
    editor_text.appendChild(image);
    showImage();
}
/*==============================function for getting the image and adding that to the text area=================*/
function showImage()
{
    el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
/*===========================function for getting the link and appending to the text area============= */
function showLink()
{
    el = document.getElementById("linklay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
function addLink()
{
    var zip_link = document.getElementById("link").value;
    var zip_alias = document.getElementById("alias").value;
    document.getElementById("link").value="";
    document.getElementById("alias").value="";
    showLink();
    var textComponent = document.getElementById('zippy-text-area');
    if(zip_alias=="")
    {
        var zip_a = document.createElement("a");
        zip_a.href=zip_link;
        zip_a.innerHTML=zip_link;
        textComponent.appendChild(zip_a);
    }
    else
    {
        var zip_a = document.createElement("a");
        zip_a.href=zip_link;
        zip_a.innerHTML=zip_alias;
        textComponent.appendChild(zip_a);
    }
}

/*==============================function for aligning text area=================*/
function boldSelection()
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
    var prev = textComponent.value.substring(0, startPos-1) + "<b>"
    
    selectedText = textComponent.value.substring(startPos, endPos);
    //var suc = "</b>"+textComponent.value.substring(endPos+1)
    textComponent.style.fontWeight="bolder"
    //textComponent.value = prev+selectedText+suc
  }
  alert("You selected: " + selectedText);
}
/*==============================creating new table===================*/
function addTable()
{
    var textComponent = document.getElementById('zippy-text-area');
    var zip_table = document.createElement("table");
    zip_table.border='1';
    var zip_table_body = document.createElement("tbody");
    zip_table.appendChild(zip_table_body);
    for(var i=0;i<3;i++)
    {
        var zip_tr = document.createElement("tr");
        zip_table_body.appendChild(zip_tr);
        for(var j=0;j<4;j++)
        {
            var zip_td = document.createElement("td");
            zip_td.style.width="100px";
            zip_td.style.height="50px";
            zip_tr.appendChild(zip_td);
        }
    }
    textComponent.appendChild(zip_table);
}

    var txtCom = document.getElementById('zippy-text-area');
    var sel = window.getSelection;
    alert(sel);
    txtCom.style.fontWeight="bolder";
    //txtCom.innerHTML = "<b>srineal</b>";
    //alert(txtCom);
}
function alignLeft()
{
    var txtCom = document.getElementById('zippy-text-area');
    txtCom.style.textAlign="left";
    //alert(txtCom);
}
function alignRight()
{
    var txtCom = document.getElementById('zippy-text-area');
    txtCom.style.textAlign="right";
    //alert(txtCom);
}
function alignJustify()
{
    var txtCom = document.getElementById('zippy-text-area');
    txtCom.style.textAlign="justify";
    //alert(txtCom);
}

//function ShowSelection()
//{
//  var textComponent = document.getElementById('zippy-text-area').innerHTML;
//  var selectedText;
//    alert(""+textComponent.getSelection);
//    console.log("this="+textComponent.nodeValue);
//  // IE version
//  if (document.selection != undefined)
//  {
//    textComponent.focus();
//    var sel = document.selection.createRange();
//    selectedText = sel.text;
//  }
//  // Mozilla version
//  else if (textComponent.selectionStart != undefined)
//  {
//    var startPos = textComponent.selectionStart;
//    var endPos = textComponent.selectionEnd;
//    var prev = textComponent.value.substring(0, startPos-1) + "<b>";
//    
//    selectedText = textComponent.value.substring(startPos, endPos); 
//    //var suc = "</b>"+textComponent.value.substring(endPos+1)
//    textComponent.style.fontWeight="bolder";
//    //textComponent.value = prev+selectedText+suc
//  }
//  alert("You selected: " + selectedText);
//}
/*==============================event on an image drop in the drop area===================*/

