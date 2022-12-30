function finder(){
    var nth=document.getElementById("nth").value;
    var print=document.getElementById("print");
    var nthPrint=document.getElementById("nthPrint");
    const l = [0];
    //Find l from n//
    for (let i = 0; i < nth; i++) {
        l.push(i+1);
        }
        let totalE = 0;
      
    //find e from l//
    //---Formula=>[{2(l+1)+1}*3]
    for (orbital of l) {
        orbitalE = ((6*orbital)+9);
        totalE = totalE + orbitalE;
        }
    print.innerHTML=totalE;
    nthPrint.innerHTML=l[l.length-1];
}