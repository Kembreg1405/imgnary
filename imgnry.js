const imgnry={};

imgnry.resize=()=>{return imgnry.reader().then((i)=>imgnry.image(i)).then((img)=>imgnry.size(img))}

imgnry.max=(ismax='')=>
{
if(typeof imgnry.max.value=='undefined') imgnry.max.value=true;
if(ismax=='') return imgnry.max.value;
if(ismax) imgnry.min(false);
imgnry.max.value=ismax;
}

imgnry.min=(ismin='')=>
{
if(typeof imgnry.min.value=='undefined') imgnry.min.value=false;
if(ismin=='') return imgnry.min.value;
if(ismin) imgnry.max(false);
imgnry.min.value=ismin;
}

imgnry.file=(file='')=>
{
if(typeof imgnry.file.value=='undefined') imgnry.file.value='';
if(file=='') return imgnry.file.value;
imgnry.file.value=file;
}

imgnry.quality=(q='')=>
{
if(typeof imgnry.quality.value=='undefined') imgnry.quality.value=1;
if(q=='') return imgnry.quality.value;
imgnry.quality.value=q;
}

imgnry.type=(type='')=>
{
if(typeof imgnry.type.value=='undefined') imgnry.type.value='image/png';
if(type=='') return imgnry.type.value;
if(type!='jpeg') if(type!='webp') type='png';
imgnry.type.value='image/'+type;
}

imgnry.width=(pixels=null)=>
{
if(typeof imgnry.width.value=='undefined') imgnry.width.value='';
if(pixels==null) return imgnry.width.value;
if(pixels!='') imgnry.height('');
imgnry.width.value=pixels;
}

imgnry.height=(pixels=null)=>
{
if(typeof imgnry.height.value=='undefined') imgnry.height.value='';
if(pixels==null) return imgnry.height.value;
if(pixels!='') imgnry.width('');
imgnry.height.value=pixels;
}

imgnry.reader=()=>
{
let reader=new FileReader();
reader.readAsDataURL(imgnry.file());
return new Promise((resolve,reject)=>{reader.onload=()=>{resolve(reader.result)}});
}

imgnry.image=(base64) => 
{
return new Promise((resolve,reject)=>
  {
  const img= new Image();
  img.onload=()=>resolve(img);
  img.onerror=reject;
  img.src=base64;
  });
}

imgnry.size=(img)=>
{
var newWidth,newHeight;
if(imgnry.width()!='')
  {
  newWidth=imgnry.width();
  if(imgnry.max()) if(img.naturalWidth<newWidth) newWidth=img.naturalWidth;
  if(imgnry.min()) if(img.naturalWidth>newWidth) newWidth=img.naturalWidth;
  newHeight=newWidth*img.naturalHeight/img.naturalWidth;
  }
if(imgnry.height()!='')
  {
  newHeight=imgnry.height();
  if(imgnry.max()) if(img.naturalHeight<newWidth) newHeight=img.naturalWidth;
  if(imgnry.min()) if(img.naturalHeight>newWidth) newHeight=img.naturalWidth;
  newWidth=newHeight*img.naturalWidth/img.naturalHeight;
  }
const canvas=document.createElement('canvas');
const ctx=canvas.getContext('2d');
canvas.width=newWidth;
canvas.height=newHeight;
ctx.drawImage(img,0,0,canvas.width,canvas.height);
return canvas.toDataURL(imgnry.type(),imgnry.quality());
}
