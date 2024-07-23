sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/kpo/rolematrixfiori/test/integration/FirstJourney',
		'com/kpo/rolematrixfiori/test/integration/pages/Role_MatrixList',
		'com/kpo/rolematrixfiori/test/integration/pages/Role_MatrixObjectPage'
    ],
    function(JourneyRunner, opaJourney, Role_MatrixList, Role_MatrixObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/kpo/rolematrixfiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRole_MatrixList: Role_MatrixList,
					onTheRole_MatrixObjectPage: Role_MatrixObjectPage
                }
            },
            opaJourney.run
        );
    }
);