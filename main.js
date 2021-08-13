var canvas = new fabric.Canvas('canvas');
 var x= document.getElementById("myAudio");
 var img_object = ""

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        img_object = Img;
        img_object.scaleToWidth(150);
        img_object.scaleToHeight(140);
        img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(img_object);
        console.log("image added")
    });
	
}

function playSound(){
	x.play()
}
