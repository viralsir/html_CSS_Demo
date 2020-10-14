if(!localStorage.getItem('cnt'))
{
    localStorage.setItem('cnt',0);
}

        function counter(){
            let count=localStorage.getItem('cnt');
            count++;

            //alert(count);
            if(count % 10===0)
            {
                alert(`count reach to  ${count}`);
            }
            document.querySelector("h1").innerHTML=count;
            localStorage.setItem('cnt',count);
            //setInterval(counter(),1000)
        }
        document.addEventListener('DOMContentLoaded',function(){
            document.querySelector("button").onclick=counter;
            document.querySelector("h1").innerHTML=localStorage.getItem('cnt');
        })