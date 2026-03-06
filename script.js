function calculate() 
{

    let L = parseFloat(document.getElementById("L").value);
    let C = parseFloat(document.getElementById("C").value);
    let f1 = parseFloat(document.getElementById("f1").value);
    let f2 = parseFloat(document.getElementById("f2").value);

    if (isNaN(L) || isNaN(C) || isNaN(f1) || isNaN(f2)) 
        {
        alert("Please enter the values correctly");
        return;
    }

    if (f2 <= f1)
         {
        alert("Upper frequency must be greater than lower frequency");
        return;
    }

    let fr = 1 / (2 * Math.PI * Math.sqrt(L * C));
    let BW = f2 - f1;
    let Q = fr / BW;


    document.getElementById("Frequency").innerText = "Resonant Frequency: " + fr.toFixed(2) + " Hz";

    document.getElementById("bandwidth").innerText = "Bandwidth: " + BW.toFixed(2) + " Hz";

    document.getElementById("Quality").innerText = "Quality Factor: " + Q.toFixed(2);
}
