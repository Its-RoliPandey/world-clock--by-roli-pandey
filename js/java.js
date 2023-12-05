function clock(){
    var d=new Date();
    //window.alert(d);
    var a=d.toLocaleString('US-en',
    {
        timeZone:'Asia/Kolkata',
    }
    );
    var b =d.toLocaleString('Us-en',
    {
        timeZone:'Asia/Shanghai',
    }
    );
    var c =d.toLocaleString('Us-en',
    {
        timeZone:'America/Los_Angeles',
    }
    );

    //window.alert(a);
    document.getElementById("h1").innerHTML=a.split(',')[1];
    document.getElementById("h2").innerHTML=b.split(',')[1];
    document.getElementById("h3").innerHTML=c.split(',')[1];
    //window.alert(h1);
    
    }
    clock();
    setInterval(()=>{
    clock();
    },1000)