// var x = document.getElementById("myRange").value;


// setInterval(() => {
//     if(x==1){
//         console.log("hyy1");
//     }
//     if(x==2){
//         console.log("hyy2");
//     }
// }, 100);

calculate = () => {
    var a = document.getElementById('input1').value;
    var b = document.getElementById('input2').value;

    // console.log(a);
    // console.log(b);
    var d = (a * b) / 100;
    if (0 <= b) {
        document.getElementById('display').innerHTML = d;
    }
    else{
        document.getElementById('display').innerHTML = "<h2>Calculate positive percentage only</h2>";
    }
}

calculateroot = () => {
    var a = document.getElementById('input3').value;
    var b = document.getElementById('input4').value;
    var c = document.getElementById('input5').value;
    var e = b*b-4*a*c;
    var f = Math.sqrt(e);
    var a1 = (-b+f)/2*a;
    var a2 = (-b-f)/2*a;
    console.log(e);
    console.log(f);
    console.log(a1);
    console.log(a2);
    if (e>=0) {
        document.getElementById('output1').innerHTML = a1;
        document.getElementById('output2').innerHTML = a2;
    }
    else{
        document.getElementById('output1').innerHTML = "<h2>Roots are imaginary</h2>";
        document.getElementById('output2').innerHTML = "";
    }
}

areac =()=>{
    var r =document.getElementById('radius').value;
    r = r*r*Math.PI;
    document.getElementById('circlearea').innerHTML =r;
}
areas =()=>{
    var r =document.getElementById('side').value;
    r = r*r;
    document.getElementById('squarearea').innerHTML =r;
}

arear=()=>{
    var r1 =document.getElementById('side1').value;
    var r2 =document.getElementById('side2').value;
    r1 = r1*r2;
    document.getElementById('rectanglearea').innerHTML =r1;
}

areat=()=>{
    var r1 =document.getElementById('side3').value;
    var r2 =document.getElementById('side4').value;
    r1 = (r1*r2)/2;
    document.getElementById('trianglearea').innerHTML =r1;
}

perimeterc =()=>{
    var r =document.getElementById('radius1').value;
    r = r*2*Math.PI;
    document.getElementById('circleperimeter').innerHTML =r;
}
perimeters =()=>{
    var r =document.getElementById('sides').value;
    r = r*4;
    document.getElementById('squperimeterrea').innerHTML =r;
}

perimeterr=()=>{
    var r1 =document.getElementById('sider1').value;
    var r2 =document.getElementById('sider2').value;
    r1 = 2*((r1*1)+(r2*1));
    document.getElementById('rectangleperimeter').innerHTML =r1;
}

perimetert=()=>{
    var r1 =document.getElementById('sidet3').value;
    var r2 =document.getElementById('sidet4').value;
    var r3 = r1*r1+r2*r2;
    r1 = (r1*1)+(r2*1)+(Math.sqrt(r3)*1);
    document.getElementById('triangleperimeter').innerHTML =r1;
}


