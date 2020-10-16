/**********************************************************************
 * 
 * Code generated automatically by DirectJNgine
 * Copyright (c) 2009, Pedro Agull¨® Soliveres
 * 
 * DO NOT MODIFY MANUALLY!!
 * 
 **********************************************************************/

Ext.namespace( 'Ext.app');

Ext.app.PROVIDER_BASE_URL=window.location.protocol + '//' + window.location.host + '/' + (window.location.pathname.split('/').length>2 ? window.location.pathname.split('/')[1]+ '/' : '')  + 'djn/directprovider';

Ext.app.POLLING_URLS = {
  message : Ext.app.PROVIDER_BASE_URL + '/poll/message' /* () => String -- calls sample.Poll.handleMessagePoll */
}

Ext.app.REMOTING_API = {
  url: Ext.app.PROVIDER_BASE_URL,
  type: 'remoting',
  actions: {
    Poll: [
    ],
    Grid: [
      {
        name: 'getResult'/*() => java.util.List */,
        len: 0,
        formHandler: false
      }
    ],
    TestAction: [
      {
        name: 'doEcho'/*(String) => String */,
        len: 1,
        formHandler: false
      },
      {
        name: 'getTree'/*(String) => java.util.List */,
        len: 1,
        formHandler: false
      },
      {
        name: 'multiply'/*(String) => double */,
        len: 1,
        formHandler: false
      }
    ],
    Hello: [
      {
        name: 'doHello'/*(String) => String */,
        len: 1,
        formHandler: false
      },
      {
        name: 'getResult'/*() => sample.Hello$Result */,
        len: 0,
        formHandler: false
      }
    ]
  }
}

