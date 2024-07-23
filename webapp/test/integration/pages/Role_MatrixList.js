sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.kpo.rolematrixfiori',
            componentId: 'Role_MatrixList',
            contextPath: '/Role_Matrix'
        },
        CustomPageDefinitions
    );
});