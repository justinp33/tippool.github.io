describe("Payments test (with setup and tear-down)", function(){
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should create a new payment on createCurPayment()', function() {
        let curPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }

        expect(createCurPayment()).toEqual(curPayment);
    });

    it('should not create a new payment if inputs are empty on createCurPayment()', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    it('should update payment table and append on appendPaymentTable()', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('20%');
    });

    it('should update summary table on updateSummary()', function() {
        submitPaymentInfo();
        updateSummary();

        expect(summaryTds[0].innerHTML).toEqual('$100');
        expect(summaryTds[1].innerHTML).toEqual('$20');
        expect(summaryTds[2].innerHTML).toEqual('20%');
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



