const pagr = "Kaip tu gyveni?";
const pagrilg = ["Kaip tu gyveni?", "Gana gerai.", "Supratau."];
const pagrilgilg = ["Kaip tu gyveni?", "Gana gerai.", "Supratau.", "O tu?", "Labai puikiai - išsimiegojau gerai."];
function length(prm){
    return prm.length;
}
function slice(prm, slc1, slc2){
    return prm.slice(slc1,slc2);
}
function substr(prm, substr1, substr2){
    return prm.substr(substr1,substr2);
}
function substring(prm, sub1, sub2){
    return prm.substring(sub1, sub2);
}
function indexOf(prm, index){
    var indexOf = prm.indexOf(index);
    return indexOf;
}
function search(prm, search){
    var srch = "";
    var ats = [];
    for (var element of prm){
    srch = element.search(search);
        if (srch > -1){
        ats.push(`"${element}" string, ${srch} pos`);
        }
    }
    return ats;
}
console.log(length(pagr));
console.log(slice(pagr,8));
console.log(substr(pagr,8,2));
console.log(substring(pagr,10,14));
console.log(indexOf(pagr,"gyveni"));
console.log(search(pagrilgilg,"gerai"));