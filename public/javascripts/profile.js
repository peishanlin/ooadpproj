//======================================================================================================================================
// navbar
// $("#reviewsContent").hide();
// $(document).ready(function(){
//     $(".reviews").click(function(){
//         $("#listingsContent").hide();
//         $("#reviewsContent").show();
//         $(".reviews").css({"color": "#999", "border-bottom": "2px solid #999"});
//         $(".listings").css({"color": "none", "border-bottom": "none"});
//     });
//     $(".listings").click(function(){
//         $("#reviewsContent").hide();
//         $("#listingsContent").show();
//         $(".listings").css({"color": "#999", "border-bottom": "2px solid #999"});
//         $(".reviews").css({"color": "none", "border-bottom": "none"});
//     });
// });

// filtering
var elementClicked;
$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $('.filter').not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
    
});

// check if element exists & create a 'See More' button! 
if ($(".list-group > #more").length > 0){
    //hide element content
    $(".list-group > #more").hide();
    // create a button
    var button = document.createElement("button");
    button.innerHTML = "View More";
    var check = document.getElementById("checkMoreExistence")
    check.appendChild(button)

    // creating a function: display element content when the button is being clicked
    button.addEventListener ("click", function() {
        if (button.innerHTML == "View Less"){
            button.innerHTML = "View More";
            $(".list-group > #more").fadeOut();
            
        }else if(button.innerHTML == "View More"){
            button.innerHTML = "View Less";
            $(".list-group > #more").fadeIn(); 
        }
    });

    // check the element for filter seller and  buyer
}

// upload image
$(':input[type=file]').change( function(event) {
    var tmppath = URL.createObjectURL(event.target.files[0]);

    //get parent using closest and then find img element
    $(this).closest("div").find("img").attr('src',tmppath);

    console.log(event)
});

// $('img').on('error', function () {
//     $(this).remove();
// })
// $('img').error(function(){
//     $(this).attr('src', 'missing.png');
// });
// trim length for listing title
var length = parseInt(document.getElementsByClassName("itemName").length);
for (i=0;i<length;i++)
{
    var title = document.getElementsByClassName("itemName")[i].innerHTML;
    title = title.trim();
    if (title.length > 20){
        console.log("title.length:",title.length)
        var shortText = jQuery.trim(title).substring(0, 18).trim(this) + "...";
    }else{
        shortText = title;
    }
    document.getElementsByClassName("itemName")[i].innerHTML = shortText;
}
    