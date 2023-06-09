function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kC3DrLiLL/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('cow');

        if (results[0].label == "Barking") {
            img.src = 'Dog cartoon.jpg';
            img1.src = '';
            img2.src = '';
            img3.src = '';
        } else if (results[0].label == "Meowing") {
            img.src = '';
            img1.src = 'cat cartoon.jpg';
            img2.src = '';
            img3.src = '';
        } else if (results[0].label == "Roaring") {
            img.src = '';
            img1.src = '';
            img2.src = 'lion cartoon.jpg';
            img3.src = '';
        } else{
            img.src = '';
            img1.src = '';
            img2.src = '';
            img3.src = 'cow cartoon.jpg';
        }    
    }   
}