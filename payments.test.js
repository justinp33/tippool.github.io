describe("Payments test (with setup and tear-down)", function(){
    beforeEach(function () {
        // initialization logic
        let billAmt = 100;
        let tipAmt = 20;
    });






    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        allPayments = {};
        paymentID = 0;
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML =  '';
    });
});


