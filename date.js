exports.getDate=function(){
const today=new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
date=today.toLocaleDateString("en-US", options);
return date;
};

exports.getDay=function (){
const today=new Date();

const options = {
  weekday: "long"

};
date=today.toLocaleDateString("en-US", options);
return date;
}
