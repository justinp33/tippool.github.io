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

    it('should sum all tip percent on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(15);

        billAmtInput.value = 200;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    });
    
    it('should calculate tip percentage on calculateTipPercent()', function() {
        expect(calculateTipPercent(100,20)).toEqual(20);
        expect(calculateTipPercent(200,30)).toEqual(15);
    });

    it('should append a newly created td element from the value to a tr on appendTd()', function() {
        let newTr = document.createElement('tr');
        
        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should append a delete button to tr on appendDeleteBtn()', function() {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML =  '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentID = 0;
    });
});
