Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) { //data_uri set the link
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version); //ml5 classifies images
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/R4ajHZxnP/model.json", modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}