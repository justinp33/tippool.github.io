describe("Helpers test (with setup and tear-down)", function(){
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
        submitPaymentInfo();
    });

    it('should sum all tips on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(15);

        billAmtInput.value = 200;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(45);

    });

    it('should sum all bills on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
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
