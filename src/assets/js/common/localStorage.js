( function() {
    function CreateRequest()
    {   
        let request = false;
        if (window.XMLHttpRequest)
        {
            request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject)
        {
            try
            {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (CatchException)
            {
                request = new ActiveXObject("Msxml2.XMLHTTP");
            }
        }
        if (!request)
        {
        console.error("Невозможно создать XMLHttpRequest");
        }
        return request;
    }


    try {
        let request = CreateRequest();
        let url = './img/svgSprite.svg';

        request.open('GET', url, true);
        request.onload = () => {

            if (request.status >= 200 && request.status < 400 ) {
                let node = document.createElement("div");
                node.style.display = "none";
                node.innerHTML = request.responseText;
                document.body.insertBefore(node, document.body.firstChild);

                localStorage.setItem( 'inlineSVGdata',  request.responseText );
            }

        };
        request.send();
    }
    catch( e ){}
}());